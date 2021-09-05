import React, { useState, useCallback, useEffect } from "react";
import "./css/App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BtnGrid from "./components/BtnGrid";
import MultipleUsers from "./components/MultipleUsers";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";

function App() {
	const [users, setUsers] = useState([]);
	const [appendedUsers, setAppendedUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const [user, setUser] = useState([]);

	const fetchUsers = useCallback(async () => {
		const data = await fetch("https://randomuser.me/api");
		const json = await data.json();
		console.log(json.results);

		setUser(json.results);
	}, []);

	const multipleUsers = useCallback(async () => {
		const response = await fetch(
			`https://randomuser.me/api?page=${currentPage}`
		);
		const data = await response.json();
		setAppendedUsers([...data.results, ...appendedUsers]);
		setCurrentPage(currentPage + 1);
	}, [currentPage, appendedUsers]);

	const allUsers = useCallback(async () => {
		const response = await fetch("https://randomuser.me/api/?results=50");
		const data = await response.json();
		setUsers(data.results);
	}, []);

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	return (
		<>
			<div className="App">
				<Container>
					<Router>
						<div className="btn-container">
							<BtnGrid
								allUsers={allUsers}
								multipleUsers={multipleUsers}
								fetchUsers={fetchUsers}
							/>
						</div>
						<Switch>
							<Route path="/react-api-project" exact>
								<Home user={user} fetchUsers={fetchUsers} />
							</Route>
							<Route path="/react-api-project/MultipleUsers" exact>
								<MultipleUsers
									appendedUsers={appendedUsers}
									setAppendedUsers={setAppendedUsers}
									setCurrentPage={setCurrentPage}
									multipleUsers={multipleUsers}
								/>
							</Route>
							<Route path="/react-api-project/AllUsers" exact>
								<AllUsers users={users} />
							</Route>
						</Switch>
					</Router>
				</Container>
			</div>
		</>
	);
}

export default App;
