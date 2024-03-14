import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({ step }) => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let [subtotal, setsubtotal] = useState(0);
  let [shippingCharges, setshippingcharges] = useState(0);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          "https://groww-intern-assignment.vercel.app/v1/api/order-details"
        );
        const data = response.data;
        console.log("API Response:", data); // Log the API response
        setData(data);
        setCartItems(data.products || []);
        let temp = 0;
        let len = data.products.length;
        for (let i = 0; i < len; ++i)
          temp += data.products[i].price * data.products[i].quantity;
        setsubtotal(temp);
        setshippingcharges(temp * 0.1);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order details:", error);
        setLoading(false);
      }
    };
  
    fetchOrderDetails();
  }, []);

  console.log("data", data);
  console.log("cartitems", cartItems);
  return (
    <div className="w-[90vw]">
      {!loading ? (
        <div className="flex flex-col md:flex-row justify-between  md:space-x-5">
          <div className="overflow-y-scroll h-[50vh]">
            {cartItems.length > 0 ? (
              cartItems.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-row md:justify-evenly bg-[#ffffffdc] border p-4 mb-4"
                >
                  <div>
                    <Image
                      loader={() => {
                        return product.image;
                      }}
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="md:w-[20vh] md:h-[20vh] w-[12vh]  object-cover rounded-sm"
                    />
                  </div>
                  <div className="mx-[3vh] w-[60%] flex flex-col space-y-2">
                    <h3 className="md:text-[3vh] font-semibold">
                      {product.title}
                    </h3>
                    {/* Adjust this part according to your data structure */}
                    {/* <p className="text-gray-600 text-wrap hidden md:block ">
                      {product.description}
                    </p> */}
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-gray-600 md:text-[2.3vh] font-medium">
                      MRP: ${product.price}
                    </p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center border rounded">
                        <button className="px-2">-</button>
                        <span className="px-2">{product.quantity}</span>
                        <button className="px-2">+</button>
                      </div>
                      <button className="text-[2.5vh] font-medium text-[#B88E2F] hover:text-red-600 ml-auto">
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
          <div className="md:w-[40vw] sticky bg-[#fcf0e8be] py-[5vh] shadow-md flex flex-col justify-center  space-y-4">
            <h1 className="md:text-[3.2vh] text-[#652222] font-medium text-center">
              Cart Totals
            </h1>
            <div className="mx-auto">
              <p className="text-lg my-[2vh] ">Sub Total: ${subtotal}</p>
              <p className="text-lg my-[2vh] ">
                Shipping Charges: ${shippingCharges}
              </p>
              <p className="text-lg my-[2vh] font-medium">
              
                Total : ${subtotal + shippingCharges}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[60vh] ">
          <p className="text-[5vh] text-center my-[2vh]">Loading...</p>
       
       
        </div>
      )}
      
    </div>
    
  );
};

export default Cart;
