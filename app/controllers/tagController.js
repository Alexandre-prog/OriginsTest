const { Tag } = require("../models");


module.exports = {

    showTags: async (req, res) => {
        try {
          const tags = await Tag.findAll();
          res.render("tags", { tags });
        } catch (e) {
            console.trace(e);
            res.sendStatus(500);
        }
    },

};