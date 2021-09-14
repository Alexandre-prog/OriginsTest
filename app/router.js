
const express = require("express");

const tagController = require("./controllers/tagController");
const videoController = require("./controllers/videoController");

const router = express.Router();


/* Tags */

router.get("/tags", tagController.showTags);
router.post("/newTag", tagController.createTag);
router.delete("/deleteTag", tagController.deleteTag);
router.post("/videos/:id/tags", tagController.associateTagToVideo);
router.delete('/videos/:videoId/tags/:tagId', tagController.removeTagFromVideo);


/* Videos */

router.get("/videos", videoController.showVideos);
router.post("/newVideo", videoController.newVideo);
router.patch("/updateVideo/:id", videoController.updateVideo);
router.delete('/deleteVideo/:id', videoController.deleteVideo);

router.get('/videos/tag/:id', videoController.getVideoByTag);




















module.exports = router;