var express = require('express');
var router = express.Router();
const UsersController = require('../users/controller');

/* GET users listing. */
router.get('/', async(req, res, next)=> {
try {
  const {body} = req;
  const user = await UsersController.login(body);
 return res.status.json({message:'thành công'}) 
} catch (error) {
  console.log("Lỗi:"+error);
  return res.status(500).json({message:error.message})
}
});
//hahaahighjkwfwghfk

module.exports = router;
