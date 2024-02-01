/* eslint-disable prettier/prettier */
import axios from 'axios';

// Thêm dữ liệu
const addUser = async data => {
  try {
    const response = await axios.post(
      'https://65623cdedcd355c08324aeda.mockapi.io/api/v1/User',
      data,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error adding data:', error);
    throw error; // Xử lý lỗi
  }
};

// Sửa dữ liệu
const updateUser = async (id, newData) => {
  try {
    const response = await axios.put(
      `https://65623cdedcd355c08324aeda.mockapi.io/api/v1/User/${id}`,
      newData,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error updating data:', error);
    throw error; // Xử lý lỗi
  }
};

// Xóa dữ liệu
const deleteUser = async id => {
  try {
    const response = await axios.delete(
      `https://65623cdedcd355c08324aeda.mockapi.io/api/v1/User/${id}`,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error; // Xử lý lỗi
  }
};

const getData = async () => {
  try {
    const response = await axios.get(
      `https://65623cdedcd355c08324aeda.mockapi.io/api/v1/User`,
    );
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error; // Xử lý lỗi
  }
};

export {addUser, updateUser, deleteUser, getData};
