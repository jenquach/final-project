import React, { useState, useEffect } from 'react';
import ProductBox from './ProductBox';

const ProductList = () => {
    const [products, setProducts] = useState([]);


    useEffect( () => {
        fetch('http://localhost:8080/products/') //option is needed otherwise is going to be getMetod
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }, []);

    return (
        <>
            {products.map((product) => (<ProductBox key={product.productId} product={product}></ProductBox>))}
        </>
    );
};


export default ProductList;