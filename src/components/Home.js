import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import TodayIcon from "@material-ui/icons/Today";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import LockIcon from "@material-ui/icons/Lock";
import PhoneIcon from "@material-ui/icons/Phone";

const Home = ({ user, fetchUsers }) => {
	const [isEmailHovering, setEmailIsHovering] = useState(false);
	const [isTodayHovering, setTodayIsHovering] = useState(false);
	const [isAddressHovering, setAddressHovering] = useState(false);
	const [isPhoneHovering, setPhoneHovering] = useState(false);
	const [isLockHovering, setLockHovering] = useState(false);

	return (
		<div>
			{user.map((el) => (
				<div id="random-user" key={el.login.uuid}>
					<img src={el.picture.large} alt="" />
					<p>
						{el.name.first} {el.name.last}
					</p>
					<Grid spacing={8} container style={{ justifyContent: "center" }}>
						<Grid
							item
							id="email-icon"
							onMouseOver={() => {
								setEmailIsHovering(true);
								console.log(el.login.uuid);
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
						<Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
							<div
								className={el.login.uuid}
								key={el.login.uuid}
								style={{
									display: isEmailHovering ? "block" : "none",
									transition: "all 0.3s ease-in-out",
								}}
							>
								<h4>My email address is: </h4>
								<p>{el.email}</p>
							</div>
							<div
								id="user-dob"
								style={{ display: isTodayHovering ? "block" : "none" }}
							>
								<h4>My age is: </h4>
								<p>{el.dob.age}</p>
							</div>
							<div
								id="user-address"
								style={{ display: isAddressHovering ? "block" : "none" }}
							>
								<h4>My address is: </h4>
								<p>{`${el.location.street.number} ${el.location.street.name}, ${el.location.city}, ${el.location.state}, ${el.location.country}, ${el.location.postcode}`}</p>
							</div>
							<div
								id="user-phone"
								style={{ display: isPhoneHovering ? "block" : "none" }}
							>
								<h4>My phone number is: </h4>
								<p>{el.phone}</p>
								<h4>My cell number is: </h4>
								<p>{el.cell.toString()}</p>
							</div>
							<div
								id="el-info"
								style={{ display: isLockHovering ? "block" : "none" }}
							>
								<h4>My username is:</h4>
								<p>{el.login.username}</p>
								<h4>My password is: </h4>
								<p>{el.login.password}</p>
							</div>
						</Grid>
					</Grid>
				</div>
			))}
		</div>
	);
};

export default Home;
