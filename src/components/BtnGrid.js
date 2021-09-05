import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const BtnGrid = ({ allUsers, multipleUsers, fetchUsers }) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
				<Link to="/react-api-project">
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
			{/* <Grid item xs={12} sm={12} md={6} lg={3} xl={4}>
				<Link to="/RandomUser">
					<Button variant="outlined" color="primary" onClick={getRandomUser}>
						Random User
					</Button>
				</Link>
			</Grid> */}

			<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
				<Link to="/react-api-project/MultipleUsers">
					<Button variant="contained" color="primary" onClick={multipleUsers}>
						Multiple Users
					</Button>
				</Link>
			</Grid>

			<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
				<Link to="/react-api-project/AllUsers">
					<Button variant="outlined" color="primary" onClick={allUsers}>
						All Users
					</Button>
				</Link>
			</Grid>
		</Grid>
	);
};
export default BtnGrid;
