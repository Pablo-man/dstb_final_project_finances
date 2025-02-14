import User from "../model/User.js";
import bcrypt from "bcryptjs";
import {generateJwt} from '../utils/jwt.js'

export const createUser = async (req, res) => {
  try {
    const {name, lastname, email, password} = await req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({
        message: ["The email is already in use"],
      });

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      lastname,
      email,
      password: passwordHash
    });
    const userSaved = await newUser.save();
    const id = {id : userSaved._id.toString()}
    const token = await generateJwt(id)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "none"
    });
    res.json({
      id: userSaved._id,
      name: userSaved.name,
      lastname: userSaved.lastname,
      email: userSaved.email,
    }
    )
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};