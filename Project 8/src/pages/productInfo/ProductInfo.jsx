import { Layout, Loader } from "../../components";
import {
  FaComment,
  FaFacebookF,
  FaHeart,
  FaRegStar,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import useData from "../../hooks/useData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const ProductInfo = () => {
  const { loading, setLoading } = useData();
  const [product, setProduct] = useState("");
  const params = useParams();

  const getProductData = async () => {
    setLoading(true);

    try {
      const productData = await getDoc(doc(fireDB, "products", params.id));
      setProduct(productData.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  // add cart
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // add product
  const addCart = (product) => {
    const productWithoutTime = { ...product };
    delete productWithoutTime.time;

    dispatch(
      addToCart({
        product: productWithoutTime,
        timestampSeconds: product.time.seconds,
        timestampNanoseconds: product.time.nanoseconds,
      })
    );
    toast.success("add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(product);
  }, [cartItems]);

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-32 mx-auto">
          {product && (
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
                src={product.imageUrl}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <FaStar className="w-4 h-4 text-indigo-500" />
                    <FaStar className="w-4 h-4 text-indigo-500" />
                    <FaStar className="w-4 h-4 text-indigo-500" />
                    <FaStar className="w-4 h-4 text-indigo-500" />
                    <FaRegStar className="w-4 h-4" />
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                    <a className="text-gray-500">
                      <FaFacebookF />
                    </a>
                    <a className="text-gray-500">
                      <FaTwitter />
                    </a>
                    <a className="text-gray-500">
                      <FaComment />
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                  {product.description}
                </p>

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹{product.price}
                  </span>
                  <button
                    onClick={() => addCart(product)}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Add To Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductInfo;
