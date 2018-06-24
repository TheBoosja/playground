import styled, { css } from 'styled-components';

const ListItem = styled.li`
	display: grid;
	grid-template-columns: 10% 1fr 10%;
	background-color: ${({ theme }) => theme.bg2};
	border: 1px solid ${({ theme }) => theme.shadow};
	border-bottom: 0;
`;
ListItem.displayName = 'ListItem';

const CheckBox = styled.input.attrs({
	type: 'checkbox'
})`
	padding: 1rem;
`;
CheckBox.displayName = 'CheckBox';

const checked = css`
	color: #ccc;

	&::after {
		border-bottom: 0.2rem solid #ccc;
		content: '';
		left: 0;
		margin-top: calc(0.2rem / 2);
		position: absolute;
		right: 0;
		top: 50%;
	}
`;
const Title = styled.h2`
	text-transform: capitalize;
	font-size: 3rem;
	padding: 1rem 0.5rem;
	position: relative;
	justify-self: start;

	${props => props.strikeThrough && checked};
`;
Title.displayName = 'Title';

const DeleteBtn = styled.button`
	grid-column: -2;
	background-color: inherit;
	border: none;
	font-family: inherit;
	color: inherit;
	font-size: 4rem;
	visibility: hidden;
	border-left: 1px solid transparent;

	&:hover {
		cursor: pointer;
		border-left: 1px solid ${({ theme }) => theme.shadow};
	}

	${ListItem}:hover & {
		visibility: visible;
	}
`;
DeleteBtn.displayName = 'DeleteBtn';

export { ListItem, CheckBox, Title, DeleteBtn };
