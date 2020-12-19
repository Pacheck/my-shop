import { Request, Response } from 'express';
import MyProductModel from '../models/ProductSchema';

const MyProducts = new MyProductModel({
    type: 'Food',
    name: 'Hot-Dog',
    specs: 'Bread with sausage',
    price: 5.00
})

const products = [
    {
        type: 'eletronic',
        name: 'LCD',
        specs: '28"',
        price: '2000R$'
    },
    {
        type: 'eletronic',
        name: 'Redragon Kumara 522',
        specs: 'Outemu Blue',
        price: '250R$'
    }
]

export default {
    async index(req: Request, res: Response) {
        res.status(200).send(MyProducts);
    },

    async CUCK(req: Request, res: Response) {
        res.status(200).send({ message: 'All worked well!'});
        console.log(req.body);
    }
}