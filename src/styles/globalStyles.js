
import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize' //https://github.com/sergeysova/styled-normalize#readme
import theme from './theme'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    body{
        background-color: ${theme.colors.lightGray};
        color: ${theme.colors.black};
    }

    main{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        min-height: 100vh;
    }
`;

export default GlobalStyle;