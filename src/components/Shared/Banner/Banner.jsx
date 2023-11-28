import bannerImg from "../../../assets/product-discovery.jpg";
import BtnBrand from "../Button/BtnBrand";

const Banner = () => {
  return (
    <div
      className="hero min-h-[90vh] place-items-stretch"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="z-0 flex justify-start items-center text-neutral-content">
        <div className="max-w-md mx-5 md:mx-8 lg:mx-24 md:-mt-8">
          <h1 className="mb-5 text-2xl lg:text-6xl font-bold">
            Embrace the Next Wave of Innovation
          </h1>
          <p className="mb-5 lg:text-xl">
            Unlock innovation, discover the latest gadgets, and connect with
            tech enthusiasts. Your journey into the future starts now.
          </p>
          <div className="mt-8">
            <button className="btn btn-primary text-lg mr-5">Join us</button>
            <BtnBrand text="Latest Product" />
            {/* <button className="btn btn-primary ml-5">Latest Product</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
