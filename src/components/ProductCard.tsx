/* To-Do 
  - Create a Product Card with size selection and add to the card buttons
  - Create Redux connections for the global states
*/
import { addProduct } from "../features/cart/cartSlice";
import { useAppDispatch } from "../store/hooks";
import { Product } from "../type";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.sex}</div>
      <button onClick={() => dispatch(addProduct(product))}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
