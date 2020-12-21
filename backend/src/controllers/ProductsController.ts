import { Request, Response } from 'express';
import db from '../db/config';
import { Error } from 'mongoose';

import MyProductModel from '../models/ProductSchema';
import TesteModel from '../models/TestSchema';

const MongoDB = db;

const MyProducts = new MyProductModel({
    type: 'Eletronic',
    name: 'Mouse',
    specs: '10000dpi',
    price: 150.00
})

const meuTeste = new TesteModel({
    type: 'teste',
    testando: true
})

const CreateProduct = () => {
// MyProducts.save(function (err) {
//     if (err) return new Error('Erro ao salvar!'); 
//     console.log('Salvo com sucesso!')
// });
}


export default {
    async index(req: Request, res: Response) {

        const PRODUCTS = await MyProductModel.find({})
        .then(res => console.log(res))
        .catch(err => console.log(err))

        res.status(201).send(PRODUCTS);
    },

    async create(req: Request, res: Response) {
        res.status(200).send(req.body);
        meuTeste.save( err => {
            if(err) return new Error('Erro ao criar!');
            console.log('Salvo com sucesso!');
        })
    },

    async delete(req: Request, res: Response){

    },

    async deleteByID(req: Request, res: Response){
        const { id } = req.query;
        if(!id){
            return res.status(404).send({ error: 'Not Found!'});
        }

        const ProductToBeDeleted = await MyProductModel.findByIdAndDelete(id);
        res.status(202).send({ message: 'Deleted'});
    },

    async deleteMany(req: Request, res: Response){
        const { type } = req.query;

        if(!type){
            return res.status(404).send({ error: 'Could not find!'})
        }

        const ProductsToBeDeleted = await MyProductModel.deleteMany({type});
        res.status(202).send({ message: 'Successful'});
    },

    async FindByID(request: Request, response: Response) {
        const { id } = request.query;
        
        const PRODUCTS = await MyProductModel.findById({ _id: id })
        .then(res => response.status(200).send(res))
        .catch(err => response.status(204).send(err))
    },

}