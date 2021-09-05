import React from "react";
import { Grid } from "@material-ui/core";
import SingleAllUsers from "./SingleAllUsers";
const AllUsers = ({ users }) => {
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
