import styled from 'styled-components';

export const Container = styled.div.attrs((props) => ({
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
    rgba(9, 9, 121, 1) 70%,
    rgba(238, 114, 0, 1) 100%
  );`,
  boxShadowDark: `
		0 0.33rem 0.33rem hsla(29, 100%, 47%, 0.91),
		0 0.33rem 0.33rem hsla(29, 100%, 47%, 0.1),
		0 0.63rem 0.33rem hsla(29, 100%, 47%, 0.1),
		0 0.93rem 0.33rem hsla(29, 100%, 47%, 0.1),
		0 1.33rem 0.33rem hsla(29, 100%, 47%, 0.1),
		0 2.33rem 0.33rem hsla(29, 100%, 47%, 0.1),
		0 3.33rem 0.33rem hsla(29, 100%, 47%, 0.1),
		0 4.33rem 0.33rem hsla(29, 100%, 47%, 0.1);
	`,
  boxShadowLight: `
		0 0.33rem 0.33rem hsla(2, 100%, 78%, 0.91),
		0 0.33rem 0.33rem hsla(2, 100%, 78%, 0.1),
		0 0.63rem 0.33rem hsla(2, 100%, 78%, 0.1),
		0 0.93rem 0.33rem hsla(2, 100%, 78%, 0.1),
		0 1.33rem 0.33rem hsla(2, 100%, 78%, 0.1),
		0 2.33rem 0.33rem hsla(2, 100%, 78%, 0.1),
		0 3.33rem 0.33rem hsla(2, 100%, 78%, 0.1),
		0 4.33rem 0.33rem hsla(2, 100%, 78%, 0.1);
	`,
}))`
  background: ${({ bgFill }) => bgFill};
  background: ${(props) =>
    props.lightMode ? props.bgGradientLight : props.bgGradientDark};
  box-shadow: ${(props) =>
    props.lightMode ? props.boxShadowLight : props.boxShadowDark};
  margin-bottom: 4rem;
`;
