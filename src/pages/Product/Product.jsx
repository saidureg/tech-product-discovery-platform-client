// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductCard from "./ProductCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/product");
      return res.data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.search.value;
    console.log(searchValue);
    form.reset();
  };
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
          placeholder="Search here...."
          className="input input-bordered w-11/12 md:w-full max-w-md text-[#0B0B0B66]"
        />
        <button className="py-3 px-5 bg-[#FF444A] rounded-r-lg text-white absolute right-4 md:right-[161px] lg:right-[416px]">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-4 lg:mx-0">
        {products?.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
