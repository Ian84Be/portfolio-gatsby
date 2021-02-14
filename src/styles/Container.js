import styled from 'styled-components';

const Container = styled.div.attrs((props) => ({
  bgFill: props.lightMode ? 'var(--light-bg)' : 'var(--dark-bg)',
}))`
  align-items: center;
  background: ${({ bgFill }) => bgFill};
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const GradientContainer = styled(Container).attrs(() => ({
  bgGradientLight: `linear-gradient(
		180deg,
		rgba(143, 195, 255, 1) 0%,
		rgba(251, 255, 143, 1) 77%,
		rgba(255, 147, 143, 1) 100%
	)`,
  bgGradientDark: `linear-gradient(
    180deg,
    rgba(7, 5, 11, 1) 0%,
    rgba(9, 9, 121, 1) 79%,
    rgba(238, 114, 0, 1) 100%
  );`,
}))`
  background: ${({ bgFill }) => bgFill};
  background: ${(props) =>
    props.lightMode ? props.bgGradientLight : props.bgGradientDark};
`;

export default Container;
