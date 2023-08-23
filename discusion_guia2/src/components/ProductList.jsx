import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([
        {productId: '0011', productName: 'Botas color cafe', price: '150.99', imageUrl: 'camisa-blanca.png'},
        {productId: '0019', productName: 'Camiseta color azul', price: '14.99', imageUrl: 'botas.jpg'},
        {productId: '0123', productName: 'Camiseta color blanco', price: '14.99', imageUrl: '/img/camisa-blanca.png'},
        {productId: '0236', productName: 'Coca Cola Zero', price: '1.50', imageUrl: '../img/coca-zero.jpg'},
        {productId: '1212', productName: 'Huawei Honor Y9', price: '150.99', imageUrl: '../img/honor-huawei-y9.jpg'},
        {productId: '2323', productName: 'Galletas mini Oreo', price: '2.50', imageUrl: '../img/mini-oreo.png'},
        {productId: '3434', productName: 'Pantalon negro', price: '29.99', imageUrl: '../img/pantalon.jpg'},
        {productId: '5656', productName: 'Traje celeste', price: '110.99', imageUrl: '../img/traje.jpg'},
        {productId: '7414', productName: 'Zapatos casuales', price: '31.50', imageUrl: '../img/zapatos-casuales.jpg'},
        {productId: '8521', productName: 'Zapatos formales', price: '32.00', imageUrl: '../img/zapatos-formales.jpg'}
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