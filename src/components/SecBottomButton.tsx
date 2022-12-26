import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

type SecBottomButtonProps = {
  pageName: string;
}

const Button = styled.button`
  font-size: 15px;
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  color: #868686;
`

function SecBottomButton({ pageName }: SecBottomButtonProps) {
  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  const onClick = () => {
    if(pathName === "/") {
      navigate(pageName);
    } else {
      navigate("/");
    }
  }

  return (
    <Button onClick={onClick}>{pathName === "/" ? "더보기" : "접기"}</Button>
  )
}

export default SecBottomButton;