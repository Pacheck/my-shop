import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const router = Router();



router.get('/products', ProductController.index)

router.post('/products', ProductController.CUCK)


export default router;