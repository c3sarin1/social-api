const router = require("express").Router();

const {
  allUser,
  singleUser,
  newUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userControllers");

router.route("/")
.get(allUser)
.post(newUser);

router.route("/:userId")
.get(singleUser)
.put(updateUser)
.delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

  module.exports = router;