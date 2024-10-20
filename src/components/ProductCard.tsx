/* To-Do 
  - Create a Product Card with size selection and add to the card buttons
  - Create Redux connections for the global states
*/
import { addProduct, removeProduct } from "../features/cart/cartSlice";
import { useAppDispatch } from "../store/hooks";
import { Product } from "../type";

interface ProductCardProps {
  product: Product;
  quantity: number;
}

const ProductCard = ({ product, quantity }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  console.log(product);

  return (
    <div>
      <div>{product.name}</div>
      <div>{product.sex}</div>
      <button onClick={() => dispatch(addProduct(product))}>Add To Cart</button>
      {quantity > 0 ? (
        <button onClick={() => dispatch(removeProduct(product.id))}>-</button>
      ) : null}
    </div>
  );
};

export default ProductCard;
