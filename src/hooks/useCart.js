import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (foods) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (foods.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const title in savedCart) {
        const addedProduct = foods.find((fd) => fd.title === title);
        if (addedProduct) {
          const quantity = savedCart[title];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [foods]);

  return [cart, setCart];
};

export default useCart;
