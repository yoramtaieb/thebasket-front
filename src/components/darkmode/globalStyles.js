import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};   
    }
    nav {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        border-right: ${({ theme }) => theme.border};
        .path-white path {
            fill: ${({ theme }) => theme.text};
        }
        .path-black path {
            fill: ${({ theme }) => theme.body};
        }
        .links .link {
            background: ${({ theme }) => theme.text};
            h2 {
                color: ${({ theme }) => theme.body}; 
            }
        }
        .auth {
            border-top: ${({ theme }) => theme.border};
        }
    }
    .content-signin form,
    .content-signup form {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    .content-signin form input,
    .content-signup form input {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        border: ${({ theme }) => theme.border_input};
    }
    .content-signin::before,
    .content-signup::before {
        filter: ${({ theme }) => theme.filter};
    }
`;
