import PropTypes from "prop-types";
import { useState } from "react";


const Product = (props) => {
  const {
    product: {title, price, quantity },
  } = props;
  const [isSelect, setIsSelect] = useState(false);
  const colorSelect = isSelect ? "red" : "black";
  const changeIsSelect = ()=>{setIsSelect(true)}
  return (
    <tr onClick={changeIsSelect} style={{ color: colorSelect }}>
      <td>{title} </td>
      <td>{price} Uah</td>
      <td>{quantity} etc.</td>
    </tr>
  );
};

Product.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number,
    })
    };


export default Product;
