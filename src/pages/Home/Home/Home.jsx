import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Shared/Banner/Banner";
import TrendingProduct from "../TrendingProduct/TrendingProduct";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TechWave - Home</title>
      </Helmet>
      <Banner />
      <TrendingProduct />
    </div>
  );
};

export default Home;
