const UserModel = require('../login/model');

const login = async(username) =>{
    try {
        const user = await UserModel.findOne(username);
        if(!user) throw new Error("Khong tim thaay tai khoang");
        if(user.password != password) throw new Error("mat khau khong dung")
        return user;
    } catch (error) {
        console.log("Lỗi",error);
        throw new Error("lỗi rồi",error)
    }

}
const changePassword =async (data)=>{
    try {
        const {username,newPassword,oldPassword} = data;
        const user = await UserModel.findOne(username);
        if(!user) throw new Error("Khong tim thay tai khoang");
        if(user.password != oldPassword){
            throw new Error("Mat khau khong khop");

        }else{
            user.password = newPassword;
        }
        // await user.updateOne({password:newPassword});
        return user.save();
    } catch (error) {
        console.log("Loi",error);
        throw new Error("Loi",error);
    }
}
const savePosition = async(data)=>{
    try {
        const {positionX,positionZ,positionY,username} = data;
        const savePosition = await UserModel.findOne(username).updateOne({positionX:positionX,positionY:positionY,positionZ:positionZ});
        await savePosition.save();
    } catch (error) {
        console.log("loi",error);
        throw new Error("Loi", error)
    }
}
const register =async (data) => {
    try {
        const {username,password} = data;
        const register = await UserModel.create({
            username:username,
            password:password
        })
        await register;
    } catch (error) {
        console.log("loi",error);
        throw new Error("Loi",error);
    }
}

module.exports = {
    login,
    changePassword,
    savePosition,
    register,   
    saveScore,
}