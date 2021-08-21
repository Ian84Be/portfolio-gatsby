import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './_breakpoints';

const Typography = createGlobalStyle`
	html {
		font-family: 'Montserrat', sans-serif;
  	letter-spacing: 0.04rem;
	}

	h1 {
		font-size: 3rem;
		line-height: 4rem;
		margin: 0;

		@media (max-width: ${breakpoints.small}) {
			line-height: 3rem;
			text-align: center;
		}
	}

	h2 {
		font-size: 1.3rem;
		margin: 0;

		@media (max-width: ${breakpoints.small}) {
			margin-top: 1rem;
			text-align: center;
		}
	}

	p {
		font-size: 1rem;
		line-height: 1.8rem;
		letter-spacing: 0.03rem;
		margin-bottom: 3rem;
	}
`;

export default Typography;
