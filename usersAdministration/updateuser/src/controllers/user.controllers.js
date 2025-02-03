import User from "../model/User.js";

export const editUser = async (req, res) => {
    try{
        const {id} = await req.params
        await User.updateOne({_id: id}, req.body)
        return res.json({message: "User Updated"})
    }catch(error){
        return res.json({message: error.message})
    }
};