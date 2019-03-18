var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var seeds = [
    {
      name: "Cloud's Rest",
      image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name: "Desert Mesa",
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name: "Canyon Floor",
      image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name : "Lagosta Camp",
      image : "https://source.unsplash.com/EnCaUE4QNOw",
      description : "This is the Lagosta Camp. A place where you can fish lagostas! No equipament incluede...consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name : "Granite Hill",
      image : "https://source.unsplash.com/eDgUyGu93Yw",
      description : "The best place to chill on earth! Free breakfast. Free water and snaks too consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name : "Some Camp",
      image : "https://source.unsplash.com/uY2UIyO5o5c",
      description : "It's some campground out there!consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name : "Mountains Ghost's Rest",
      image : "https://source.unsplash.com/ilkTnuMunP8",
      description : "That's the mountains where the ghost's rest consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name : "Ramdom Camp",
      image : "https://source.unsplash.com/mzZVGFfMOkA",
      description : "That's the mountains where the ghost's rest consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name : "Germany Mountains",
      image : "https://source.unsplash.com/yBgC-qVCxMg",
      description : "That's the mountains where the ghost's rest consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]

//  CALLBACK HELL :(

// function seedDB(){
//     //Remove all campgrounds
//     Campground.remove({}, function (err) {
//       if (err) {
//         console.log(err);
//       }
//       console.log("removed campgrounds!");

//       // remove all comments
//       Comment.remove({}, function (err) {
//         if (err) {
//           console.log(err);
//         }
//         console.log("removed comments!");


//         //add a few campgrounds
//         data.forEach(function (seed) {
//           Campground.create(seed, function (err, campground) {
//             if (err) {
//               console.log(err)
//             } else {
//               console.log("added a campground");
//               //create a comment
//               Comment.create({
//                 text: "This place is great, but I wish there was internet",
//                 author: "Homer"
//               }, function (err, comment) {
//                 if (err) {
//                   console.log(err);
//                 } else {
//                   campground.comments.push(comment);
//                   campground.save();
//                   console.log("Created new comment");
//                 }
//               });
//             }
//           });
//         });
//       });
//     });
// }


// Async code

async function seedDB() {
  try {
    await Comment.deleteMany({}); // remove all comments
    await Campground.deleteMany({}); // remove all campgrounds

    for (const seed of seeds) {
      // creates a campground taking the data from de seeds array
      let campground = await Campground.create(seed);

      // create a comment for the new campground
      let comment = await Comment.create({
        text: 'This place is great, but I wish there was internet',
        authoer: 'Homer'
      });

      // push the new comment inside the new campground
      campground.comments.push(comment);
      campground.save();

    }
  } catch(err) {
    console.log(err);
  }

}

module.exports = seedDB;
