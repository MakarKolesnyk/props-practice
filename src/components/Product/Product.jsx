

const Product = (props) => {
  const { title, price, count } = props;
  return (
      <tr>
        <td>{title} </td>
        <td>{price} Uah</td>
        <td>{count} etc.</td>
      </tr>
  );
};

export default Product;
