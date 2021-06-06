var Productvar = require('../models/productvar');
var mongoose= require('mongoose');



mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


// var productvars = [
//     new Productvar({
//          imagePath: '/images/Leight Of Knowledge 1.png',
//          title: 'Vardhman',
//          description: 'General Knowledge 1',
//          price: 110
//      }),
//      new Productvar({
//         imagePath: '/images/Leight Of Knowledge 2.png',
//         title: 'Vardhman',
//         description: 'General Knowledge 2',
//         price: 95
//     }),
//     new Productvar({
//         imagePath: '/images/Leight Of Knowledge 3.png',
//         title: 'Vardhman',
//         description: 'General Knowledge 3',
//         price: 110
//     }),
//     new Productvar({
//        imagePath: '/images/Leight Of Knowledge 4.png',
//        title: 'Vardhman',
//        description: 'General Knowledge 4',
//        price: 120
//    }),
//    new Productvar({
//     imagePath: '/images/Leight OF Knowledge 5.png',
//     title: 'Vardhman',
//     description: 'General Knowledge 5',
//     price: 90
// }),
// new Productvar({
//    imagePath: '/images/GK6.jpg',
//    title: 'Vardhman',
//    description: 'General Knowledge 6',
//    price: 120
// }),
// new Productvar({
//     imagePath: '/images/Leight OF Knowledge 7.png',
//     title: 'Vardhman',
//     description: 'General Knowledge 7',
//     price: 110
// }),
// new Productvar({
//    imagePath: '/images/Leight OF Knowledge 8.png',
//    title: 'Vardhman',
//    description: 'General Knowledge 8',
//    price: 120
// }),
//  ];




// var productvars = [
//     new Productvar({
//          imagePath: '/images/SC1.jpg',
//          title: 'Vardhman',
//          description: 'A Step Ahead in Science 1',
//          price: 110
//      }),
//      new Productvar({
//         imagePath: '/images/SC2.jpg',
//         title: 'Vardhman',
//         description: 'A Step Ahead in Science 2',
//         price: 95
//     }),
//     new Productvar({
//         imagePath: '/images/SC3.jpg',
//         title: 'Vardhman',
//         description: 'A Step Ahead in Science 3',
//         price: 110
//     }),
//     new Productvar({
//        imagePath: '/images/SC4.jpg',
//        title: 'Vardhman',
//        description: 'A Step Ahead in Science 4',
//        price: 120
//    }),
//    new Productvar({
//     imagePath: '/images/SC5.jpg',
//     title: 'Vardhman',
//     description: 'A Step Ahead in Science 5',
//     price: 90
// }),
// new Productvar({
//    imagePath: '/images/SC6.jpg',
//    title: 'Vardhman',
//    description: 'A Step Ahead in Science 6',
//    price: 120
// }),
// new Productvar({
//     imagePath: '/images/SC7.jpg',
//     title: 'Vardhman',
//     description: 'A Step Ahead in Science 7',
//     price: 110
// }),
// new Productvar({
//    imagePath: '/images/SC8.jpg',
//    title: 'Vardhman',
//    description: 'A Step Ahead in Science 8',
//    price: 120
// }),
//  ];





var productvars = [
    new Productvar({
         imagePath: '/images/M1.jpg',
         title: 'Vardhman',
         description: 'Maths 1',
         price: 110
     }),
     new Productvar({
        imagePath: '/images/M2.jpg',
        title: 'Vardhman',
        description: 'Maths 2',
        price: 95
    }),
    new Productvar({
        imagePath: '/images/M3.jpg',
        title: 'Vardhman',
        description: 'Maths 3',
        price: 110
    }),
    new Productvar({
       imagePath: '/images/M4.jpg',
       title: 'Vardhman',
       description: 'Maths 4',
       price: 120
   }),
   new Productvar({
    imagePath: '/images/M5.jpg',
    title: 'Vardhman',
    description: 'Maths 5',
    price: 90
}),
new Productvar({
   imagePath: '/images/M6.jpg',
   title: 'Vardhman',
   description: 'Maths 6',
   price: 120
}),
new Productvar({
    imagePath: '/images/M7.jpg',
    title: 'Vardhman',
    description: 'Maths 7',
    price: 110
}),
new Productvar({
   imagePath: '/images/M8.jpg',
   title: 'Vardhman',
   description: 'Maths 8',
   price: 120
}),
 ];

var done=0;
 for(var i=0;i<productvars.length;i++)
 {
     productvars[i].save(function(err, result){
         done++;
         if(done === productvars.length){
             exit();
         }
     });
 }
 function exit(){
    mongoose.disconnect();
 }