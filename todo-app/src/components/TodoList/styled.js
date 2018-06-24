import React from 'react';
import styled, { css } from 'styled-components';

const List = styled.ul`
	margin: 3rem 0;
	display: grid;
	list-style: none;
`;
List.displayName = 'List';

const ActionListItem = styled.li`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	background-color: ${({ theme }) => theme.bg2};
	border: 1px solid ${({ theme }) => theme.shadow};
	padding: 1rem;
	align-items: center;
`;

const Detail = styled.span`
	font-style: italic;
	font-size: 1.4rem;
	padding: 0.5rem;
`;

const BtnGroup = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 0.4rem;
	justify-content: center;
`;

// FilterBtn BEGIN
const RadioWrapper = styled.div`
	display: grid;
	cursor: pointer;
`;

const activeBorder = css`
	border: 1px solid ${({ theme }) => theme.shadow};
`;
const Label = styled.label`
	font-size: 1rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	${props => !props.checked ? 'border: 1px solid transparent;' : activeBorder};

	&:hover {
		border: 1px solid ${({ theme }) => theme.shadow};
	}
`;

const Radio = styled.input.attrs({
	type: 'radio'
})`
	display: none;
`;

const FilterBtn = ({ name, label, value, checked, onChange }) => 
	<RadioWrapper>
		<Label htmlFor={name} checked={checked}>
			{label}
		</Label>
		<Radio id={name} value={value} checked={checked} onChange={onChange} />
	</RadioWrapper>
;
// FilterBtn END

const Button = styled.button`
	background-color: transparent;
	justify-self: end;
	color: inherit;
	font-size: 1rem;
	padding: 0.5rem;
	border: 1px solid transparent;

	&:hover {
		border: 1px solid ${({ theme }) => theme.shadow};
		border-radius: 0.5rem;
	}
`;

export { List, ActionListItem, Detail, BtnGroup, FilterBtn, Button };
