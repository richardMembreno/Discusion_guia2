import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([
        {productId: '0011', productName: 'nombre del producto', price: '14.99', imageUrl: 'url de imagen de producto'},
        {productId: '0012', productName: 'nombre del producto', price: '14.99', imageUrl: 'url de imagen de producto'},
        {productId: '0013', productName: 'nombre del producto', price: '14.99', imageUrl: 'url de imagen de producto'},
        {productId: '0014', productName: 'nombre del producto', price: '14.99', imageUrl: 'url de imagen de producto'}
    ])
    return(
    <>
        <h1 className="text-center">Lista de productos</h1>
        {
            products.map((value, i) => (
                <div className="card">
                    <ProductItem key={i} idProduct={value.productId} nameProduct={value.productName} priceProduct={value.price} imgProduct={value.imageUrl} />
                </div>
            ))
        }
    </>
    )
}
export default ProductList