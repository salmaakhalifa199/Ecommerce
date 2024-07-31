const Cart = require('../models/cart-model')
const Product = require('../models/product-model');
const axios = require('axios');

getProductsFromCart = async (req, res) => {
    console.log(req);
    
    await Cart.find({ userId: req.params.userId }, (err, cart) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!cart) {
            return res
                .status(404)
                .json({ success: false, error: `Cart not found` });
        }
        return res.status(200).json({ success: true, data: cart });
    }).catch(err => console.log(err));
}

addProductsToCart = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a cart',
        });
    }


    console.log(body.productId)
    await axios.get('http://products_service:5001/api/product?id='+body.productId)
      .then(response => {
        body.product = response.data
        console.log(response.data);
        const cart = new Cart(body);
        cart.save().then(cart => {
            return res.status(201).json({
                success: true,
                id: cart._id,
                message: 'Cart created!'
            });
        })
        .catch(error => {
            // Log the error and send a 400 response
            console.error(error);
            return res.status(400).json({
                success: false,
                message: 'Cart not created!',
                error: error.toString()
            });
        });
      })
      .catch(error => {
        console.error(error);
      });
}

checkServiceRunning = (req, res) => {
    res.send('Hello World! - from shopping cart service.');
}

module.exports = {
    getProductsFromCart,
    addProductsToCart,
    checkServiceRunning
};
