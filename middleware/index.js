//  all meddlewares goes here
var middlewareObj = {};
var Campground    = require('../models/campground');
var Comment       = require('../models/comment');

//  Middleware that checks the campground ownership
middlewareObj.checkCampOwnership = function(req, res, next){
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, foundCamp){
      if (err || !foundCamp) {
        req.flash('error', 'Campground not found...');
        res.redirect('back');
      } else {
        //  check if the user own the campground
        if (foundCamp.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', "You don' have permission to do that...");
          res.redirect('back');
        }
      }
    });
  } else {
    req.flash('error', 'You must login first!');
    res.redirect('/login');
  }
}

//  Middleware that checks the comment ownership
middlewareObj.checkCommentOwnership = function(req, res, next){
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, foundComment){
      if (err || !foundComment) {
        req.flash('error', err.message);
        res.redirect('back');
      } else {
        //  check if the user own the comment
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You do not have to add a comment!');
          res.redirect('back');
        }
      }
    });
  } else {
    req.flash('error', 'You must login first!');
    res.redirect('/login');
  }
}

//  Middleware that checks user authentication
middlewareObj.isLoggedIn = function(req, res, next){
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'You must login first!');
  res.redirect('/login');
}

module.exports = middlewareObj;
