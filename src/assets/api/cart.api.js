/* eslint-disable prettier/prettier */
import axios from 'axios';

// Thêm dữ liệu
const addCart = async data => {
  try {
    const response = await axios.post(
      'https://65ace9dfadbd5aa31bdfbec1.mockapi.io/VanhCoffee/Cart',
      data,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error adding data:', error);
    throw error; // Xử lý lỗi
  }
};

// Sửa dữ liệu
const updateCart = async (id, newData) => {
  try {
    const response = await axios.put(
      `https://65ace9dfadbd5aa31bdfbec1.mockapi.io/VanhCoffee/Cart/${id}`,
      newData,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error updating data:', error);
    throw error; // Xử lý lỗi
  }
};

// Xóa dữ liệu
const deleteCart = async id => {
  try {
    const response = await axios.delete(
      `https://65ace9dfadbd5aa31bdfbec1.mockapi.io/VanhCoffee/Cart/${id}`,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error; // Xử lý lỗi
  }
};

export {addCart, updateCart, deleteCart};
