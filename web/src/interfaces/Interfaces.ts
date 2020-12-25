import { Dispatch, SetStateAction } from "react";

export interface IProduct {
    _id: string; //Removi o ? do id
    type: string;
    name: string;
    specs: string;
    price: number;
}

export interface IProperty {
    property: string,
    value: string
}

export interface IData {
    _id?: string;
    type?: string;
    name?: string;
    specs?: string;
    price?: number;
}

export interface IProps {
    createProduct: (newProduct: IProduct) => Promise<void>;
}

export interface ParamProduct {
    product: IProduct;
    deleteById: (id: string) => Promise<void>
}