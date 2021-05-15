import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};   
    }
    nav {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        border-right: ${({ theme }) => theme.border};
    }
    .container-img form {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    .container-img form input {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        border: ${({ theme }) => theme.border};
    }
`;
