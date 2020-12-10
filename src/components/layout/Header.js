import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
// import NightsStayIcon from '@material-ui/icons/NightsStay';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// const DarkMode = withStyles((theme) => ({
// 	root: {
// 		width: 42,
// 		height: 26,
// 		padding: 0,
// 		margin: theme.spacing(1),
// 	},
// 	switchBase: {
// 		padding: 1,
// 		color: '#E6E600',
// 		'& + $track': {
// 			backgroundColor: '#AAA',
// 			opacity: 1,
// 			border: '0.5px solid #000000',
// 		},
// 		'&$checked': {
// 			transform: 'translateX(16px)',
// 			color: theme.palette.common.black,
// 			'& + $track': {
// 				backgroundColor: '#7D7D7D',
// 				opacity: 1,
// 				border: '0.5px solid #000000',
// 			},
// 		},
// 		'&$focusVisible $thumb': {
// 			color: '#000000',
// 			border: '0.5px solid #000000',
// 		},
// 	},
// 	thumb: {
// 		width: 24,
// 		height: 24,
// 	},
// 	track: {
// 		borderRadius: 26 / 2,
// 		border: `0.5px solid ${theme.palette.grey[400]}`,
// 		backgroundColor: theme.palette.grey[50],
// 		opacity: 1,
// 		transition: theme.transitions.create(['background-color', 'border']),
// 	},
// 	checked: {},
// 	focusVisible: {},
// }))(({ classes, ...props }) => {
// 	return (
// 		<Switch
// 			focusVisibleClassName={classes.focusVisible}
// 			disableRipple
// 			classes={{
// 				root: classes.root,
// 				switchBase: classes.switchBase,
// 				thumb: classes.thumb,
// 				track: classes.track,
// 				checked: classes.checked,
// 			}}
// 			{...props}
// 		/>
// 	);
// });

const Header = () => {
	return (
		<>
			<div className='header'>
				<img src='light.png' alt='Covid App' />
				{/* <FormGroup row>
					<FormControlLabel
						control={
							<DarkMode
								checkedIcon={<NightsStayIcon />}
								icon={<WbSunnyIcon />}
								checked={darkMode}
								onChange={() => setDarkMode(!darkMode)}
								name='darkMode'
							/>
						}
					/>
				</FormGroup> */}
			</div>
		</>
	);
};

export default Header;
