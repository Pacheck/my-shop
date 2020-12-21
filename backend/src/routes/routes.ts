import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const router = Router();


//Product Router
router.get('/products', ProductController.index);
router.get('/products/:id/', ProductController.FindByID);


router.post('/products', ProductController.create);

router.put('/products/:id', ProductController.update)

router.delete('/products', ProductController.delete);
router.delete('/products/:id', ProductController.deleteByID);

router.get('/MyProducts', ProductController.index);



export default router;