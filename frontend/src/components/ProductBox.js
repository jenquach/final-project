import React from "react";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ProductBox = ({ product }) => {
const handleAddToCartClick = (event) => {

    
}

    return (<>
        <img src={product.img1} height={300} alt="product"></img>
        <br />
        {product.productName} £{product.price}
        <br></br>
        <Button 
        variant="outlined" 
        color="primary" 
        endIcon={<AddShoppingCartIcon />}
        onClick={handleAddToCartClick}
        >
        Buy
      </Button>
    </>);

};

export default ProductBox;