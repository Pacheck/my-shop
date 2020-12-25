import { Request, Response } from 'express';
import db from '../db/config';

import MyProductModel from '../models/ProductSchema';

const MongoDB = db;


export default {

    async index(req: Request, res: Response) {
        const query = req.query;

        await MyProductModel.find(query)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(404).send(err))
    },

    async FindByID(request: Request, response: Response) {
        const { id } = request.query;
        
        await MyProductModel.findById({ id })
        .then(res => response.status(200).send(res))
        .catch(err => response.status(204).send({ error: err}))
    },

    async create(req: Request, res: Response) {
        const { type, name, specs, price } = req.body;
        console.log(req.body)
        
        if(!req.query){
            return res.status(404).send({ message: 'NOT FOUND QUERIES'})
        }

        const MyProducts = new MyProductModel({ type, name, specs, price });

        await MyProducts.save()
        .then(response => res.status(201).send(response))
        .catch(err => res.status(409).send(err));
    
    },

    async update(req: Request, res: Response){
        const { id } = req.query;

        if(!req.query){
            return res.status(400).send(res);
        }

        await MyProductModel.findByIdAndUpdate(id, req.body)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(400).send(err))
        
    },

    async delete(req: Request, res: Response){
        console.log(req.query);

        if(!req.query){
            return res.status(404).send({ message: 'Query not found!'})
        }

        await MyProductModel.deleteMany(req.query);
        return res.status(200).send({ message: 'Doc was deleted successfully'});
    },

    async deleteByID(req: Request, res: Response){
        const { id } = req.query;
        if(!id){
            return res.status(404).send({ error: 'Not Found!'});
        }

        await MyProductModel.findByIdAndDelete(id);
        res.status(202).send({ message: 'Deleted'});
    },

    

}