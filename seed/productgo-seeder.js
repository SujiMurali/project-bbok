var Productgo = require('../models/productgo');
var mongoose= require('mongoose');



mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});



// var productgos = [
//     new Productgo({
//          imagePath: '/images/NSM-1.jpg',
//          title: 'Good Luck Publishers',
//          description: 'Maths 1',
//          price: 110
//      }),
   
//      new Productgo({
//         imagePath: '/images/NSM-2.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Maths 2',
//         price: 110
//     }),
//     new Productgo({
//         imagePath: '/images/NSM-3.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Maths 3',
//         price: 110
//     }),
//     new Productgo({
//         imagePath: '/images/NSM-4.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Maths 4',
//         price: 110
//     }),
//     new Productgo({
//         imagePath: '/images/NSM-5.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Maths 5',
//         price: 110
//     }),
//     new Productgo({
//         imagePath: '/images/NSM-6.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Maths 6',
//         price: 110
//     }),
//     new Productgo({
//         imagePath: '/images/NSM-7.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Maths 7',
//         price: 110
//     }),
//     new Productgo({
//         imagePath: '/images/NSM-8.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Maths 8',
//         price: 110
//     }),
//  ];





// var productgos = [
//     new Productgo({
//          imagePath: '/images/Creative_hands-01.jpg',
//          title: 'Good Luck Publishers',
//          description: 'Creative hands 1',
//          price: 130
//      }),
   
//      new Productgo({
//         imagePath: '/images/Creative_hands-02.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Creative hands 2',
//         price: 120
//     }),
//     new Productgo({
//         imagePath: '/images/Creative_hands-03.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Creative hands 3',
//         price: 90
//     }),
//     new Productgo({
//         imagePath: '/images/Creative_hands-04.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Creative hands 4',
//         price: 110
//     }),
//     new Productgo({
//         imagePath: '/images/Creative_hands-05.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Creative hands 5',
//         price: 140
//     }),
//     new Productgo({
//         imagePath: '/images/Creative_hands-6.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Creative hands 6',
//         price: 115
//     }),
//     new Productgo({
//         imagePath: '/images/Creative_hands-7.jpg',
//         title: 'Good Luck Publishers',
//         description: 'Creative hands 7',
//         price: 135
//     })
//  ];




var productgos = [
    new Productgo({
         imagePath: '/images/Basic_English_Grammar-1.jpg',
         title: 'Good Luck Publishers',
         description: 'English Grammar 1',
         price: 130
     }),
   
     new Productgo({
        imagePath: '/images/Basic_English_Grammar-2.jpg',
        title: 'Good Luck Publishers',
        description: 'English Grammar 2',
        price: 120
    }),
    new Productgo({
        imagePath: '/images/Basic_English_Grammar-3.jpg',
        title: 'Good Luck Publishers',
        description: 'English Grammar 3',
        price: 125
    }),
    new Productgo({
        imagePath: '/images/Basic_English_Grammar-4.jpg',
        title: 'Good Luck Publishers',
        description: 'English Grammar 4',
        price: 110
    }),
    new Productgo({
        imagePath: '/images/Basic_English_Grammar-5.jpg',
        title: 'Good Luck Publishers',
        description: 'English Grammar 5',
        price: 140
    }),
    new Productgo({
        imagePath: '/images/Basic_English_Grammar-6.jpg',
        title: 'Good Luck Publishers',
        description: 'English Grammar 6',
        price: 115
    }),
    new Productgo({
        imagePath: '/images/Basic_English_Grammar-7.jpg',
        title: 'Good Luck Publishers',
        description: 'English Grammar 7',
        price: 135
    })
 ];


var done=0;
 for(var i=0;i<productgos.length;i++)
 {
     productgos[i].save(function(err, result){
         done++;
         if(done === productgos.length){
             exit();
         }
     });
 }
 function exit(){
    mongoose.disconnect();
 }