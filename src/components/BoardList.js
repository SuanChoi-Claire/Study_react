import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { fetchBoards } from "../services/boardService";
import SearchBar from "./SearchBar";
import PaginationComponent from "./Pagination";

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loadBoards = async () => {
      const response = await fetchBoards({
        page: currentPage,
        ...searchParams,
      });
      //TODO fetchBoards 는 boardService.js에서 정의해야 한다. 게시물을 불러오는 함수.
      setBoards(response.content);
      setTotalPages(response.totalPages);
    };

    loadBoards();
  }, [currentPage, searchParams]);

  //onSearch 는 searchBar.js에서 쓰인다.
  return (
    <div>
      <SearchBar onSearch={setSearchParams} />
      {/* 자식한테 넘겨주는 문법 이다. 이거 쓸꺼야 
      React에서 부모 컴포넌트가 자식 컴포넌트로 값을 전달할 때 아래와 같은 문법을 사용해요.   <컴포넌트이름 속성이름={값} />     */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board, index) => (
            <tr key={board.id}>
              <td>{index + 1}</td>
              <td
                onClick={() => navigate(`/board/${board.id}`)}
                style={{ cursor: "pointer", color: "blue" }}
              >
                {board.title}
              </td>
              <td>{board.writer}</td>
              <td>{board.createdAt}</td>
              <td>{board.views}</td>
            </tr>
          ))}

          {/* HTML 덩어리로 바꾸기 때문에 ()괄호를 사용한다. */}
        </tbody>
      </Table>
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BoardList;
