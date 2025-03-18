import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    writer: "",
    title: "",
    date: "",
    pageSize: "10",
  }); //초기값 지정
  //onSearch 는 부모의 setSearchParams  자식 컴포넌트에서 사용할 꺼야.
  // ({ onSearch }) 여기서는 구조분해할당(= 통째로 가져온것)

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  //이거는 자식의 setSearchParams _ searchBar에서 searchparam 값이 변경되는 함수

  const handleSearch = () => {
    onSearch(searchParams);
  };

  //부모의 setSearchParam ( 자식의 searchParams ) 를 하게 되는데 여기서 값을 괄호 안에 넣어주면 부모의 searchParam이 자동으로 바뀐다.

  return (
    <Form className="mb-3">
      <Row>
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="작성자"
            name="writer"
            value={searchParams.writer}
            onChange={handleChange}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="제목"
            name="title"
            value={searchParams.title}
            onChange={handleChange}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="date"
            name="date"
            value={searchParams.date}
            onChange={handleChange}
          />
        </Col>
        <Col md={2}>
          <Form.Select
            name="pageSize"
            value={searchParams.pageSize}
            onChange={handleChange}
          >
            <option value="10">10개</option>
            <option value="20">20개</option>
            <option value="50">50개</option>
          </Form.Select>
        </Col>
        <Col md={1}>
          <Button variant="primary" onClick={handleSearch}>
            검색
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
