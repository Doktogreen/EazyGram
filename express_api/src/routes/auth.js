const {login} = require("../controllers/login");
const {logout} = require("../controllers/logout");
  
  const router = require("express").Router();
  
  router.post("/login", login);
//   router.get("/allusers/:id", getAllUsers);
//   router.post("/setavatar/:id", setAvatar);
  router.get("/logout/:id", logout);
  
  module.exports = router;
  