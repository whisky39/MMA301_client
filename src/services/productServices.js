import axios from "axios";

import { port } from "../../ultils";

// POST CREATE PRODUCT
export const createProduct = async (data) => {
  // data ở phía sau đường link == truyền data dưới dạng object body
  try {
    const res = await axios.post(`${port()}/product/create-product`, data);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

// GET ALL PRODUCT
export const getAllProduct = async (search) => {
  console.log("port ", port());
  let res = [];
  if (search?.length > 0) {
    res = await axios.get(`${port()}/product/get-all`);
  } else {
    res = await axios.get(`${port()}/product/get-all`);
  }

  console.log(res);
  return res?.data;
};

// GET ALL PRODUCT BY TYPE
export const getProductType = async (idP, page, limit) => {
  if (idP) {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-all?filter=type&filter=${idP}&limit=${limit}&page=${page}`
    );
    return res?.data;
  }
};

// GET ALL CATEGORY
export const getAllCategory = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/product/get-all-category`
  );
  return res?.data;
};

// GET DETAILS PRODUCT BY ID
export const getDetailsProduct = async (id) => {
  const res = await axios.get(`${"http://192.168.1.7:8080/api"}/product/${id}`);
  return res?.data;
};

// POST UPDATE PRODUCT BY ID
export const upDateProducts = async (id, access_token, data) => {
  try {
    console.log("data ", data);
    // thông qua id , và access_token chỉ cho phép update product bởi admin.
    const res = await axiosJWT.put(
      `${process.env.REACT_APP_API_URL}/product/update/${id}`,
      data,
      {
        headers: {
          token: `Bearer ${access_token}`,
        },
      }
    );
    return res?.data;
  } catch (error) {
    console.log("error :", error);
  }
};

// DELETE DELETE PRODUCT BY ID
export const deleteProduct = async (id, access_token) => {
  try {
    // thông qua id , và access_token chỉ cho phép delete product bởi admin.
    const res = await axiosJWT.delete(
      `${process.env.REACT_APP_API_URL}/product/delete-product/${id}`,
      {
        headers: {
          token: `Bearer ${access_token}`,
        },
      }
    );
    return res?.data;
  } catch (error) {
    console.log("error :", error);
  }
};
