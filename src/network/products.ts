import axiosInstance from "./axios";

export const getProducts = async (skip: number = 0, limit: number = 8) => {
  try {
    const response = await axiosInstance.get(`/products?limit=${limit}&skip=${skip}`);
    return response.data;
  } catch (error:any) {
    throw new Error(error || 'Error fetching products');
  }
};

export const getProduct = async (id:string) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error:any) {
    throw new Error(error || 'Error fetching products');
  }
};

