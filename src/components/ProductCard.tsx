/* To-Do 
  - Create a Product Card with size selection and add to the card buttons
  - Create Redux connections for the global states
*/
import { Product } from "../interfaces/Product";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.sex}</div>
    </div>
  );
};

export default ProductCard;
