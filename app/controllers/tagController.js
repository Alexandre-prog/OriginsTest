const { Tag, Video } = require("../models");


module.exports = {

    showTags: async (req, res) => {
        try {
          const tags = await Tag.findAll();
          res.json(tags);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    createTag: async (req, res) => {
        try {
            const { valeur } = req.body;

            let bodyErrors = [];

            if (!valeur) {
            bodyErrors.push('valeur can not be empty');
            }

            if (bodyErrors.length) {
                res.status(400).json(bodyErrors);
            } else {
                let newTag = Tag.build({ valeur });

            await newTag.save();
            res.json(newTag);
            }

        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },


    deleteTag: async (req, res) => {
        try {
          const { valeur } = req.body;
        
          await Tag.destroy({ where: { valeur: valeur}});
          res.json('OK');
          
        } catch (error) {
          console.trace(error);
          res.status(500).json(error);
        }
    },

    associateTagToVideo: async (req, res) => {
        try {
          console.log(req.body);
          const videoId = req.params.id;
          const tagId = req.body.tag_id;
    
          let video = await Video.findByPk(videoId, {
            include: ['tags']
          });
          if (!video) {
            return res.status(404).json('Can not find video with id ' + videoId);
          }
    
          let tag = await Tag.findByPk(tagId);
          if (!tag) {
            return res.status(404).json('Can not find tag with id ' + tagId);
          }
    
          await video.addTag(tag);
          
          video = await Video.findByPk(videoId, {
            include: ['tags']
          });
          res.json(video);
    
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
      },

      removeTagFromVideo: async (req, res) => {
        try {
          const { videoId, tagId } = req.params;
    
          let video = await Video.findByPk(videoId);
          if (!video) {
            return res.status(404).json('Can not find video with id ' + videoId);
          }
    
          let tag = await Tag.findByPk(tagId);
          if (!tag) {
            return res.status(404).json('Can not find tag with id ' + tagId);
          }
    
          await video.removeTag(tag);
          video = await Video.findByPk(videoId, {
            include: ['tags']
          });
          res.json(video);
    
        } catch (error) {
          console.trace(error);
          res.status(500).json(error);
        }
      }

};