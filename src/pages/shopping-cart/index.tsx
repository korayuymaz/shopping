/* To-Do 
  - Get Data Through Redux
  - Show Product Card
  - Create a form for adress and payment info
  - After payment simulation clear Redux and add the purchase to purchased category
*/

import ProductCard from "../../components/ProductCard";
import { useAppSelector } from "../../store/hooks";

function ShoppingCard() {
  const { items, totalCount } = useAppSelector((state) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.map((item, index) => (
        <li key={index}>
          <ProductCard product={item.product} quantity={item.quantity} />
        </li>
      ))}
      <div>Total Count: {totalCount}</div>
    </div>
  );
}

export default ShoppingCard;
