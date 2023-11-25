import { Helmet } from "react-helmet-async";
import Banner from "../../../components/Shared/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TechWave - Home</title>
      </Helmet>
      <Banner />
      <h3>Home</h3>
    </div>
  );
};

export default Home;
