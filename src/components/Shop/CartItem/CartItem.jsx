import PropTypes from "prop-types";

const CartItem = (props) => {
    const {product: { title, price, quantityInCart }} = props
    return (
        <li>{title} quantity = {quantityInCart} price total: {price * quantityInCart}</li>
    );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantityInCart: PropTypes.number,
  }),
};

export default CartItem;
