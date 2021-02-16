import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		--alert-green: hsla(120, 86%, 50%, 1);
		--alert-orange: rgba(238, 114, 0, 1);
		--black: hsla(261, 33%, 0%, 1);

		--dark-bg: hsla(260, 38%, 3%, 1);
		--dark-text: hsla(260, 48%, 85%, 1);
		--dark-text2: hsla(260, 20%, 71%, 1);
		--dark-link: hsla(260, 100%, 87%, 1);
		--dark-link-hover: hsla(260, 100%, 100%, 1);

		--light-bg: hsla(212, 100%, 78%, 1);
		--light-link: hsla(212, 26%, 8%, 0.33);
		--light-text: hsla(212, 26%, 8%, 1);
		--light-btn-shadow: hsla(212, 66%, 23%, 1);
	}
	
	body {
		/* background: ${(props) =>
      props.lightMode ? 'var(--light-bg)' : 'var(--dark-bg)'}; */
		background: var(--dark-bg);
		color: ${(props) =>
      props.lightMode ? 'var(--light-text)' : 'var(--dark-text)'};
			transition: color 0.5s ease-in;
	}
`;

export default GlobalStyles;
