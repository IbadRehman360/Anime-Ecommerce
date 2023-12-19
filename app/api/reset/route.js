import User from "@models/user";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).end();
  }

  try {
    await db.connectDb();

    const { user_token, password } = req.body;

    const decodedToken = jwt.verify(user_token, process.env.RESET_TOKEN_SECRET);
    const user_id = decodedToken.userId;

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "Account does not exist." });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    await user.updateOne({
      password: hashedPassword,
    });

    await db.disconnectDb();

    res.status(200).json({ email: user.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
