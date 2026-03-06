
const CartItem = (props) => {
    const {product: { id, title, price, quantity }} = props
    return (
        <li>{title} quantity = {quantity} price: {price}</li>
    );
}

export default CartItem;
