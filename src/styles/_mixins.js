export const buttonStyles = `
	align-self: center;
	background: white;
	color: black;
	box-shadow: 2px 2px var(--light-btn-shadow), 4px 4px var(--light-btn-shadow);
	border: 0;
	border-radius: 4px;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.04rem;
	outline: none;
	padding: 1rem;
	width: 50%;

	@media (max-width: 475px) {
		width: 80%;
	}

	&:active {
		box-shadow: 0 0;
		transform: translate(4px, 4px);
	}

	&:hover {
		background: $dark-text;
	}
`;

export const formRange = `
	input[type='range'] {
		height: 1.5rem;
		-webkit-appearance: none;
		margin: 10px 0.3rem;
		width: 33%;
		background: none;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 1.5rem;
		cursor: pointer;
		box-shadow: 0px 0px 1px var(--dark-bg);
		background: var(--dark-bg);
		border: 0px solid var(--dark-bg);
		border-radius: 30%;
	}
	input[type='range']::-webkit-slider-thumb {
		box-shadow: 2px 2px 2px var(--dark-bg);
		border: 0px solid var(--dark-bg);
		border-radius: 50%;
		height: 1.5rem;
		width: 1.5rem;
		background: #ffffff;
		cursor: pointer;
		-webkit-appearance: none;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: var(--dark-bg);
	}
	input[type='range']::-moz-range-track {
		width: 100%;
		height: 1.5rem;
		cursor: pointer;
		box-shadow: 0px 0px 1px var(--dark-bg);
		background: var(--dark-bg);
		border: 0px solid var(--dark-bg);
		border-radius: 50%;
	}
	input[type='range']::-moz-range-thumb {
		box-shadow: 2px 2px 2px var(--dark-bg);
		border: 0px solid var(--dark-bg);
		border-radius: 50%;
		height: 2rem;
		width: 2rem;
		background: #ffffff;
		cursor: pointer;
	}
	input[type='range']::-ms-track {
		width: 100%;
		height: 1.5rem;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
		border-radius: 50%;
	}
	input[type='range']::-ms-fill-lower {
		background: var(--dark-bg);
		border: 0px solid var(--dark-bg);
		box-shadow: 0px 0px 1px var(--dark-bg);
	}
	input[type='range']::-ms-fill-upper {
		background: var(--dark-bg);
		border: 0px solid var(--dark-bg);
		border-radius: 50%;
		box-shadow: 0px 0px 1px var(--dark-bg);
	}
	input[type='range']::-ms-thumb {
		margin-top: 1px;
		box-shadow: 2px 2px 2px var(--dark-bg);
		border: 0px solid var(--dark-bg);
		height: 2rem;
		width: 2rem;
		border-radius: 50%;
		background: #ffffff;
		cursor: pointer;
	}
	input[type='range']:focus::-ms-fill-lower {
		background: var(--dark-bg);
	}
	input[type='range']:focus::-ms-fill-upper {
		background: var(--dark-bg);
	}
`;

export const noSelect = `
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
