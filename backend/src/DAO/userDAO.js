const User = require('../models/userModel');
const { lowercase, throwError, capitalizeEachWord } = require('../utils/Common');
const {encrypt, decrypt, generateJWT} = require('../utils/AuthUtils')

class UserDAO {

    async registerUser(data){
        try{
            if (data ['password'] !== data['confirm_password']) throwError(400, "password does not match");
            let isEmailExist = await User.findOne({email: data['email']});
            if (isEmailExist)  throwError(404, "Email already used");
            let newUser = await User.create({
                first_name: capitalizeEachWord(data['first_name']),
                last_name: capitalizeEachWord(data['last_name']),
                email: lowercase(data['email']),
                password: data['password'],
                role: data.role
            });
            return {
                role: newUser.role,
                userName: newUser.first_name,
                token : await generateJWT(newUser._id, newUser.email, newUser.role)
            }
        }
        catch(e){
            throwError(e.statusCode, e)  
        }
    }

    async signInUser(data){
        const user = await User.findOne({email:data['email']}).select(`+password`);
        if(!user) throwError(404, "User not found");
        let password = user.password;
        if (data['password'] !== decrypt(password)) throwError(406, "Invalid Email or Password");
        return {
            role: user.role,
            userName: user.first_name,
            token: await generateJWT(user._id, user.email, user.role)
        }
    }
}

module.exports= UserDAO;