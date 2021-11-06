import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import mockUsers from '../mock/users.json';

export const Login = () => {
	const [username, setUSername] = useState()
	const [password, setPassword] = useState()
	const [errors, setErrors] = useState(false)
	const [loading, setLoading] = useState(false)
	const history = useHistory();

	const checkCredentials = async () => {
		setLoading(true)
		const result = mockUsers.filter(user => user.username === username && user.password === password)
		return new Promise(resolve => setTimeout(() => resolve(result.length !== 0 ? true : false), 3000))
	}

	const handleLogin = async (e) => {
		e.preventDefault()

		checkCredentials().then(response => {
			setLoading(false)
			response ? history.push('/calibration') : setErrors(true)
		})
	}

	return (
		<div className="row">
			<h1 className="h1-home center">Sign in</h1>
			<Form className="mx-auto col-3" onSubmit={(e) => handleLogin(e)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUSername(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
				</Form.Group>

				<Button className=" d-flex justify-content-between align-items-center" variant="primary" type="submit">
					Submit
					{
						loading && <Spinner style={{ marginLeft: 16 }} animation="border" role="status" size="sm">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					}
				</Button>
			</Form>
			{
				errors && <div>
							<br></br>
							<br></br>
							<h4 className="center">Invalid Login Attempt</h4>
							<h4 className="center">Check your credentials!</h4>
						</div>
			}
		</div>

	)
}
