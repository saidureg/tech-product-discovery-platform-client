import { Link } from "react-router-dom";
import BtnBrand from "../../../components/Shared/Button/BtnBrand";
import SharedProductCard from "../../../components/Shared/SharedProductCard/SharedProductCard";
import useProduct from "../../../hooks/useProduct";

const TrendingProduct = () => {
  // const axiosPublic = useAxiosPublic();
  // const [data, setData] = useState([]);
  const [products] = useProduct();
  // useEffect(() => {
  //   //         fetch('http://localhost:5000/products')
  //   //         .then(response => response.json())

  //   //  .then(data => setData(data))

  //   axiosPublic
  //     .get("/products")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [axiosPublic]);
  products.sort((a, b) => {
    let x = parseInt(a.uVote_count);
    let y = parseInt(b.uVote_count);
    return y - x;
  });

  console.log(products);

  return (
    <div>
      <h3 className="text-center mt-12 text-4xl font-playfair font-semibold">
        Trending <span className="text-[#E76F51]">Product</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 mx-3 lg:mx-0">
        {products.slice(0, 6).map((product) => (
          <SharedProductCard
            key={product._id}
            product={product}
          ></SharedProductCard>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link to="/product">
          <BtnBrand text=" Show All Products" />
        </Link>
      </div>
    </div>
  );
};

export default TrendingProduct;
