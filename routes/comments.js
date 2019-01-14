var express    = require('express');
var router     = express.Router({mergeParams: true});
var Campground = require('../models/campground');
var Comment    = require('../models/comment');
var middleware = require('../middleware'); // requires index.js by default

//  COMMENTS NEW ROUTE
router.get("/new", middleware.isLoggedIn, function(req, res){
  Campground.findById(req.params.id, function(err, campground){
    if (err) {
      console.log(err);
    } else {
      res.render("comments/new", {campground: campground});
    }
  });
});

//  COMMENTS CREATE ROUTE
router.post("/", middleware.isLoggedIn, function(req, res){
  //  lookup campground using ID
  Campground.findById(req.params.id, function(err, campground){
    if (err) {
      console.log("Error trying to find the campground\n" + err);
      res.redirect("back")
    } else {
      //  create new comment
      Comment.create(req.body.comment, function(err, comment){
        if (err) {
          console.log("Error on creating a new comment: \n" + err);
        } else {
          // add username and id to comment
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          // save comment
          comment.save();
          // push the new comment into the especified campground
          campground.comments.push(comment);
          campground.save();
          res.redirect("/campgrounds/" + req.params.id); //  redirect to show page
        }
      });
    }
  });
});

//  COMMENTS EDIT ROUTE
router.get('/:comment_id/edit', middleware.checkCommentOwnership, function(req, res){
  Campground.findById(req.params.id, function(err, foundCamp){
    if (err || !foundCamp) {
      req.flash('error', 'Campground not found');
      return res.redirect('back');
    }
    Comment.findById(req.params.comment_id, function(err, foundComment){
      if (err) {
        res.redirect('back');
      } else {
        res.render('comments/edit', {
          campground_id: req.params.id,
          comment: foundComment
        });
      }
    });
  });
});

//  COMMENTS UPDATE ROUTE
router.put('/:comment_id', middleware.checkCommentOwnership, function(req, res){
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment,
    function(err, updatedComment){
      if (err) {
        console.log('Error trying to update the comment: \n' + err);
        res.redirect('back');
      } else {
        res.redirect('/campgrounds/' + req.params.id);
      }
  });
});

//  COMMENT DESTROY ROUTE
router.delete('/:comment_id', middleware.checkCommentOwnership, function(req, res){
  Comment.findByIdAndRemove(req.params.comment_id, function(err){
     if(err){
        console.log('Error trying to delete comment: \n' + err);
        res.redirect("back");
     } else {
       req.flash('success', 'Comment deleted');
        res.redirect("back");
     }
  });
});

module.exports = router;