import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
	html {
		font-family: 'Montserrat', sans-serif;
  	letter-spacing: 0.04rem;
	}

	h1 {
		font-size: 3rem;
		line-height: 4rem;
		margin: 0;

		@media (max-width: 580px) {
			line-height: 2rem;
			text-align: center;
		}
	}

	h2 {
		font-size: 1.3rem;
		margin: 0;

		@media (max-width: 580px) {
			margin-top: 1rem;
			text-align: center;
		}
	}
`;

export default Typography;
