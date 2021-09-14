const { Video, Tag } = require('../models/');

module.exports = {

    showVideos: async (req, res) => {
        try {
            const videos = await Video.findAll();
            res.json(videos);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    newVideo: async (req, res) => {
        try {
            const { nom, description, video_url} = req.body;

            let bodyErrors = [];
            if (!nom) {
            bodyErrors.push(`nom can not be empty`);
            }
            if (!video_url) {
                bodyErrors.push(`video_url can not be empty`);
            }

            if (bodyErrors.length) {
                res.status(400).json(bodyErrors);
            } else {
                let newVideo = Video.build({ nom, video_url });
                if (description) {
                  newVideo.description = description;
                }
                await newVideo.save();
                res.json(newVideo);
            }
        
        } catch (error) {
              console.trace(error);
              res.status(500).json(error);
        }
    },

    updateVideo: async (req, res) => {
        try {
            const video_id = req.params.id;
            const { nom, description, video_url} = req.body;

            let video = await Video.findByPk(video_id, {
                include: ['tags']
            });
            if (!video) {
              res.status(404).json(`Cant find video with id ${video_id}`);
            } else {
              
              if (nom) {
                video.nom = nom;
              }
              if (description) {
                video.description = description;
              }
              if (video_url) {
                video.video_url = video_url;
              }
              
              await video.save();
              res.json(video);
            }
        
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    deleteVideo: async (req, res) => {
        try {
            const video_id = req.params.id;
            let video = await Video.findByPk(video_id);
            if (!video) {
              res.status(404).json(`Cant find video with id ${video_id}`);
            } else {
                await video.destroy();
                res.json('ok');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    getVideoByTag: async (req, res) => {
        try {
          const tagId = req.params.id;
          const videos = await Tag.findAll(
              {
                  include: 'videos',
                  where: { id: tagId}
              }
          );

        res.json(videos);
    
        } catch (error) {
          console.trace(error);
          res.status(500).json(error);
        }
      }
    
};