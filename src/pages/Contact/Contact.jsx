import { Helmet } from "react-helmet-async";
import swal from "sweetalert";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

const Contact = () => {
  const { user } = useAuth();
  const handleContactForm = (e) => {
    e.preventDefault();
    e.target.reset();
    swal("Successfully sent", "We will contact you soon", "success");
  };
  return (
    <div>
      <Helmet>
        <title>TechWave - Contact</title>
      </Helmet>
      <div className="bg-[#fbf8ef] mb-10">
        <h6 className="text-[#9b804e] uppercase text-center mb-6 font-playfair text-sm pt-10">
          Contact Us
        </h6>
        <h3 className="text-2xl md:text-3xl font-playfair lg:text-5xl font-bold text-center text-[7B014C] mb-6">
          Get in Touch with Our Team
        </h3>
        <p className="text-gray-400 font-montserrat text-center mb-6">
          Our dedicated team is ready to assist, making your experience with us
          exceptional.
        </p>
        <div className="flex flex-col lg:flex-row mt-12">
          <div className="w-full lg:w-2/3 ">
            <p className="text-center text-xl text-gray-700 my-5">
              If you have any questions, just fill in the contact form, and we
              will answer you shortly.
            </p>
            <form
              onSubmit={handleContactForm}
              className="card-body w-3/4 mx-auto"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  name="text"
                  placeholder="Your Message"
                  className="input input-bordered"
                  id=""
                  cols="30"
                  rows="30"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/3 border  ">
            <h3 className="text-[#deaa86] text-center py-3 text-xl md:text-3xl">
              Where we are?
            </h3>
            <p className="text-[#8b8b8b] px-5 mt-8 text-xl font-playfair font-medium">
              CONTACT US FOR ANY INQUIRY!
            </p>
            <div className="font-montserrat flex gap-6 px-5 py-2 mt-3">
              <FaLocationDot className="text-3xl lg:text-7xl text-[#deaa86]" />
              <div>
                <h4 className="text-[#8b8b8b] text-xl uppercase">Address</h4>
                <p className="text-gray-500 font-medium">
                  176 Shaheed Syed Nazrul Islam Sarani (Old 47, Bijoy Nagar)
                  Dhaka - 1000, Bangladesh
                </p>
              </div>
            </div>
            <div className="font-montserrat flex gap-6 px-5 py-2 mt-8">
              <FiPhoneCall className="text-2xl lg:text-4xl text-[#deaa86]" />
              <div>
                <h4 className="text-[#8b8b8b] text-xl uppercase">Call Us</h4>
                <p className="text-gray-500 font-medium">
                  +88 02 223375551, +88 02 223375552 <br /> +880 17600 77944
                  +880 17600 77945
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-center text-[7B014C] my-10">
            Other Ways To Contact Us
          </h3>
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-9">
              <div>
                <div className="">
                  <AiOutlineMail className="text-6xl lg:text-8xl bg-red-600/60 text-white rounded-full p-4 mx-auto my-5" />
                </div>
                <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
                  <h3 className="text-xl lg:text-3xl my-6 uppercase font-semibold">
                    Email
                  </h3>
                  <p className="text-xs lg:text-base text-red-800 opacity-80">
                    {user?.email}
                  </p>
                </div>
              </div>
              <div className="block lg:hidden">
                <div className="">
                  <BsPhone className="text-6xl lg:text-8xl bg-red-600/60 text-white rounded-full p-4 mx-auto my-5" />
                </div>
                <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
                  <h3 className="text-xl lg:text-3xl my-6 uppercase font-semibold">
                    Phone
                  </h3>
                  <p className="text-xs lg:text-base text-red-800 opacity-80">
                    +8801345-600600
                  </p>
                </div>
              </div>
              <div>
                <div className="">
                  <FaFacebookF className="text-6xl lg:text-8xl bg-red-600/60 text-white rounded-full p-4 mx-auto my-5" />
                </div>
                <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
                  <h3 className="text-xl lg:text-3xl my-6 uppercase font-semibold">
                    Facebook
                  </h3>
                  <p className="text-xs lg:text-base text-red-800 opacity-80">
                    Like Us
                  </p>
                </div>
              </div>
              <div>
                <div className="">
                  <FaInstagram className="text-6xl lg:text-8xl bg-red-600/60 text-white rounded-full p-4 mx-auto my-5" />
                </div>
                <div className="px-4 mb-4 text-center lg:w-96 mx-auto">
                  <h3 className="text-xl lg:text-3xl my-6 uppercase font-semibold">
                    Instagram
                  </h3>
                  <p className="text-xs lg:text-base text-red-800 opacity-80">
                    Follow Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
