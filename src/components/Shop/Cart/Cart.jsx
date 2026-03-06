import PropTypes from "prop-types";
import CartItem from './../CartItem/CartItem';

const Cart = (props) => {
  const { cartProducts } = props;
  const showItems = (product)=><CartItem key={product.id} product={product}/>
  const totalPrice = cartProducts.reduce((summa, product)=>{
    return summa + (product.price * product.quantityInCart)
  }, 0)
  return (
    <section>
      <h2>Cart</h2>
      {cartProducts.length === 0 ? (
        <p>empty cart</p>
      ) : (
        <>
        <ol>
          {cartProducts.map(showItems)}
        </ol>
        <hr />
        <p>total: {totalPrice}</p>
        </>
      )}
    </section>
  );
};

Cart.propTypes={
  cartProducts: PropTypes.array
}

export default Cart;
