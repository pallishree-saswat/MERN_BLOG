import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`

  height: 100px;
  width: 200px;
  background: blue;
  padding: 10px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h3`
  color: white;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
