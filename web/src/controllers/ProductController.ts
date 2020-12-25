import API from '../services/api';
import { IProduct, IProperty, IData } from '../interfaces/Interfaces';

export class ProductController {

    async ListAllProducts(){
        //OK
        return API.get<IProduct[]>('/MyProducts')
    }

    async ListProductByID(id: string){
        //OK
        return API.get<IProduct[]>(`/MyProducts/`, {
            params: {
                _id: id,
            }
        }).then(res => res.data)
    }

    async ListProductByProperty({ property, value }: IProperty){ 
        //OK
        return API.get<IProduct[]>(`/MyProducts/?${property}=${value}`, {
        });
    }

    async CreateProduct(newProduct: IProduct){
        //OK
        return API.post<IProduct>(`/MyProducts/`, {
            ...newProduct
        })
    }

    async UpdateProduct(id: string, UpdateData: IData){
        //OK
        return API.put(`/MyProducts/:?id=${id}`, UpdateData).then(res => res.data);
    }

    async DeleteAllProducts(){
        //OK
        return API.delete('/MyProducts/', {}).then(res => console.log(res));
    }

    async DeleteProductByID(id: string){
        //OK
        return API.delete('/MyProducts/', {
            params: {
                _id: id
            }
        });
    }

    async DeleteProductByProperty(PropertyToBeDeleted : IData){
        //OK
        return API.delete('/MyProducts/', {
            params: {
                ...PropertyToBeDeleted
            }
        }).then(res => console.log(res))
    }


}