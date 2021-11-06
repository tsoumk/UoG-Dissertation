import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const Topbar = () => {
	const history = useHistory();
	const handleAccount = () => history.push('/account')
	// const handleLogin = () => history.push('/login')

	return (
		<Navbar className="navbar navbar-light" style={{background: "#e3f2fd"}}>
			{/* e3f2fd */}
			<Container>
				<Navbar.Brand href="/">UoG Bank</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="w-100 d-flex justify-content-end">
						<Button variant="primary" type="button" onClick={handleAccount}>Account</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Topbar
