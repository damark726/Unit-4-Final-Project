const Manganime = require("../models/manganime");
const manganimeController = {};
//========================================================================================================================================
manganimeController.index = (req, res) => {
 Manganime.findAll(req.user.id)
 .then(manganimes => {
   res.json({
     data: manganimes
   })
 })
 .catch(err => {
   console.log("This is manganimeController.index not working ===> ", err)
   res.status(400).json({ err });
 });
};
//========================================================================================================================================
manganimeController.show = (req, res) => {
  Manganime.findById(req.params.id)
  .then(manganime => {
    res.json({
      data: manganime
    })
  })
  .catch(err => {
    console.log("This is manganimeController.show not working ===> ", err)
    console.log(req.params)
    res.status(400).json(err);
  });
};
//========================================================================================================================================
// manganimeController.new = (req, res) => {
//  res.render("manganimes/new")
// };
//========================================================================================================================================
manganimeController.create = (req, res) => {
 Manganime.create({
     title: req.body.title,
     url: req.body.url,
     episodes_watched: req.body.episodes_watched,
     user_id: req.user.id
   })
   .then(manganime => {
     res.json({
       data: manganime
     })
   })
   .catch(err => {
     console.log("This is manganimeController.create not working ===> ", err)
     res.status(400).json(err);
   });
};
//========================================================================================================================================
manganimeController.edit = (req,res) => {
 Manganime.findById(req.params.id)
 .then(manganime => {
   res.json({
     data: manganime
   })
 })
 .catch(err => {
   console.log("This is manganimeController.edit not working ===> ", err)
   res.status(400).json(err)
 })
};
//========================================================================================================================================
manganimeController.update = (req, res) => {
  Manganime.update({
    title: req.body.title,
    url: req.body.url,
    episodes_watched: req.body.episodes_watched,
    user_id: req.user.id
  }, req.params.id)
  .then( manganime => {
    res.json({
      data: manganime
    })
  })
  .catch(err => {
    console.log("This is manganimeController.update not working ===> ", err)
    res.status(400).json(err);
  });
};
//========================================================================================================================================
manganimeController.delete = (req, res) => {
  Manganime.delete(req.params.id)
  .then(manganime => {
    res.redirect("/")
  })
  .catch(err => {
    console.log("This is manganimeController.delete not working ===> ", err)
    res.status(400).json(err);
  });
};
//========================================================================================================================================
module.exports = manganimeController;
