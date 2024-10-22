/* To-Do 
  - Configure Products Interface
  - Mapped products to show product cards
  - Filter for man,woman and category
  - Consider the use of API and Redux for filters
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../type";

const Products = () => {
  const { gender } = useParams();
  const [products, setProducts] = useState<any>([]); //Fix This

  const data = [
    { id: 1, gender: "man", name: "Product 1" },
    { id: 2, gender: "woman", name: "Product 2" },
  ];

  useEffect(() => {
    if (gender) {
      data.map((product) => {
        if (product.gender === gender) setProducts([...products, product]);
      });
    } else {
      setProducts(data);
    }
  }, [gender]);

  return (
    <div>
      {products.map((product: Product) => (
        <div key={product.id}>
          <ProductCard product={product} quantity={0} />
        </div>
      ))}
    </div>
  );
};

export default Products;
