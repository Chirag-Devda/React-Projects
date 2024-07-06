import { RiDeleteBin6Line } from "react-icons/ri";
import { Layout, Modal } from "../../components";
import useData from "../../hooks/useData";

const Cart = () => {
  const { mode } = useData();

  return (
    <Layout>
      <div
        className="h-screen bg-gray-100 pt-5 "
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            <div
              className={`justify-between mb-6 rounded-lg border  drop-shadow-xl  p-6  sm:flex  sm:justify-start ${
                mode === "dark"
                  ? "bg-[#202124] text-white"
                  : "bg-white text-black"
              }`}
            >
              <img
                src="https://dummyimage.com/400x400"
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2
                    className={`text-lg font-bold  ${
                      mode === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    This is title
                  </h2>
                  <h2
                    className={`text-sm ${
                      mode === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    desc
                  </h2>
                  <p
                    className={`mt-1 text-xs font-semibold ${
                      mode === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    ₹100
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block  cursor-pointer sm:space-x-6">
                  <RiDeleteBin6Line size={25} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
            style={{
              backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div
              className={`mb-2 flex justify-between ${
                mode === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              <p>Subtotal</p>
              <p>₹100</p>
            </div>
            <div
              className={`flex justify-between ${
                mode === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              <p>Shipping</p>
              <p>₹20</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p
                className={`text-lg font-bold ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                Total
              </p>
              <div className>
                <p
                  className={`text-lg font-bold mb-1 ${
                    mode === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  ₹200
                </p>
              </div>
            </div>
            {/* <Modal  /> */}
            <Modal />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
