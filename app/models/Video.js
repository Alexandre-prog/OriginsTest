const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


class Video extends Model {}

Video.init({
    nom: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT
      },
      video_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
}, {
    sequelize,
    tableName: 'video'
});

module.exports = Video;