const UserModel = require('./model');

const login = async(data) =>{
    try {
        const {email,password} = data;
        const user = await UserModel.findOne(email);
        if(!user) throw new Error("Khong tim thaay tai khoang");
        if(user.password != password) throw new Error("mat khau khong dung")
        return user;
    } catch (error) {
        console.log("Lỗi",error);
        throw new Error("lỗi rồi",error)
    }

}
module.exports = {
    login,
}