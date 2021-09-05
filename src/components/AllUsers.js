import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import SingleAllUsers from "./SingleAllUsers";
const AllUsers = ({ users, allUsers }) => {
	useEffect(() => {
		allUsers();
	}, [allUsers]);
	return (
		<div style={{ paddingBottom: "100px" }}>
			<Grid>
				{users.map((user) => (
					<SingleAllUsers key={user.login.uuid} user={user} />
				))}
			</Grid>
		</div>
	);
};

export default AllUsers;
