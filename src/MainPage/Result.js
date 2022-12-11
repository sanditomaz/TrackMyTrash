import styled from "styled-components";
import { IoIosPin } from "react-icons/io";

export default function Result() {
  return (
    <Header>
      <h6>Click on adress to open Google Maps</h6>

      <h2>
        <IoIosPin color="red" />
        R. Niterói, 180 - Jardim Maria Helena, Barueri - SP, 06445-090
      </h2>

      <h2>
        <IoIosPin color="red" />
        adress2
      </h2>

      <h2>
        <IoIosPin color="red" />
        adress3
      </h2>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  word-break: break-word;
  width: 70%;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 10px;

  h6 {
    font-family: "Roboto", sans-serif;
    font-size: 19px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    line-height: 20px;
    width: 100%;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #3b6011;
    text-align: center;
    line-height: 20px;
    width: 100%;
    gap: 5px;
  }

  h2:hover {
    color: #74934f;
    cursor: pointer;
  }
`;
