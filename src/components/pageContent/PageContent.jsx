import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../cards/Cards';
import NavbarComponent from '../navbar/NavbarComponent';
import Scroll from '../scroll/Scroll';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PageContent() {
	const [usersList, setUsersList] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [searchShow, setSearchShow] = useState(false);

	useEffect(() => {
		getUsersList();
	}, []);

	async function getUsersList() {
		try {
			const response = await axios.get('https://api.github.com/users');
			const { data: userListData } = response;
			if (userListData.length) setUsersList(userListData);
		} catch (error) {
			toast.error(error.message, {
				position: toast.POSITION.BOTTOM_LEFT
			});
		}
	}

	const handleChange = (e) => {
		if (e.target.value === '') {
			setSearchShow(false);
		} else {
			setSearchShow(true);
		}
		setSearchField(e.target.value);
	};

	const filteredPersons = usersList.filter((user) => {
		return user.login.toLowerCase().includes(searchField.toLowerCase());
	});

	return (
		<>
			<NavbarComponent />
			{usersList.length > 0 && (
				<Container style={{ padding: '2em' }}>
					<article>
						<Row>
							<Col>
								<section style={{ marginBottom: '2em', textAlign: 'center' }}>
									<h3>Search Using GitHub Username</h3>
									<InputGroup>
										<InputGroup.Text>@</InputGroup.Text>
										<Form.Control
											type='search'
											onChange={handleChange}
											placeholder='search the username'
										/>
									</InputGroup>
									{searchShow && (
										<Scroll heightInVh={'50vh'}>
											<Cards usersList={filteredPersons} />
										</Scroll>
									)}
								</section>
							</Col>
							<Col style={{ marginBottom: '2em', textAlign: 'center' }}>
								<h3>GitHub Users</h3>
								<aside style={{ height: '100vh', overflowY: 'scroll' }}>
									<Cards data-testid={'user-list'} usersList={usersList} />
								</aside>
							</Col>
						</Row>
					</article>
				</Container>
			)}
			<ToastContainer />
		</>
	);
}

export default PageContent;
