/* eslint-disable prettier/prettier */
import axios from 'axios';

// Thêm dữ liệu
const addBill = async data => {
  try {
    const response = await axios.post(
      'https://65b91150b71048505a8a1b45.mockapi.io/bill',
      data,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error adding data:', error);
    throw error; // Xử lý lỗi
  }
};

// Sửa dữ liệu
const updateBill = async (id, newData) => {
  try {
    const response = await axios.put(
      `https://65b91150b71048505a8a1b45.mockapi.io/bill/${id}`,
      newData,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error updating data:', error);
    throw error; // Xử lý lỗi
  }
};

// Xóa dữ liệu
const deleteBill = async id => {
  try {
    const response = await axios.delete(
      `https://65b91150b71048505a8a1b45.mockapi.io/bill/${id}`,
    );
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error; // Xử lý lỗi
  }
};

export {addBill, updateBill, deleteBill};
