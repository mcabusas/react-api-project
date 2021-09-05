import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const BtnGrid = ({ allUsers, multipleUsers, fetchUsers }) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
				<Link to="/">
					<Button
						size="large"
						variant="contained"
						color="secondary"
						onClick={fetchUsers}
					>
						Home
					</Button>
				</Link>
			</Grid>

			<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
				<Link to="/MultipleUsers" replace>
					<Button variant="contained" color="primary">
						Multiple Users
					</Button>
				</Link>
			</Grid>

			<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
				<Link to="/AllUsers" replace>
					<Button variant="outlined" color="primary">
						All Users
					</Button>
				</Link>
			</Grid>
		</Grid>
	);
};
export default BtnGrid;
