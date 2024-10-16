/* To-Do 
  - Configure Products Interface
  - Mapped products to show product cards
  - Filter for man,woman and category
  - Consider the use of API and Redux for filters
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../interfaces/Product";



const Products = () => {
  const { sex } = useParams();
  const [products, setProducts] = useState<any>([]); //Fix This

  const data = [
    { id: 1, sex: "man", name: "Product 1" },
    { id: 2, sex: "woman", name: "Product 2" },
  ];

  useEffect(() => {
    if (sex) {
      data.map((product) => {
        if (product.sex === sex) setProducts([...products, product]);
      });
    } else {
      setProducts(data);
    }
  }, []);

  return (
    <div>
      {products.map((product: Product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
