const Author = require("../../../model/user/authors.schema");
const Base = require("../../../base");

class User extends Base {
  // Mutations for the user OR Author
  async addAuthor(data) {
    const foundAuthor = await Author.findOne({ email: data.email });

    if (foundAuthor)
      throw new AuthenticationError(
        "A user with the given email already exits..."
      );
    // return await Author.create(data);

    data.password = await this.hashPassword(data.password);

    const user = await Author.create(data);
    return user;

    // if (user) {
    //   user.emailVerificationToken = await this.getEmailVerifierToken(
    //     user.username
    //   );
    //   await user.save();

    //   const message = await this.getEVTTemplate(
    //     "Registration was successful",
    //     user.emailVerificationToken
    //   );
    //   const subject = "Account Verification";

    //   this.sendMail(user.email, message, subject);

    //   return "Registration Successful";
    // }
  }

  async updateUser(data) {
    try {
      const updatedAuthor = await Author.updateOne(
        { _id: id },
        { $set: { data } },
        { new: true }
      );

      if (updatedAuthor.ok === 1) return "update successful";
    } catch (e) {
      throw new Error(e);
    }
  }
  // update author here

  async login(data) {
    try {
      const foundUser = await Author.findOne({ email: data.email });

      if (!foundUser) {
        throw new Error("No user found");
      }

      const isValid = await this.comparePassword(
        data.password,
        foundUser.password
      );

      if (isValid) {
        const payload = {
          id: foundUser._id,
          username: foundUser.username,
          email: foundUser.email,
          name: foundUser.name
        };
        const token = await this.createToken(payload);
        return {
          code: 200,
          token
        };
      } else {
        throw new Error("Invalid Password");
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  // Queries
  async getAuthor(id) {
    const foundUser = await Author.findById(id);

    if (!foundUser) throw new Error("user with ID does not exist");

    return foundUser;
  }

  async getAuthors() {
    return await Author.find({});
  }
}

module.exports = User;
