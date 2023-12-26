import User from "@app/models/user";

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// export default async function handler(req, res) {
//     if (req.method !== "PUT") {
//         return res.status(405).end();
//     }

//     try {
//         await db.connectDb();

//         const { email } = req.body;


//         const user = await User.findById(email);
//         if (!user) {
//             return res.status(400).json({ message: "Account does not exist." });
//         }


//         await user.updateOne({

//         });

//         await db.disconnectDb();

//         res.status(200).json({ email: user.email });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
