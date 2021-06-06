var Productle = require('../models/productle');
var mongoose= require('mongoose');



mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});



// var productles = [
//     new Productle({
//          imagePath: '/images/Grammar Park 1.jpg',
//          title: 'Lemon Tree',
//          description: 'Grammar Park 1',
//          price: 110
//      }),
//      new Productle({
//         imagePath: '/images/Grammar Park 2.jpg',
//         title: 'Lemon Tree',
//         description: 'Grammar Park 2',
//         price: 90
//     }),
//     new Productle({
//         imagePath: '/images/Grammar Park 3.jpg',
//         title: 'Lemon Tree',
//         description: 'Grammar Park 3',
//         price: 120
//     }),
//     new Productle({
//        imagePath: '/images/Grammar Park 4.jpg',
//        title: 'Lemon Tree',
//        description: 'Grammar Park 4',
//        price: 125
//    }),
//    new Productle({
//     imagePath: '/images/Grammar Park 5.jpg',
//     title: 'Lemon Tree',
//     description: 'Grammar Park 5',
//     price: 135
// }),
// new Productle({
//    imagePath: '/images/Grammar Park 6.jpg',
//    title: 'Lemon Tree',
//    description: 'Grammar Park 6',
//    price: 100
// }),
// new Productle({
//     imagePath: '/images/Grammar Park 7.jpg',
//     title: 'Lemon Tree',
//     description: 'Grammar Park 7',
//     price: 140
// }),
// new Productle({
//    imagePath: '/images/Grammar Park 8.jpg',
//    title: 'Lemon Tree',
//    description: 'Grammar Park 8',
//    price: 115
// })
     
//  ];

 
// var productles = [
//     new Productle({
//          imagePath: '/images/Moral outlook 1.jpg',
//          title: 'Lemon Tree',
//          description: 'English Moral 1',
//          price: 115
//      }),
//      new Productle({
//         imagePath: '/images/Moral outlook 2.jpg',
//         title: 'Lemon Tree',
//         description: 'English Moral 2',
//         price: 80
//     }),
//     new Productle({
//         imagePath: '/images/Moral outlook 3.jpg',
//         title: 'Lemon Tree',
//         description: 'English Moral 3',
//         price: 90
//     }),
//     new Productle({
//        imagePath: '/images/Moral outlook 4.jpg',
//        title: 'Lemon Tree',
//        description: 'English Moral 4',
//        price: 125
//    }),
//    new Productle({
//     imagePath: '/images/Moral outlook 5.jpg',
//     title: 'Lemon Tree',
//     description: 'English Moral 5',
//     price: 135
// }),
// new Productle({
//    imagePath: '/images/Moral outlook 6.jpg',
//    title: 'Lemon Tree',
//    description: 'English Moral 6',
//    price: 150
// }),
// new Productle({
//     imagePath: '/images/Moral outlook 7.jpg',
//     title: 'Lemon Tree',
//     description: 'English Moral 7',
//     price: 140
// }),
// new Productle({
//    imagePath: '/images/Moral outlook 8.jpg',
//    title: 'Lemon Tree',
//    description: 'English Moral 8',
//    price: 115
// })
     
//  ];




// var productles = [
//     new Productle({
//          imagePath: '/images/Knowledge box 1.jpg',
//          title: 'Lemon Tree',
//          description: 'General Knowledge 1',
//          price: 90
//      }),
//      new Productle({
//         imagePath: '/images/Knowledge box 2.jpg',
//         title: 'Lemon Tree',
//         description: 'General Knowledge 2',
//         price: 95
//     }),
//     new Productle({
//         imagePath: '/images/Knowledge box 3.jpg',
//         title: 'Lemon Tree',
//         description: 'General Knowledge 3',
//         price: 80
//     }),
//     new Productle({
//        imagePath: '/images/Knowledge box 4.jpg',
//        title: 'Lemon Tree',
//        description: 'General Knowledge 4',
//        price: 85
//    }),
//    new Productle({
//     imagePath: '/images/Knowledge box 5.jpg',
//     title: 'Lemon Tree',
//     description: 'General Knowledge 5',
//     price: 100
// }),
// new Productle({
//    imagePath: '/images/Knowledge box 6.jpg',
//    title: 'Lemon Tree',
//    description: 'General Knowledge 6',
//    price: 110
// }),
// new Productle({
//     imagePath: '/images/Knowledge box 7.jpg',
//     title: 'Lemon Tree',
//     description: 'General Knowledge 7',
//     price: 140
// }),
// new Productle({
//    imagePath: '/images/Knowledge box 8.jpg',
//    title: 'Lemon Tree',
//    description: 'General Knowledge 8',
//    price: 115
// })
     
//  ];


var productles = [
    // new Productle({
    //      imagePath: '/images/Rhythmic tunes A.jpg',
    //      title: 'Lemon Tree',
    //      description: 'Rhythmic tunes A',
    //      price: 90
    //  }),
    //  new Productle({
    //     imagePath: '/images/Rhythmic tunes B.jpg',
    //     title: 'Lemon Tree',
    //     description: 'Rhythmic tunes B',
    //     price: 95
    // }),
    new Productle({
        imagePath: '/images/Rhythmic tunes C.jpg',
        title: 'Lemon Tree',
        description: 'Rhythmic tunes C',
        price: 85
    }),
    new Productle({
       imagePath: '/images/Art and Creativity A.jpg',
       title: 'Lemon Tree',
       description: 'Art and Creativity A',
       price: 85
   }),
   new Productle({
    imagePath: '/images/Art and Creativity B.jpg',
    title: 'Lemon Tree',
    description: 'Art and Creativity B',
    price: 100
}),
new Productle({
   imagePath: '/images/Art and Creativity C.jpg',
   title: 'Lemon Tree',
   description: 'Art and Creativity C',
   price: 110
})
     
 ];

var done=0;
 for(var i=0;i<productles.length;i++)
 {

     productles[i].save(function(err, result){
         done++;
         if(done === productles.length){
             exit();
         }
     });
 }
 
 function exit(){
    mongoose.disconnect();
 }