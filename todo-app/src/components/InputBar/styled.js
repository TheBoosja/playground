import styled from 'styled-components';

const Form = styled.form`
	display: grid;
`;

const Input = styled.input`
	justify-self: center;
	width: 100%;
	padding: 1rem;
	font-size: 2.4rem;
	text-align: center;
	font-family: inherit;
	background-color: ${({ theme }) => theme.bg2};
	box-shadow: 0 0 1rem 0.4rem ${({ theme }) => theme.shadow};
	color: inherit;
`;
Input.displayName = 'Input';

export { Form, Input };
