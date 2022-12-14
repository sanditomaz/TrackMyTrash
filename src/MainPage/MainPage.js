import { ThreeDots } from "react-loader-spinner";
import React from "react";
import styled from "styled-components";
import Result from "./Result";
import { useState, useRef } from "react";
import axios from "axios";

export default function MainPage() {
  const [showResult, setShowResult] = useState(false);
  const [showError, setShowError] = useState(false);
  const [form, setForm] = useState({});
  const [data, setData] = useState();
  const [disable, setDisable] = useState(false);
  const bottomRef = useRef(null);

  const handleSubmit = (e) => {
    setShowError(false);
    setDisable(true);
    setShowResult(false);
    e.preventDefault();
    e.target.reset();

    const promise = axios.post("https://track-my-trash.onrender.com", form);
    promise.then((res) => {
      setData(res.data);
      setShowResult(true);
      setDisable(false);
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    });
    promise.catch((err) => {
      setDisable(false);
      setShowError(true);
      console.log(err);
    });
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Main>
      <nav>
        <div className="logo">Track My Trash ♻️</div>
        <div className="description">
          Tapez votre adresse, choisissez le type de matériel et appuyez sur le
          bouton Entrée pour trouver le point de collecte le plus proche
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="address"
            placeholder="Tapez votre adresse"
            onChange={handleForm}
            required
          />

          <select name="trash_type" required onChange={handleForm}>
            <option value="">Choisissez le type de matériel</option>
            <option value="amiantes">Amiantes</option>
            <option value="dangereux">Dangeroux</option>
            <option value="non_dangereux">Non dangeroux</option>
          </select>

          <button>
            {!disable ? (
              "Entrée"
            ) : (
              <ThreeDots
                height="40"
                width="60"
                radius="9"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
              />
            )}
          </button>
        </form>
        {showResult ? (
          <Result data={data} showError={showError} bottomRef={bottomRef} />
        ) : (
          ""
        )}
        {showError ? <h6>Adresse invalide, veuillez réessayer!</h6> : ""}
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
      opacity: 0.9;
      font-family: "Oswald", sans-serif;
      padding-bottom: 10px;
      text-align: center;
      line-height: 80px;
    }

    .description {
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-weight: 400;
      color: #000000;
      opacity: 0.5;
      line-height: 17px;
      padding-top: 20px;
      text-align: center;
      line-height: 20px;
      max-width: 600px;
      width: 100%;
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
        opacity: 0.9;
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
        opacity: 0.9;
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

    h6 {
      font-family: "Roboto", sans-serif;
      font-style: italic;
      font-size: 19px;
      font-weight: 500;
      color: #000000;
      text-align: center;
      opacity: 0.7;
      line-height: 20px;
      width: 100%;
      word-break: break-word;
    }
  }
`;
