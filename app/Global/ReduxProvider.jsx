"use client";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
// import { clearCart } from "./Features/cartSlice";
// import { useEffect } from "react";

export default function ReduxProvider({ children }) {
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     store.dispatch(clearCart());
  //     console.log("HI");
  //   }, 10000);

  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
