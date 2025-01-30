import User from "../model/User.js";

export const renderUsers = async (req, res) => {
  try {
    const users = await User.find().lean();
    res.json({"message": users})
  } catch (error) {
    console.log({ error });
    res.json({"message": error.message})
  }
};