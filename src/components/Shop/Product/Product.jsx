import PropTypes from "prop-types";

const Product = (props) => {
  const {
    product: { id, title, price, quantity },
    addNewProduct,
  } = props;
  // const [isSelect, setIsSelect] = useState(false);
  // const colorSelect = isSelect ? "red" : "black";
  // const changeIsSelect = ()=>{setIsSelect(true)}
  const addToCart = () => addNewProduct(id);
  if (quantity===0) {
    return null
  }
  return (
    <tr onClick={addToCart}>
      <td>{title} </td>
      <td>{price} Uah</td>
      <td>{quantity} etc.</td>
    </tr>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }),
  addNewProduct: PropTypes.func
};

export default Product;
