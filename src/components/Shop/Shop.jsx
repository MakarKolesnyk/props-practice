import ProductTable from "./ProductsTable/ProductTable";
import data from "./data";
import { useState } from "react";
import Cart from "./Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState(data);
  const [cartProducts, setCartProducts] = useState([]);

  const addNewProduct = (id) => {
    const productsAfterAdd = products.map((product)=>{
      if(product.id === id ){
        product.quantity--
        return product
      }
      return product
    })
    setProducts(productsAfterAdd)
    const [newProduct] = products.filter((product) => product.id === id);
    // if (cartProducts.includes(newProduct)) {
    //   newProduct.quantity++
    // } else{
    //   newProduct.quantity=1
    // }
    const newCartProducts = [...new Set([...cartProducts, newProduct])]
    setCartProducts(newCartProducts);
  };
  return (
    <>
      <ProductTable products={products} addNewProduct={addNewProduct} />
      <Cart cartProducts={cartProducts} />
    </>
  );
};

export default Shop;
