import { View, Text } from "react-native";
import React, { useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { ProductsData } from "../data/ProductsData";

const Product = () => {

  const fetchProductFromServer = async () => {
    
  }

  useEffect(() => {

  },[])

  return (
    <View>
      {ProductsData.map((p) => (
        <ProductsCard
          key={p._id}
          p={p}
        />
      ))}
    </View>
  );
};

export default Product;
