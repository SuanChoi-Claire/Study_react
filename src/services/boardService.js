import axios from "axios";

const API_URL = "http://localhost:8080/api/boards"; // 백엔드 API 주소

export const fetchBoards = async (params) => {
  const response = await axios.get(API_URL, { params });
  return response.data;
};

export const fetchBoardDetail = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
