import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { data: featureProduct = [] } = useQuery({
    queryKey: ["features"],
    queryFn: async () => {
      const res = await axiosPublic.get("/features");
      return res.data;
    },
  });

  featureProduct.sort((x, y) => {
    const timeX = new Date(x.Features_time);
    const timeY = new Date(y.Features_time);

    if (timeX.toDateString() !== timeY.toDateString()) {
      return timeY - timeX;
    }

    return timeY.getTime() - timeX.getTime();
  });

  return (
    <div>
      <h3 className="text-center mt-12 text-4xl font-playfair font-semibold">
        Featured Product <span className="text-[#E76F51]">of this week</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 mx-3 lg:mx-0">
        {featureProduct.slice(0, 6).map((product) => (
          <FeaturedProductCard
            key={product._id}
            product={product}
          ></FeaturedProductCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
