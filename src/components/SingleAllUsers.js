import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import TodayIcon from "@material-ui/icons/Today";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import LockIcon from "@material-ui/icons/Lock";
import PhoneIcon from "@material-ui/icons/Phone";

const SingleAllUsers = ({ user }) => {
	const [isEmailHovering, setEmailIsHovering] = useState(false);
	const [isTodayHovering, setTodayIsHovering] = useState(false);
	const [isAddressHovering, setAddressHovering] = useState(false);
	const [isPhoneHovering, setPhoneHovering] = useState(false);
	const [isLockHovering, setLockHovering] = useState(false);
	return (
		<>
			<Grid item key={user.login.uuid}>
				<div className="all-users">
					<Grid direction="row" className="all-users-name-icon-row" container>
						<Grid item xs={12} sm={6}>
							<h1>
								{user.name.first} {user.name.last}
							</h1>
						</Grid>
						<Grid
							item
							sm={1}
							id="email-icon"
							onMouseOver={() => {
								setEmailIsHovering(true);
							}}
							onMouseOut={() => {
								setEmailIsHovering(false);
							}}
						>
							<EmailIcon fontSize="large" className="material-icon">
								Filled
							</EmailIcon>
						</Grid>

						<Grid
							item
							sm={1}
							id="email-icon"
							onMouseOver={() => {
								setTodayIsHovering(true);
							}}
							onMouseOut={() => {
								setTodayIsHovering(false);
							}}
						>
							<TodayIcon fontSize="large" className="material-icon">
								Filled
							</TodayIcon>
						</Grid>

						<Grid
							item
							sm={1}
							id="email-icon"
							onMouseOver={() => {
								setAddressHovering(true);
							}}
							onMouseOut={() => {
								setAddressHovering(false);
							}}
						>
							<PersonPinIcon fontSize="large" className="material-icon">
								Filled
							</PersonPinIcon>
						</Grid>
						<Grid
							item
							sm={1}
							id="email-icon"
							onMouseOver={() => {
								setPhoneHovering(true);
							}}
							onMouseOut={() => {
								setPhoneHovering(false);
							}}
						>
							<PhoneIcon fontSize="large" className="material-icon">
								Filled
							</PhoneIcon>
						</Grid>
						<Grid
							item
							sm={1}
							id="email-icon"
							onMouseOver={() => {
								setLockHovering(true);
							}}
							onMouseOut={() => {
								setLockHovering(false);
							}}
						>
							<LockIcon fontSize="large" className="material-icon">
								Filled
							</LockIcon>
						</Grid>
					</Grid>
					<Grid
						direction="row"
						className="all-users-name-icon-row"
						container
						spacing={2}
					>
						<Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
							<img src={user.picture.large} alt="" />
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
							<div
								className={user.login.uuid}
								key={user.login.uuid}
								style={{
									display: isEmailHovering ? "block" : "none",
									transition: "all 0.3s ease-in-out",
								}}
							>
								<h4>My email address is: </h4>
								<p>{user.email}</p>
							</div>
							<div
								id="user-dob"
								style={{ display: isTodayHovering ? "block" : "none" }}
							>
								<h4>My age is: </h4>
								<p>{user.dob.age}</p>
							</div>
							<div
								id="user-address"
								style={{ display: isAddressHovering ? "block" : "none" }}
							>
								<h4>My address is: </h4>
								<p>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</p>
							</div>
							<div
								id="user-phone"
								style={{ display: isPhoneHovering ? "block" : "none" }}
							>
								<h4>My phone number is: </h4>
								<p>{user.phone}</p>
								<h4>My cell number is: </h4>
								<p>{user.cell.toString()}</p>
							</div>
							<div
								id="user-info"
								style={{ display: isLockHovering ? "block" : "none" }}
							>
								<h4>My username is:</h4>
								<p>{user.login.username}</p>
								<h4>My password is: </h4>
								<p>{user.login.password}</p>
							</div>
						</Grid>
					</Grid>
					<hr></hr>
				</div>
			</Grid>
		</>
	);
};

export default SingleAllUsers;
