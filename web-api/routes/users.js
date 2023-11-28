var express = require('express');
var router = express.Router();
const UsersController = require('../login/model');

/* GET users listing. */
router.get('/login', async(req, res, next)=> {
try {
  const {body} = req;
  const user = await UsersController.login(body);
 return res.status.json({message:'thành công'}) 
} catch (error) {
  console.log("Lỗi:"+error);
  return res.status(500).json({message:error.message})
}
});
router.post('/register',async(req,res,next)=>{
  try {
    
  } catch (error) {
    console.log("Loi:",error);
    return res.status(500).json({message:error.message});
  }
})


module.exports = router;
