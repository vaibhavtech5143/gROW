import React, { useState } from "react";
import { Card, Typography } from "@mui/material";

const OrderDetails = ({ subtotal, shippingCharges, paymentMethods }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  // Function to calculate total
  const calculateTotal = () => {
    const total = subtotal + shippingCharges;
    return total;
  };

  return (
    <div className="container mx-auto p-8 md:flex-row">
    <h2>Thank You For Making a purchase from us</h2>
    </div>
  );
};

export default OrderDetails;
 