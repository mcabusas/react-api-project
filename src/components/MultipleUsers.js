import React from "react";
import SingleAllUsers from "./SingleAllUsers";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

const MultipleUsers = ({
	appendedUsers,
	setAppendedUsers,
	setCurrentPage,
	multipleUsers,
}) => {
	return (
		<div style={{ paddingBottom: "100px" }}>
			<Grid>
				<h4>Number of users on screen: {appendedUsers.length}</h4>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						multipleUsers();
					}}
					style={{ marginRight: "20px" }}
				>
					Append new user.
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => {
						setAppendedUsers([]);
						setCurrentPage(1);
					}}
				>
					Clear users.
				</Button>

				{appendedUsers.map((user) => (
					<SingleAllUsers key={user.login.uuid} user={user} />
				))}
			</Grid>
		</div>
	);
};

export default MultipleUsers;
