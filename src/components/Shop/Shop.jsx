import ProductTable from "./ProductsTable/ProductTable";
import data from "./data"
import { useState } from 'react';
import Cart from './Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState(data);
    const [cartProducts, setCartProducts] = useState([]);
    return (
        <>
          <ProductTable products={products}/>
          <h2>Cart</h2>
          <Cart cartProducts={cartProducts}/>
        </>
    );
}

export default Shop;
