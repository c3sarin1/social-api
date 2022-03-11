const router = require("express").Router();

const {
  allThoughts,
  singleThought,
  newThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtControllers");

router.route("/").get(allThoughts).post(newThought);

router
  .route("/:thoughtId")
  .get(singleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;