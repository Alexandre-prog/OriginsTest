const Tag = require('./Tag');
const Video = require('./Video');

Tag.belongsToMany(Video, {
    through: 'video_has_tag',
    foreignKey: 'tag_id',
    otherKey: 'video_id',
    as: "videos"
});

module.exports.Tag = Tag;


Video.belongsToMany(Tag, {
    through: 'video_has_tag',
    foreignKey: 'video_id',
    otherKey: 'tag_id',
    as: 'tags'
});

module.exports.Video = Video;