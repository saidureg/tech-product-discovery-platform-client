import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductCard from "./ProductCard";

const Product = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>TechWave - Product</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-4 lg:mx-0">
        {Products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
