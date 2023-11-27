import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductCard from "./ProductCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  // const [product, setProduct] = useState([]);

  const { data: product = [] } = useQuery({
    queryKey: ["product", search ? search : ""],
    queryFn: async () => {
      const res = await axiosPublic.get(`/product/search?search=${search}`);
      return res.data;
    },
  });

  // useEffect(() => {
  //   axiosPublic
  //     .get(`/product/search?search=${search}`)
  //     .then((res) => {
  //       setProduct(res.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [axiosPublic, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.search.value;
    setSearch(searchValue);
    form.reset();
  };

  // const sortedData = data.sort((a, b) => {
  //   const timeA = new Date(a.time);
  //   const timeB = new Date(b.time);

  //   // Compare dates first
  //   if (timeA.toDateString() !== timeB.toDateString()) {
  //     return timeB - timeA;
  //   }

  //   // If the dates are the same, compare times
  //   return timeB.getTime() - timeA.getTime();
  // });

  return (
    <div>
      <Helmet>
        <title>TechWave - Product</title>
      </Helmet>
      <form
        onSubmit={handleSearch}
        className="relative flex justify-center items-center my-10"
      >
        <input
          name="search"
          type="text"
          placeholder="Search by tags...."
          className="input input-bordered w-11/12 md:w-full max-w-md text-[#0B0B0B66]"
        />
        <button className="py-3 px-5 bg-[#FF444A] rounded-r-lg text-white absolute right-4 md:right-[161px] lg:right-[416px]">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-4 lg:mx-0">
        {product?.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
