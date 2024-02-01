/* eslint-disable prettier/prettier */
import axios from 'axios';

// Thêm dữ liệu
const addProduct = async data => {
  try {
    const response = await axios.post(
      'https://65623cdedcd355c08324aeda.mockapi.io/api/v1/products',
      data,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error adding data:', error);
    throw error; // Xử lý lỗi
  }
};

// Sửa dữ liệu
const updateProduct = async (id, newData) => {
  try {
    const response = await axios.put(
      `https://65623cdedcd355c08324aeda.mockapi.io/api/v1/products/${id}`,
      newData,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error updating data:', error);
    throw error; // Xử lý lỗi
  }
};

// Xóa dữ liệu
const deleteProduct = async id => {
  try {
    const response = await axios.delete(
      `https://65623cdedcd355c08324aeda.mockapi.io/api/v1/products/${id}`,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error; // Xử lý lỗi
  }
};

export {addProduct, updateProduct, deleteProduct};
