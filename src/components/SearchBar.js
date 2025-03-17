import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    writer: "",
    title: "",
    date: "",
    pageSize: "10",
  }); //초기값 지정

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

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
