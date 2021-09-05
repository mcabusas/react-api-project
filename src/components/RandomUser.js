import React from "react";
// import { Grid } from "@material-ui/core";
// import EmailIcon from "@material-ui/icons/Email";
// import TodayIcon from "@material-ui/icons/Today";
// import PersonPinIcon from "@material-ui/icons/PersonPin";
// import LockIcon from "@material-ui/icons/Lock";
// import PhoneIcon from "@material-ui/icons/Phone";

const RandomUser = ({ randomUser }) => {
	// const [isEmailHovering, setEmailIsHovering] = useState(false);
	// const [isTodayHovering, setTodayIsHovering] = useState(false);
	// const [isAddressHovering, setAddressHovering] = useState(false);
	// const [isPhoneHovering, setPhoneHovering] = useState(false);
	// const [isLockHovering, setLockHovering] = useState(false);
	console.log(randomUser[0].login.uuid);
	return (
		<p>adfdsf</p>
		// <div id="random-user">
		// 	<img src={user[0].picture.large} />
		// 	<p>
		// 		{user.name.first} {user.name.last}
		// 	</p>
		// 	<Grid container style={{ justifyContent: "center" }}>
		// 		<Grid
		// 			item
		// 			sm={1}
		// 			id="email-icon"
		// 			onMouseOver={() => {
		// 				setEmailIsHovering(true);
		// 			}}
		// 			onMouseOut={() => {
		// 				setEmailIsHovering(false);
		// 			}}
		// 		>
		// 			<EmailIcon fontSize="large" className="material-icon">
		// 				Filled
		// 			</EmailIcon>
		// 		</Grid>

		// 		<Grid
		// 			item
		// 			sm={1}
		// 			id="email-icon"
		// 			onMouseOver={() => {
		// 				setTodayIsHovering(true);
		// 			}}
		// 			onMouseOut={() => {
		// 				setTodayIsHovering(false);
		// 			}}
		// 		>
		// 			<TodayIcon fontSize="large" className="material-icon">
		// 				Filled
		// 			</TodayIcon>
		// 		</Grid>

		// 		<Grid
		// 			item
		// 			sm={1}
		// 			id="email-icon"
		// 			onMouseOver={() => {
		// 				setAddressHovering(true);
		// 			}}
		// 			onMouseOut={() => {
		// 				setAddressHovering(false);
		// 			}}
		// 		>
		// 			<PersonPinIcon fontSize="large" className="material-icon">
		// 				Filled
		// 			</PersonPinIcon>
		// 		</Grid>
		// 		<Grid
		// 			item
		// 			sm={1}
		// 			id="email-icon"
		// 			onMouseOver={() => {
		// 				setPhoneHovering(true);
		// 			}}
		// 			onMouseOut={() => {
		// 				setPhoneHovering(false);
		// 			}}
		// 		>
		// 			<PhoneIcon fontSize="large" className="material-icon">
		// 				Filled
		// 			</PhoneIcon>
		// 		</Grid>
		// 		<Grid
		// 			item
		// 			sm={1}
		// 			id="email-icon"
		// 			onMouseOver={() => {
		// 				setLockHovering(true);
		// 			}}
		// 			onMouseOut={() => {
		// 				setLockHovering(false);
		// 			}}
		// 		>
		// 			<LockIcon fontSize="large" className="material-icon">
		// 				Filled
		// 			</LockIcon>
		// 		</Grid>
		// 	</Grid>
		// </div>
	);
};

export default RandomUser;
