import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        cursor: default;
        a {
            text-decoration: none;
            cursor: pointer;
            font-weight: 600;
            color: #052a7b;
        }
        ::-webkit-scrollbar {
        width: 10px;
        }
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
        background:  #3e3e3e; 
        border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
        background: #7b7676; 
        }
    }
    html,body{
        height: 100%;
        background: rgb(199,227,170);
        background: linear-gradient(0deg, rgba(199,227,170,1) 0%, rgba(105,184,157,1) 100%);
    }
    .root{
        height: 100%
    }
`;

export default GlobalStyle;
