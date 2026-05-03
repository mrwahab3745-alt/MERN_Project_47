import User from "../models/user.model.js"; // .js extension lazmi check karein
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    // Agar koi error aaye (jaise duplicate email), to server crash nahi hoga
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
