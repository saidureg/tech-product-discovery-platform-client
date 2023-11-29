import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Shared/Banner/Banner";
import TrendingProduct from "../TrendingProduct/TrendingProduct";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import CouponSlider from "../CouponSlider/CouponSlider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TechWave - Home</title>
      </Helmet>
      <Banner />
      <FeaturedProduct />
      <TrendingProduct />
      <CouponSlider />
    </div>
  );
};

export default Home;
