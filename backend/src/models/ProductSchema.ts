import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductModel = new Schema({
    type: String,
    name: String,
    specs: String,
    price: Number
});

const MyProductModel = mongoose.model('MyProduct', ProductModel);

export default MyProductModel;