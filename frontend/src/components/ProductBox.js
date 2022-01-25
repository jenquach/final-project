import React from "react";

const ProductBox = ({ product }) => {
    return (<>
        <img src={product.img1} height={300} ></img>
        <br />
        {product.productName}
        <br></br>
    </>);

};

export default ProductBox;