import axios from "axios";

const API_URL = "http://localhost:8080/api/boards"; // 백엔드 API 주소

export const fetchBoards = async (params) => {
  console.log("fetchBoards Call");
  const dummy =
    '{"data": {"content": [{ "write": "test1", "title": "Test Title1" },{ "write": "test2", "title": "Test Title2" }], "totalPages" :1}}';
  console.log(dummy);
  const response = JSON.parse(dummy);
  console.log(response.data);
  return response.data;

  //const response = await axios.get(API_URL, { params });
};

//Date 백이랑 연결 하기 전에 더미로 만들어서 간이 로 넣었다.

export const fetchBoardDetail = async (id) => {
  const dummy =
    '{"data": {"content": { "write": "test1", "title": "Test Title1" }, "totalPages" :1}}';
  const response = JSON.parse(dummy);

  //const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
