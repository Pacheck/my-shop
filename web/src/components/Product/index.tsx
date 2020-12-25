import React from 'react'

import { ParamProduct } from '../../interfaces/Interfaces';

import './index.css';


export const Product = ({ product, deleteById }: ParamProduct)  => {
    const { _id, type, name, specs, price } = product;

    return (
        <tr className="Product">
            <td>{_id}</td>
            <td>{type}</td>
            <td>{name}</td>
            <td>{specs}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => deleteById(_id)}>delete</button>
                <button>edit</button>
            </td>
        </tr>
    )
}
