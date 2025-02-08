import User from "../model/User.js";
import bcrypt from "bcrypt";
import {generateJwt} from "../utils/jwt.js"
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    const credentials = { 
        id: userFound._id,
        username: userFound.name
    }

    const token = await generateJwt(credentials);

    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.name,
      email: userFound.email,
      token,
      created: userFound.createdAt,
      updated: userFound.updatedAt
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const profile = async (req, res) => {
  const { id } = req.user;

  const userFound = await User.findById(id);
  if (!userFound) return res.sendStatus(401);

  return res.json({
    id: userFound._id,
    username: userFound.name,
    email: userFound.email,
  });
};

export const verifyToken = async (req, res) => {
  const {token} = req.cookies
  if(!token){
    return res.sendStatus(401)
  }
  else {
    jwt.verify(token, "key123", async (error, user) => {
      if (error) return res.sendStatus(401)

      const userFound = await User.findOne( user._id );
      if(!userFound) return res.sendStatus(401)
      
      return res.json({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
      })
    });
  }
}