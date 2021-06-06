var Product = require('../models/product');
var mongoose= require('mongoose');



mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


// var products = [
//     new Product({
//          imagePath: '/images/Grammar World 01.jpg',
//          title: 'Infinity',
//          description: 'Grammar World 01',
//          price: 100
//      }),
//      new Product({
//          imagePath: '/images/Grammar World 02.jpg',
//          title: 'Infinity',
//          description: 'Grammar World 02',
//          price: 120
//      }),
//      new Product({
//          imagePath: '/images/Grammar World 03.jpg',
//          title: 'Infinity',
//          description: 'Grammar World 03',
//          price: 130
//      }),
//      new Product({
//          imagePath: '/images/Grammar World 04.jpg',
//          title: 'Infinity',
//          description: 'Grammar World 04',
//          price: 110
//      }),
//      new Product({
//          imagePath: '/images/Grammar World 05.jpg',
//          title: 'Infinity',
//          description: 'Grammar World 05',
//          price: 90
//      }),
//      new Product({
//          imagePath: '/images/Grammar World 06.jpg',
//          title: 'Infinity',
//          description: 'Grammar World 06',
//          price: 150
//      }),
//      new Product({
//          imagePath: '/images/Grammar World 07.jpg',
//          title: 'Infinity',
//          description: 'Grammar World 07',
//          price: 140
//      }),
//      new Product({
//          imagePath: '/images/Grammar World 08.jpg',
//          title: 'Infinity',
//          description: 'Grammar World 08',
//          price: 150
//      }),


//      new Product({

//         imagePath: '/images/E-connect 01.jpg',
//         title: 'Infinity',
//         description: 'E-connect 01',
//         price: 100
//     }),
//     new Product({
//         imagePath: '/images/E-connect 02.jpg',
//         title: 'Infinity',
//         description: 'E-connect 02',
//         price: 120
//     }),
//     new Product({
//        imagePath: '/images/E-connect 03.jpg',
//        title: 'Infinity',
//        description: 'E-connect 03',
//        price: 150
//    }),
//    new Product({
//        imagePath: '/images/E-connect 04.jpg',
//        title: 'Infinity',
//        description: 'E-connect 04',
//        price: 140
//    }),
//    new Product({
//        imagePath: '/images/E-connect 05.jpg',
//        title: 'Infinity',
//        description: 'E-connect 05',
//        price: 150
//    }),
//    new Product({
//        imagePath: '/images/E-connect 06.jpg',
//        title: 'Infinity',
//        description: 'E-connect 06',
//        price: 140
//    }),
//    new Product({
//        imagePath: '/images/E-connect 07.jpg',
//        title: 'Infinity',
//        description: 'E-connect 07',
//        price: 150
//    }),
//    new Product({
//        imagePath: '/images/E-connect 08.jpg',
//        title: 'Infinity',
//        description: 'E-connect 08',
//        price: 150
//    }),

//    new Product({
//     imagePath: '/images/Spectrum 01.jpg',
//     title: 'Infinity',
//     description: 'English Reader 01',
//     price: 100
// }),
// new Product({
//     imagePath: '/images/Spectrum 02.jpg',
//     title: 'Infinity',
//     description: 'English Reader 02',
//     price: 120
// }),
// new Product({
//     imagePath: '/images/Spectrum 03.jpg',
//     title: 'Infinity',
//     description: 'English Reader 03',
//     price: 130
// }),
// new Product({
//     imagePath: '/images/Spectrum 04.jpg',
//     title: 'Infinity',
//     description: 'English Reader 04',
//     price: 110
// }),
// new Product({
//     imagePath: '/images/Spectrum 05.jpg',
//     title: 'Infinity',
//     description: 'English Reader 05',
//     price: 90
// }),
// new Product({
//     imagePath: '/images/Spectrum 06.jpg',
//     title: 'Infinity',
//     description: 'English Reader 06',
//     price: 150
// }),
// new Product({
//     imagePath: '/images/Spectrum 07.jpg',
//     title: 'Infinity',
//     description: 'English Reader 07',
//     price: 140
// }),
// new Product({
//     imagePath: '/images/Spectrum 08.jpg',
//     title: 'Infinity',
//     description: 'English Reader 08',
//     price: 150
// }),


// new Product({
//     imagePath: '/images/Hello World 01.jpg',
//     title: 'Infinity',
//     description: 'General Knowledge 01',
//     price: 100
// }),
// new Product({
//     imagePath: '/images/Hello World 02.jpg',
//     title: 'Infinity',
//     description: 'General Knowledge 02',
//     price: 120
// }),
// new Product({
//     imagePath: '/images/Hello World 03.jpg',
//     title: 'Infinity',
//     description: 'General Knowledge 03',
//     price: 130
// }),
// new Product({
//     imagePath: '/images/Hello World 04.jpg',
//     title: 'Infinity',
//     description: 'General Knowledge 04',
//     price: 110
// }),
// new Product({
//     imagePath: '/images/Hello World 05.jpg',
//     title: 'Infinity',
//     description: 'General Knowledge 05',
//     price: 90
// }),
// new Product({
//     imagePath: '/images/Hello World 06.jpg',
//     title: 'Infinity',
//     description: 'General Knowledge 06',
//     price: 150
// }),
// new Product({
//     imagePath: '/images/Hello World 07.jpg',
//     title: 'Infinity',
//     description: 'General Knowledge 07',
//     price: 140
// }),
// new Product({
//     imagePath: '/images/Hello World 08.jpg',
//     title: 'Infinity',
//     description: 'General Knowledge 08',
//     price: 150
// })


//  ];

// var done=0;
//  for(var i=0;i<products.length;i++)
//  {
//      products[i].save(function(err, result){
//          done++;
//          if(done === products.length){
//              exit();
//          }
//      });
//  }
 

//  var products1 = [
//     new Product({

//          imagePath: '/images/E-connect 01.jpg',
//          title: 'Infinity',
//          description: 'E-connect 01',
//          price: 100
//      }),
//      new Product({
//          imagePath: '/images/E-connect 02.jpg',
//          title: 'Infinity',
//          description: 'E-connect 02',
//          price: 120
//      }),
//      new Product({
//         imagePath: '/images/E-connect 03.jpg',
//         title: 'Infinity',
//         description: 'E-connect 03',
//         price: 150
//     }),
//     new Product({
//         imagePath: '/images/E-connect 04.jpg',
//         title: 'Infinity',
//         description: 'E-connect 04',
//         price: 140
//     }),
//     new Product({
//         imagePath: '/images/E-connect 05.jpg',
//         title: 'Infinity',
//         description: 'E-connect 05',
//         price: 150
//     }),
//     new Product({
//         imagePath: '/images/E-connect 06.jpg',
//         title: 'Infinity',
//         description: 'E-connect 06',
//         price: 140
//     }),
//     new Product({
//         imagePath: '/images/E-connect 07.jpg',
//         title: 'Infinity',
//         description: 'E-connect 07',
//         price: 150
//     }),
//     new Product({
//         imagePath: '/images/E-connect 08.jpg',
//         title: 'Infinity',
//         description: 'E-connect 08',
//         price: 150
//     }),
    
//  ];


//  var done=0;
//  for(var i=0;i<products1.length;i++)
//  {
//      products1[i].save(function(err, result){
//          done++;
//          if(done === products1.length){
//              exit();
//          }
//      });
//  }

// var products = [
//     new Product({
//          imagePath: '/images/Spectrum 01.jpg',
//          title: 'Infinity',
//          description: 'English Reader 01',
//          price: 100
//      }),
//      new Product({
//          imagePath: '/images/Spectrum 02.jpg',
//          title: 'Infinity',
//          description: 'English Reader 02',
//          price: 120
//      }),
//      new Product({
//          imagePath: '/images/Spectrum 03.jpg',
//          title: 'Infinity',
//          description: 'English Reader 03',
//          price: 130
//      }),
//      new Product({
//          imagePath: '/images/Spectrum 04.jpg',
//          title: 'Infinity',
//          description: 'English Reader 04',
//          price: 110
//      }),
//      new Product({
//          imagePath: '/images/Spectrum 05.jpg',
//          title: 'Infinity',
//          description: 'English Reader 05',
//          price: 90
//      }),
//      new Product({
//          imagePath: '/images/Spectrum 06.jpg',
//          title: 'Infinity',
//          description: 'English Reader 06',
//          price: 150
//      }),
//      new Product({
//          imagePath: '/images/Spectrum 07.jpg',
//          title: 'Infinity',
//          description: 'English Reader 07',
//          price: 140
//      }),
//      new Product({
//          imagePath: '/images/Spectrum 08.jpg',
//          title: 'Infinity',
//          description: 'English Reader 08',
//          price: 150
//      })

//  ];

// var done=0;
//  for(var i=0;i<products.length;i++)
//  {
//      products[i].save(function(err, result){
//          done++;
//          if(done === products.length){
//              exit();
//          }
//      });
//  }

//  var products = [
//     new Product({
//          imagePath: '/images/Hello World 01.jpg',
//          title: 'Infinity',
//          description: 'General Knowledge 01',
//          price: 100
//      }),
//      new Product({
//          imagePath: '/images/Hello World 02.jpg',
//          title: 'Infinity',
//          description: 'General Knowledge 02',
//          price: 120
//      }),
//      new Product({
//          imagePath: '/images/Hello World 03.jpg',
//          title: 'Infinity',
//          description: 'General Knowledge 03',
//          price: 130
//      }),
//      new Product({
//          imagePath: '/images/Hello World 04.jpg',
//          title: 'Infinity',
//          description: 'General Knowledge 04',
//          price: 110
//      }),
//      new Product({
//          imagePath: '/images/Hello World 05.jpg',
//          title: 'Infinity',
//          description: 'General Knowledge 05',
//          price: 90
//      }),
//      new Product({
//          imagePath: '/images/Hello World 06.jpg',
//          title: 'Infinity',
//          description: 'General Knowledge 06',
//          price: 150
//      }),
//      new Product({
//          imagePath: '/images/Hello World 07.jpg',
//          title: 'Infinity',
//          description: 'General Knowledge 07',
//          price: 140
//      }),
//      new Product({
//          imagePath: '/images/Hello World 08.jpg',
//          title: 'Infinity',
//          description: 'General Knowledge 08',
//          price: 150
//      })

//  ];

// var done=0;
//  for(var i=0;i<products.length;i++)
//  {
//      products[i].save(function(err, result){
//          done++;
//          if(done === products.length){
//              exit();
//          }
//      });
//  }


 function exit(){
    mongoose.disconnect();
 }
