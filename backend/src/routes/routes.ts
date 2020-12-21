import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const router = Router();



router.get('/products', ProductController.index);
router.get('/products/:id/', ProductController.FindByID);

router.post('/products', ProductController.create);

router.delete('/products', ProductController.delete);
router.delete('/products/:id', ProductController.deleteByID)
router.delete('/products/:type', ProductController.deleteMany)


export default router;