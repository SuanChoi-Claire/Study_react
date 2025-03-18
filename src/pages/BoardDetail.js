import { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import CommentList from "../components/CommentList";
import { useParams } from "react-router-dom";
import { fetchBoardDetail } from "../services/boardService";

const BoardDetail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const currentUser = "작성자123"; // 현재 로그인된 사용자 (예제)

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
