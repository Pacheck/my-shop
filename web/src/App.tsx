import { useEffect, useState } from 'react';

import { IProduct, IProperty, IData } from './interfaces/Interfaces';
import { ProductController } from './controllers/ProductController';

import { Product } from './components/Product';
import  Form  from './components/Form';

import './App.css';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<String>('');

  const PController = new ProductController();

  const ListAllProducts = async() => {
    await PController.ListAllProducts().then(res => {
      if(res.status !== 200){
        return { message: `${res.status} No products found!`}
      } 
        
      setProducts(res.data);
    })
  }

  const FindProductByID = async(id: string) => {
    const data = await PController.ListProductByID(id);
    setProducts(data);
    console.log(data);
  }

  const FindProductByProperty = async(DataToBeSearch : IProperty) => {
    const data = await PController.ListProductByProperty(DataToBeSearch).then(res => {
      if(res.status === 200){
        //Já faço verificação pelo front, talvez não seja necessário fazer pro DB
      }else{
        return { message: `${res.status} No products found!`}
      }
    })

    // setProducts(data);
  }

  const CreateNewProduct = async(newProduct: IProduct) => {
    const data = await PController.CreateProduct(newProduct).then(res => {
      if(res.status === 201){
        setProducts([...products, res.data]);
      }else{
        return { message: `${res.status} Failed to create this product!`};
      }
    });
  }

  const UpdateProduct = async(id: string, NewUpdatedData: IData) => {
    const data = await PController.UpdateProduct(id, NewUpdatedData);
    console.log(data);
  }

  const DeleteAllProducts = async() => {
    await PController.DeleteAllProducts();
  }

  const DeleteProductByID = async(id: string) => {
    await PController.DeleteProductByID(id).then(res => {
      if(res.status === 200){
        const newArrayOfProducts = products.filter(product => product._id !== id)
        setProducts(newArrayOfProducts);
      }else {
        return { message: `${res.status} Failed to delete this product!`}
      }
    })
  }

  useEffect(() => {
    ListAllProducts();
  }, []);

  return (
    <div className="App">
      <div>
        <input placeholder='Search' onChange={e => setSearchTerm(e.target.value)}/>
      </div>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Name</th>
          <th>Specs</th>
          <th>Price</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          {
            products.map(product => {
              if(product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return <Product key={product._id} product={product} deleteById={DeleteProductByID}/>;
              }
              return
            })
          }
        </tbody>
      </table>
        <Form createProduct={CreateNewProduct} />
    </div>
  );
}

export default App;
