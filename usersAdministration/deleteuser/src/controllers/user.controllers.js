import User from "../model/User.js";

export const deleteUser = async (req, res) => {
    try{
        const {id} = await req.params
        await User.deleteOne({_id:id})
        return res.json({message: "User Deleted"})
    }catch(error){
        return res.json({message: error.message})
    }

};