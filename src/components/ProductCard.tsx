import { addProduct, removeProduct } from "../features/cart/cartSlice";
import { useAppDispatch } from "../store/hooks";
import { Product } from "../type";

interface ProductCardProps {
  product: Product;
  quantity: number;
}

const ProductCard = ({ product, quantity }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>{product.name}</div>
      <div>{product.gender}</div>
      <button onClick={() => dispatch(addProduct(product))}>Add To Cart</button>
      {quantity > 0 ? (
        <button onClick={() => dispatch(removeProduct(product.id))}>-</button>
      ) : null}
    </div>
  );
};

export default ProductCard;
