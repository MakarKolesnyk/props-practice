import Product from "../Product/Product";
import styles from "./ProductTable.module.css";

const ProductTable = (props) => {
  const { products, addNewProduct } = props;
  const createProducts = (product) => (
    <Product key={product.id} product={product} addNewProduct={addNewProduct} />
  );
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quntity</th>
        </tr>
      </thead>
      <tbody>{products.map(createProducts)}</tbody>
    </table>
  );
};

export default ProductTable;
