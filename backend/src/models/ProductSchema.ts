import {Schema, model, Document } from 'mongoose';

interface IProductModel extends Document{
    type?: string;
    name?: string;
    specs?: string;
    proce?: number;
}

const ProductModel = new Schema({
    type: String,
    name: String,
    specs: String,
    price: Number
});


const MyProductModel = model<IProductModel>('MyProducts', ProductModel);

export default MyProductModel;