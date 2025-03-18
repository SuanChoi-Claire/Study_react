import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  //단순히 페이지 번호를 계산하고 페이지를 표시하는 역할을 하고 있다.

  const pageItems = [];
  const maxPages = 10; // 한 번에 표시할 페이지 개수

  let startPage = Math.floor((currentPage - 1) / maxPages) * maxPages + 1;
  let endPage = Math.min(startPage + maxPages - 1, totalPages);

  //페이지를 정의 하는부분 처음과 끝 표시 .


  //페이지네이션의 이전 페이지로 이동하는 버튼들을 생성
  if (currentPage > 1) {
    pageItems.push(
      <Pagination.First key="first" onClick={() => onPageChange(1)} />
    );
    pageItems.push(
      <Pagination.Prev
        key="prev"
        onClick={() => onPageChange(currentPage - 1)}
      />
    );
  }

  for (let i = startPage; i <= endPage; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  if (currentPage < totalPages) {
    pageItems.push(
      <Pagination.Next
        key="next"
        onClick={() => onPageChange(currentPage + 1)}
      />
    );
    pageItems.push(
      <Pagination.Last key="last" onClick={() => onPageChange(totalPages)} />
    );
  }

  return <Pagination>{pageItems}</Pagination>;
};

export default PaginationComponent;
