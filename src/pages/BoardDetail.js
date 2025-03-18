import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBoardDetail } from "../services/boardService";

const BoardDetail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const loadBoard = async () => {
      const data = await fetchBoardDetail(id);
      console.log(data); //[{key:velue}] ==> JSON.parse(data)
      console.log(JSON.stringify(data)); //Object
      setBoard(data);
    };
    loadBoard();
  }, [id]);

  if (!board) return <p>Loading...</p>;

  return (
    <div>
      <h2>{board.title}</h2>
      <p>작성자: {board.writer}</p>
      <p>{board.content}</p>
    </div>
  );
};

export default BoardDetail;
