import { ThreeDots } from "react-loader-spinner";
import React from "react";
import styled from "styled-components";
import Result from "./Result";
import { useState } from "react";
import axios from "axios";

export default function MainPage({ goMain, setGoMain }) {
  return (
    <Main>
      <nav>
        <div className="logo">Track My Trash ♻️</div>
        <div className="description">
          Type your adress, choose the material type and press submit
        </div>
        <form>
          <input
            type="text"
            name="adress"
            placeholder="Type your adress"
            required
          />

          <select name="material" required>
            <option value="">Select material type</option>
            <option value="amiantes">amiantes</option>
            <option value="dangereux">dangeroux</option>
            <option value="non_dangereux">non dangeroux</option>
          </select>

          <button>Submit</button>
        </form>
        <Result />
      </nav>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;

  nav {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px 0;
    flex-wrap: wrap;

    .logo {
      font-size: 68px;
      font-weight: 700;
      color: #fefefe;
      font-family: "Oswald", sans-serif;
      padding-bottom: 10px;
      text-align: center;
      line-height: 80px;
    }

    .description {
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-weight: 400;
      color: #fefefe;
      line-height: 17px;
      padding-top: 20px;
      text-align: center;
      line-height: 20px;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      gap: 20px;

      @media (max-width: 800px) {
        flex-wrap: wrap;
      }

      input {
        height: 30px;
        max-width: 285px;
        width: 100%;
        border-radius: 4px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid #d5d3d2;
        background-color: white;
        padding-left: 10px;
        color: gray;
      }

      select {
        height: 35px;
        max-width: 300px;
        width: 100%;
        border-radius: 4px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid #d5d3d2;
        background-color: white;
        padding-left: 10px;
        color: gray;
      }

      button {
        max-width: 290px;
        width: 100%;
        border: none;
        outline: 5px solid #6cc1a4;
        border-radius: 4px;
        background-color: #6cc1a4;
        font-size: 20px;
        font-weight: 700;
        color: #ffffff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
