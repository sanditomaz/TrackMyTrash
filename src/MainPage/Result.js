import styled from "styled-components";
import { IoIosPin } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Result({ data, showError, bottomRef }) {
  const [address, setAddress] = useState();
  const params = {
    api: "1",
    query: address,
  };

  const encoded = encodeURI(params.query);
  const url = `https://www.google.com/maps/search/?api=${params.api}&query=${encoded}`;

  useEffect(() => {
    if (encoded !== "undefined") {
      handleClick();
    }
  }, [encoded]);

  const handleClick = () => {
    if (encoded !== "undefined") window.location.href = `${url}`;
  };

  return (
    <Header>
      {showError ? (
        <h6>No locations found</h6>
      ) : (
        <>
          <h6>Click on the adress to open Google Maps...</h6>
          {data.map((i, index) => (
            <>
              {index !== 2 ? (
                <h2
                  key={index}
                  onClick={() => {
                    setAddress(i.formatted_address);
                    handleClick();
                  }}
                >
                  <IoIosPin color="red" /> {i.Nom}: {i.formatted_address}
                </h2>
              ) : (
                <h2
                  key={index}
                  ref={bottomRef}
                  onClick={() => {
                    setAddress(i.formatted_address);
                    handleClick();
                  }}
                >
                  <IoIosPin color="red" /> {i.Nom}: {i.formatted_address}
                </h2>
              )}
            </>
          ))}
        </>
      )}
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

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #3b6011;
    text-align: center;
    line-height: 20px;
    width: 100%;
    gap: 5px;
    display: inline;
    word-break: break-all;
  }

  h2:hover {
    color: #74934f;
    cursor: pointer;
  }
`;
