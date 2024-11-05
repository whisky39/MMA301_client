import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as OrderServices from "../../src/services/OrderServices";
import OrderItems from "../../components/Form/OrderItems";

const Notification = () => {
  const [user, setUser] = useState();
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const dataUser = await AsyncStorage.getItem("userInfo");
      if (dataUser) {
        setUser(JSON.parse(dataUser));
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (user && user.user.role === "admin") {
      fetchDataOrderAdmin();
    }
  }, [user]);

  const fetchDataOrderAdmin = async () => {
    const respone = await OrderServices.getAllOrder();
    if (respone?.status === "OK") {
      const sortOrdersByDate = respone.orders.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      const get3OrderNews = sortOrdersByDate.slice(0, 3);
      setUserOrders(get3OrderNews);
    }
  };

  return (
    <View>
      <ScrollView>
        {userOrders.map((order) => (
          <OrderItems key={order._id} order={order} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Notification;
