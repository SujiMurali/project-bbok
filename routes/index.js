var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');

var Productle = require('../models/productle');

var Productvar = require('../models/productvar');

var Productgo = require('../models/productgo');
var Productvpub = require('../models/productvpub');
var Order = require('../models/order');
var Contact = require('../models/contact');
var stripe = require('stripe')('sk_test_51IwLubSHQ40wCyN1fm9zXJvv3FoTmbpJ40KZUZRoUCEEvIXdlniMR6jTzporECu6VvppdytNtJ9iD0QcgVKAO0Cr00zijtc2k6');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Santhosh Agency' });
});
router.get('/bookvarieties', function(req, res, next) {
  
  res.render('shop/book', { title: 'Varieties of Book' });
});
router.get('/ourpublishers', function(req, res, next) {
  
  res.render('shop/publishers', { title: 'ourpublishers' });
});
router.get('/bookvarieties/infinity', function(req, res, next) {
 
 
  
 Product.find(function(err,docs){
    var productChunks = [];
     var chunkSize = 16;
     for(var i=0;i<docs.length; i += chunkSize){
      productChunks.push(docs.slice(i, i + chunkSize));
       }
       
     res.render('shop/infinity', { title: 'Infinity', products: productChunks });

  });
  
});

router.get('/bookvarieties/lemontree', function(req, res, next) {
 Productle.find(function(err,docs){
    var productleChunks = [];
     var chunkSize = 16;
     for(var i=0;i<docs.length; i += chunkSize){
      productleChunks.push(docs.slice(i, i + chunkSize));
       }
       req.flash('value',"Infinity-Grammer Books");
      
      req.flash('values',"Infinity-English Reader");
     res.render('shop/lemontree', { title: 'Lemontree', productles: productleChunks});

  });
  
});




router.get('/bookvarieties/vardhman', function(req, res, next) {
 Productvar.find(function(err,docs){
     var productvarChunks = [];
      var chunkSize = 16;
      for(var i=0;i<docs.length; i += chunkSize){
       productvarChunks.push(docs.slice(i, i + chunkSize));
        }
        req.flash('value',"Infinity-Grammer Books");
       
       req.flash('values',"Infinity-English Reader");
      res.render('shop/vardhaman', { title: 'Vardhman', productvars: productvarChunks });
 
   });
   
 });




 
router.get('/bookvarieties/goodluck', function(req, res, next) {
  Productgo.find(function(err,docs){
      var productgoChunks = [];
       var chunkSize = 16;
       for(var i=0;i<docs.length; i += chunkSize){
        productgoChunks.push(docs.slice(i, i + chunkSize));
         }
         req.flash('value',"Infinity-Grammer Books");
        
        req.flash('values',"Infinity-English Reader");
       res.render('shop/goodluck', { title: 'Goodluck', productgos: productgoChunks });
  
    });
    
  });




  router.get('/bookvarieties/vpublishers', function(req, res, next) {
    Productvpub.find(function(err,docs){
        var productvpubChunks = [];
         var chunkSize = 16;
         for(var i=0;i<docs.length; i += chunkSize){
          productvpubChunks.push(docs.slice(i, i + chunkSize));
           }
           req.flash('value',"Infinity-Grammer Books");
          
          req.flash('values',"Infinity-English Reader");
         res.render('shop/vpub', { title: 'VPublishers', productvpubs: productvpubChunks });
    
      });
      
    });

    


router.get('/add-to-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {});
  
  Product.findById(productId, function (err, product) {
    if(err)
    {
      return res.redirect('/');
    }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/bookvarieties/infinity');
  });
 
});


router.get('/add-to-cart-le/:id',function(req,res,next){
  var productleId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {});
  
  Productle.findById(productleId, function (err, productles) {
    if(err)
    {
      return res.redirect('/');
    }
      cart.add(productles, productles.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/bookvarieties/lemontree');
  });
});



router.get('/add-to-cart-var/:id',function(req,res,next){
  var productvarId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {});
  
  Productvar.findById(productvarId, function (err, productvars) {
    if(err)
    {
      return res.redirect('/');
    }
      cart.add(productvars, productvars.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/bookvarieties/vardhman');
  });
});




router.get('/add-to-cart-go/:id',function(req,res,next){
  var productgoId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {});
  
  Productgo.findById(productgoId, function (err, productgos) {
    if(err)
    {
      return res.redirect('/');
    }
      cart.add(productgos, productgos.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/bookvarieties/goodluck');
  });
});


router.get('/add-to-cart-vpub/:id',function(req,res,next){
  var productvpubId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {});
  
  Productvpub.findById(productvpubId, function (err, productvpubs) {
    if(err)
    {
      return res.redirect('/');
    }
      cart.add(productvpubs, productvpubs.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/bookvarieties/vpublishers');
  });
});


router.get('/reduce/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart')
});

router.get('/remove/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart')
});


router.get('/shopping-cart',function(req, res, next){
  if(!req.session.cart){
    return res.render('shop/shopping-cart', {products: null,productles: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart',{products: cart.generateArray(),productles: cart.generateArray(), totalPrice: cart.totalPrice})
});

router.get('/checkout', isLoggedIn, function(req, res, next){
  if(!req.session.cart){
    return res.redirect('/shopping-cart');

  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg
  });
});


router.post('/checkout', isLoggedIn, function(req, res, next){
  if(!req.session.cart){
    return res.redirect('/shopping-cart');

  }
   var cart = new Cart(req.session.cart);
 

//`source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token

stripe.charges.create({
  
   amount:  cart.totalPrice * 100,
   currency: 'inr',
   source: req.body.stripeToken,
   description: 'Test Charge',
   
 }, 
 function(err, charge) {
  if (err) {
      req.flash('error', err.message);
      return res.redirect('/checkout');
  }
  var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
      paymentId: charge.id
  });
  order.save(function(err, result) {
      req.flash('success', 'Successfully bought product!');
      req.session.cart = null;
      res.redirect('/user/profile');
  });
}); 
});

module.exports = router;

function isLoggedIn(req, res, next) {
if (req.isAuthenticated()) {
  return next();
}
req.session.oldUrl = req.url;
res.redirect('/user/signin');
}

router.post('/contact',(req,res)=>{
  var condetail = new Contact({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
  })
  condetail.save()
  res.redirect('/')
 
})