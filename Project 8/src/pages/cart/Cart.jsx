import { RiDeleteBin6Line } from "react-icons/ri";
import { Layout, Modal } from "../../components";
import useData from "../../hooks/useData";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

const Cart = () => {
  const { mode } = useData();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // calculate the total Amount
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;

    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price);
    });

    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = parseInt(100);

  const grandTotal = shipping + totalAmount;

  useEffect(() => {}, [cartItems]);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /**====================================================================
   *                       Payment Integration
   *====================================================================
   **/

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    // validation
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: import.meta.env.VITE_RPAY_KEY,
      key_secret: import.meta.env.VITE_SECRET_RPAY_KEY,
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "LootLo",
      description: "for testing purpose",
      handler: function (response) {
        toast.success("Payment Successful");

        const paymentId = response.razorpay_payment_id;

        // store in firebase
        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };

        try {
          const orderRef = collection(fireDB, "order");
          addDoc(orderRef, orderInfo);
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <Layout>
      <div
        className="h-full bg-gray-100 pt-5"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item, index) => {
              const { title, imageUrl, price, description } = item;
              return (
                <div
                  style={{
                    backgroundColor: mode === "dark" ? "#202124" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                  className="justify-between mb-6 rounded-lg border  drop-shadow-xl  p-6  sm:flex  sm:justify-start"
                >
                  <img
                    src={imageUrl}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2
                        style={{
                          color: mode === "dark" ? "white" : "#212121",
                        }}
                        className="text-lg font-bold"
                      >
                        {title}
                      </h2>
                      <h2
                        style={{
                          color: mode === "dark" ? "white" : "#212121",
                        }}
                        className="text-sm"
                      >
                        {description}
                      </h2>
                      <p
                        style={{
                          color: mode === "dark" ? "white" : "#616161",
                        }}
                        className="mt-1 text-xs font-semibold"
                      >
                        {price}
                      </p>
                    </div>
                    <div
                      onClick={() => deleteCart(item)}
                      className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block  cursor-pointer sm:space-x-6"
                    >
                      <RiDeleteBin6Line size={25} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
            style={{
              backgroundColor: mode === "dark" ? "#212121" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div
              style={{
                color: mode === "dark" ? "white" : "#616161",
              }}
              className="mb-2 flex justify-between"
            >
              <p>Subtotal</p>
              <p>₹{totalAmount}</p>
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "#616161",
              }}
              className="flex justify-between"
            >
              <p>Shipping</p>
              <p>₹{shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p
                style={{
                  color: mode === "dark" ? "white" : "black",
                }}
                className="text-lg font-bold"
              >
                Total
              </p>
              <div className>
                <p
                  style={{
                    color: mode === "dark" ? "white" : "black",
                  }}
                  className="text-lg font-bold mb-1"
                >
                  ₹{grandTotal}
                </p>
              </div>
            </div>
            {/* <Modal  /> */}
            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
