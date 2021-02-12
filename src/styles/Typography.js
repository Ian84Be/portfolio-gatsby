import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
	html {
		font-family: 'Montserrat', sans-serif;
  	letter-spacing: 0.04rem;
	}

	h1 {
		font-size: 2rem;
		line-height: 3rem;
	}

	h2 {
		font-size: 1.2rem;
	}
`;

export default Typography;
