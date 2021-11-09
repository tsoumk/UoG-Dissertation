import React from 'react'
import { useHistory } from "react-router-dom";

import {Button} from 'react-bootstrap';



export const Home = () => {
	const history = useHistory();
	const handleLogin = () => history.push('/login')

	return (
		<div className="center">
			<h1 className=" h1-home pt-5">Welcome to University of Glasgow Bank</h1>
			<br></br>
			<hr></hr>
			<br></br>
			<br></br>
			<h4 className=" h4-sub">Please login to use our services</h4>
			<br></br>
			<br></br>
			<Button variant="primary" type="button" onClick={handleLogin}>Login</Button>

		</div>
	)
}
