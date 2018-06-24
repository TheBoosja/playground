import { injectGlobal } from 'styled-components';

const bg = '#eee';
const bg2 = '#fafafa';
const text = '#aaa';

injectGlobal`
	*,
	*:before,
	*:after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		border: none;
	}

	html {
		box-sizing: border-box;
		font-size: 62.5%;
	}

	body {
		font-family: sans-serif;
		font-size: 2rem;
		background-color: ${bg};
		color: ${text};
	}

	p {
		margin-top: 3rem;
	}
`;

export default {
	shadow: '#ddd',
	bg,
	bg2,
	text
};
