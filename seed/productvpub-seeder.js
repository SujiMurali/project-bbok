var Productvpub = require('../models/productvpub');
var mongoose= require('mongoose');



mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


// var productvpubs = [
//     new Productvpub({
//          imagePath: '/images/Tam-scaled-1.jpg',
//          title: 'V Publications',
//          description: 'Tamil Ezhuthu Payirchi–A',
//          price: 100
//      }),
//      new Productvpub({
//         imagePath: '/images/Tam2-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ezhuthu Payirchi–B',
//         price: 90
//     }),
//     new Productvpub({
//         imagePath: '/images/Tam3-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ezhuthu Payirchi–1',
//         price: 95
//     }),
//     new Productvpub({
//         imagePath: '/images/Tam4-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ezhuthu Payirchi–2',
//         price: 105
//     }),
//     new Productvpub({
//         imagePath: '/images/Tam5-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ezhuthu Payirchi–3',
//         price: 110
//     }),
//     new Productvpub({
//         imagePath: '/images/Tam6-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ezhuthu Payirchi–4',
//         price: 115
//     }),
//     new Productvpub({
//         imagePath: '/images/Tam7-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ezhuthu Payirchi–5',
//         price: 130
//     })
   
    
//  ];




// var productvpubs = [
//     new Productvpub({
//          imagePath: '/images/Tamil-Grammer-scaled-1.jpg',
//          title: 'V Publications',
//          description: 'Tamil Ilakkanam 1',
//          price: 115
//      }),
//      new Productvpub({
//         imagePath: '/images/Tamil-Grammer2-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ilakkanam 2',
//         price: 100
//     }),
//     new Productvpub({
//         imagePath: '/images/Tamil-Grammer3-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ilakkanam 3',
//         price: 95
//     }),
//     new Productvpub({
//         imagePath: '/images/Tamil-Grammer4-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ilakkanam 4',
//         price: 105
//     }),
//     new Productvpub({
//         imagePath: '/images/Tamil-Grammer5-scaled-1.jpg',
//         title: 'V Publications',
//         description: 'Tamil Ilakkanam 5',
//         price: 110
//     })
   
    
//  ];





var productvpubs = [
    new Productvpub({
         imagePath: '/images/Colouring-scaled-1.jpg',
         title: 'V Publications',
         description: 'Colouring Book A',
         price: 115
     }),
     new Productvpub({
        imagePath: '/images/Colouring2-scaled-1.jpg',
        title: 'V Publications',
        description: 'Colouring Book B',
        price: 100
    }),
    new Productvpub({
        imagePath: '/images/Colouring3-scaled-1.jpg',
        title: 'V Publications',
        description: 'Colouring Book 1',
        price: 95
    }),
    new Productvpub({
        imagePath: '/images/Colouring4-scaled-1.jpg',
        title: 'V Publications',
        description: 'Colouring Book 2',
        price: 105
    }),
    new Productvpub({
        imagePath: '/images/Colouring5-scaled-1.jpg',
        title: 'V Publications',
        description: 'Colouring Book 3',
        price: 110
    }),
    new Productvpub({
        imagePath: '/images/Colouring6-scaled-1.jpg',
        title: 'V Publications',
        description: 'Colouring Book 4',
        price: 110
    })
   
    
 ];


var done=0;
 for(var i=0;i<productvpubs.length;i++)
 {
     productvpubs[i].save(function(err, result){
         done++;
         if(done === productvpubs.length){
             exit();
         }
     });
 }
 function exit(){
    mongoose.disconnect();
 }