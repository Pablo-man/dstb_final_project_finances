import jwt from 'jsonwebtoken'

export const createJWT = async (req, res) =>{
    try{
        const id = await req.body;
        jwt.sign(id,
        "key123",
        {
        expiresIn: "1d",
        },
        (err, token)=>{
            if(err) console.log(err);
            res.json({token})
            return token;
        }
        )
    }catch(error){
        console.error(error)
    }
}