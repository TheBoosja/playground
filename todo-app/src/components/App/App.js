import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../global';
import InputBar from '../InputBar';
import TodoList from '../TodoList';

import { Layout } from './styled';
import { Header } from '../styled';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Layout>
					<Header>todos</Header>
					<InputBar />
					<TodoList />
				</Layout>
			</ThemeProvider>
		);
	}
}

export default App;
