import React from "react";

import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';

import { IProps, IProduct } from '../../interfaces/Interfaces';


export default function Form( { createProduct }  : IProps) {
  const { register, reset, handleSubmit, watch, errors } = useForm<IProduct>({
    reValidateMode: 'onChange',
    shouldUnregister: true,
  });

  const onSubmit = (data: IProduct) => {
    const newProduct = {
      _id: uuidv4(),
      type: data.type,
      name: data.name,
      specs: data.specs,
      price: data.price
    }

    createProduct(newProduct);

    reset({
      _id: '',
      type: '',
      name: '',
      specs: '',
      price: undefined
    })
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="type" placeholder="Type" ref={register({ required: true})} />
      <input name="name" placeholder="Name" ref={register({ required: true})} />
      <input name="specs" placeholder="Specs" ref={register({ required: true})} />
      <input name="price" placeholder="Price" ref={register({ required: true})} />
      
     
      {errors.type && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}