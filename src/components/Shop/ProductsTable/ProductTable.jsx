import products from "../data";
import Product from "../Product/Product";
import styles from "./ProductTable.module.css";
import PropTypes from "prop-types";

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

ProductTable.propTypes={
  products: PropTypes.array,
  addNewProduct: PropTypes.func
}

export default ProductTable;
