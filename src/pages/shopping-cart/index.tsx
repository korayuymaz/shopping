/* To-Do 
  - Get Data Through Redux
  - Show Product Card
  - Create a form for adress and payment info
  - After payment simulation clear Redux and add the purchase to purchased category
*/

import ProductCard from "../../components/ProductCard";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

function ShoppingCard() {
  const products = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  console.log(products);
  return (
    <div>
      Shopping Card
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ShoppingCard;
