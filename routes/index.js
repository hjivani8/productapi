var express = require('express');
var router = express.Router();
var User = require('../model/registerSchema');
var User1 = require('../model/productSchema')

/* GET home page. */
router.post('/register', async function (req, res, next) {

  try {

    const getdata = await User.create(req.body);

    res.status(202).json({
      data: getdata
    })

  } catch (error) {
    res.send(error.message);
  }

});



router.post('/login', async function (req, res, next) {

  try {

    const password = req.body.password
    const getdata1 = await User.findOne({ email: req.body.email });

    if (password == getdata1.password) {


      res.status(202).json({
        data: getdata1
      })


    } else {
        // res.send(error.message);
        console.log('password is not match');
    }

  } catch (error) {
    res.send(error.message);
  }

});


router.post('/product', async function (req, res, next) {

  try {

    const productdata = await User1.create(req.body);

    res.status(202).json({
      data: productdata
    })

  } catch (error) {
    res.send(error.message);
  }

});

router.delete('/delete/:id', async function (req, res, next) {

  try {

    const deletedata = await User1.findByIdAndDelete(req.params.id);
    console.log('data delete');

    // res.status(202).json({
    //   data: getproductdata
    // })

  } catch (error) {
    res.send(error.message);
  }

});


router.patch('/update/:id', async function (req, res, next) {

  try {

    const updatedata = await User1.findByIdAndUpdate(req.params.id,req.body);
    // console.log('data delete');

    res.status(202).json({
      data: updatedata
    })

  } catch (error) {
    res.send(error.message);
  }

});


module.exports = router;
