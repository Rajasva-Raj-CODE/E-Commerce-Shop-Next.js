// //@ts-nocheck
// import React from 'react'
// import { FUNDING, PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

// interface PayPalButtonProps {
//     amount: string;
//     onSuccess: (data: any) => void;
// }

// const PayPalButton = ({ amount, onSuccess }: PayPalButtonProps) => {
//     return (
//         <PayPalScriptProvider
//             options={{
//                 clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
//                 currency: "USD",
//             }}>
//             <PayPalButtons fundingSource={FUNDING.PAYPAL} createOrder={(data, action) => {
//                 return action.order.create({
//                     purchase_units: [{
//                         amount: {
//                             value: amount,
//                         },
//                     }],
//                 });
//             }}
//                 onApprove={(data, actions) => {
//                     return actions.order.capture().then((details) => {
//                         onSuccess(details);
//                     });
//                 }}

//             />
//         </PayPalScriptProvider>
//     )
// }

// export default PayPalButton

import React from "react";
import {
  FUNDING,
  PayPalButtons,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";

interface PayPalButtonProps {
  amount?: string;
  onSuccess: (data: Record<string, any>) => void; // Use a safer type than 'any'
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: "USD",
      }}
    >
      <PayPalButtons
        fundingSource={FUNDING.PAYPAL}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount || "0.01", // Ensure a default value
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          if (!actions.order) return Promise.reject("Order action missing");

          return actions.order.capture().then((details) => {
            onSuccess(details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
