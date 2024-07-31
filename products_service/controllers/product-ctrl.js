const Product = require('../models/product-model');

getProducts = async (req, res) => {
    await Product.find({}, (err, products) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        
        return res.status(200).json({ success: true, data: products });
    }).catch(err => console.log(err));
}

getProduct = async (req, res) => {
    await Product.findById(req.query.id, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        
        return res.status(200).json(product);
    }).catch(err => console.log(err));
}


checkServiceRunning = (req, res) => {
    res.send('Hello World! - from products service');
}

module.exports = {
    getProducts,
    getProduct,
    checkServiceRunning
}