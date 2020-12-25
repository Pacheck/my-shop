import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const router = Router();


//Product Router

router.get('/MyProducts', ProductController.index);
router.get('/MyProducts/:id/', ProductController.FindByID);

router.post('/MyProducts', ProductController.create);

router.put('/MyProducts/:id', ProductController.update)

router.delete('/MyProducts', ProductController.delete);
router.delete('/MyProducts/:id', ProductController.deleteByID);




export default router;