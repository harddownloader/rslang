/*!

 =========================================================
 * Material Kit React - v1.9.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260

const transition = {
	transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
}

const containerFluid = {
	paddingRight: '15px',
	paddingLeft: '15px',
	marginRight: 'auto',
	marginLeft: 'auto',
	width: '100%',
}
const container = {
	...containerFluid,
	'@media (min-width: 576px)': {
		maxWidth: '540px',
	},
	'@media (min-width: 768px)': {
		maxWidth: '720px',
	},
	'@media (min-width: 992px)': {
		maxWidth: '960px',
	},
	'@media (min-width: 1200px)': {
		maxWidth: '1140px',
	},
}

// const primaryColor = '#9c27b0'
// const warningColor = '#ff9800'
// const dangerColor = '#f44336'
// const successColor = '#4caf50'
// const infoColor = '#00acc1'
// const roseColor = '#e91e63'
// const grayColor = '#999999'

const primaryColor = '#393838'
const primaryColorDarken = '#2E2D2D'
const secondaryColor = '#f6ea09'
const secondaryColorDarken = '#F6C309'
const warningColor = '#ff9800'
const warningColorDarken = '#FF5600'
const dangerColor = '#f44336'
const dangerColorDarken = ''
const successColor = '#4caf50'
const successColorDarken = ''
const infoColor = '#00acc1'
const infoColorDarken = ''
const roseColor = '#e91e63'
const roseColorDarken = ''
const grayColor = '#999999'
const grayColorDarken = ''
const grayLight = 'rgba(0, 0, 0, 0.12)'
const grayLight02 = 'rgba(0, 0, 0, 0.2)'
const grayLight014 = 'rgba(0, 0, 0, 0.14)'
const grayLight042 = 'rgba(0, 0, 0, 0.42)'
const black087 = 'rgba(0, 0, 0, 0.87)'

const whiteColor = '#fff'
const slateGray = '#3C4858'
const honeydew = '#eeeeee'
const luminescentBrightOrange = '#ffa726'
const darkOrange = '#fb8c00'
const fern = '#66bb6a'
const darkOrchid02 = 'rgba(156, 39, 176, 0.2)'
const darkOrchid028 = 'rgba(156, 39, 176, 0.28)'
const thrushEggs02 = 'rgba(0, 188, 212, 0.2)'
const thrushEggs028 = 'rgba(0, 188, 212, 0.28)'
const harlequin = '#43a047'
const harlequin02 = 'rgba(76, 175, 80, 0.2)'
const harlequin028 = 'rgba(76, 175, 80, 0.28)'
const signalOrange02 = 'rgba(255, 152, 0, 0.2)'
const signalOrange028 = 'rgba(255, 152, 0, 0.28)'
const chineseRedCinnabar02 = 'rgba(244, 67, 54, 0.2)'
const chineseRedCinnabar028 = 'rgba(244, 67, 54, 0.28)'
const colorOfVanity04 = 'rgba(233, 30, 99, 0.4)'
const redOrangeKraiola = '#ef5350'
const chineseRedCinnabar = '#e53935'
const wanderingThrushEggs = '#26c6da'
const lightCherry = '#ec407a'
const georgianPink = '#d81b60'

const boxShadow = {
	boxShadow:
		`0 10px 30px -12px ${grayLight042}, 0 4px 25px 0px ${grayLight}, 0 8px 10px -5px ${grayLight02}`,
}

const card = {
	display: 'inline-block',
	position: 'relative',
	width: '100%',
	margin: '25px 0',
	boxShadow: `0 1px 4px 0 ${grayLight014}`,
	// borderRadius: '3px',
	color: black087,
	background: whiteColor,
}

const defaultFont = {
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	fontWeight: '300',
	lineHeight: '1.5em',
}


const primaryBoxShadow = {
	boxShadow:
		`0 12px 20px -10px ${darkOrchid028}, 0 4px 20px 0px ${grayLight}, 0 7px 8px -5px ${darkOrchid02}`,
}
const infoBoxShadow = {
	boxShadow:
		`0 12px 20px -10px ${thrushEggs028}, 0 4px 20px 0px ${grayLight}, 0 7px 8px -5px ${thrushEggs02}`,
}
const successBoxShadow = {
	boxShadow:
		`0 12px 20px -10px ${harlequin028}, 0 4px 20px 0px ${grayLight}, 0 7px 8px -5px ${harlequin02}`,
}
const warningBoxShadow = {
	boxShadow:
		`0 12px 20px -10px ${signalOrange028}, 0 4px 20px 0px ${grayLight}, 0 7px 8px -5px ${signalOrange02}`,
}
const dangerBoxShadow = {
	boxShadow:
		`0 12px 20px -10px ${chineseRedCinnabar028}, 0 4px 20px 0px ${grayLight}, 0 7px 8px -5px ${chineseRedCinnabar02}`,
}
const roseBoxShadow = {
	boxShadow:
		`0 4px 20px 0px ${grayLight014}, 0 7px 10px -5px ${colorOfVanity04}`,
}
const warningCardHeader = {
	color: whiteColor,
	background: `linear-gradient(60deg, ${luminescentBrightOrange}, ${darkOrange})`,
	...warningBoxShadow,
}
const successCardHeader = {
	color: whiteColor,
	background: `linear-gradient(60deg, ${fern}, ${harlequin})`,
	...successBoxShadow,
}
const dangerCardHeader = {
	color: whiteColor,
	background: `linear-gradient(60deg, ${redOrangeKraiola}, ${chineseRedCinnabar})`,
	...dangerBoxShadow,
}
const infoCardHeader = {
	color: whiteColor,
	background: `linear-gradient(60deg, ${wanderingThrushEggs}, ${infoColor})`,
	...infoBoxShadow,
}
const primaryCardHeader = {
	color: whiteColor,
	background: `linear-gradient(60deg, ${primaryColor}, ${primaryColorDarken})`,
	...primaryBoxShadow,
}
const roseCardHeader = {
	color: whiteColor,
	background: `linear-gradient(60deg, ${lightCherry}, ${georgianPink})`,
	...roseBoxShadow,
}
const cardActions = {
	margin: '0 20px 10px',
	paddingTop: '10px',
	borderTop: `1px solid ${honeydew}`,
	height: 'auto',
	...defaultFont,
}

const cardHeader = {
	margin: '-30px 15px 0',
	// borderRadius: '3px',
	padding: '15px',
}

const defaultBoxShadow = {
	border: '0',
	// borderRadius: '3px',
	boxShadow:
		`0 10px 20px -12px ${grayLight042}, 0 3px 20px 0px ${grayLight}, 0 8px 10px -5px ${grayLight02}`,
	padding: '10px 0',
	transition: 'all 150ms ease 0s',
}

const title = {
	color: `${slateGray}`,
	margin: '1.75rem 0 0.875rem',
	textDecoration: 'none',
	fontWeight: '700',
	fontFamily: `"Roboto Slab", "Times New Roman", serif`,
}

const cardTitle = {
	...title,
	marginTop: '.625rem',
}

const cardLink = {
	'& + $cardLink': {
		marginLeft: '1.25rem',
	},
}

const cardSubtitle = {
	marginBottom: '0',
	marginTop: '-.375rem',
}

export {
	// variables
	drawerWidth,
	transition,
	container,
	containerFluid,
	boxShadow,
	card,
	defaultFont,
	primaryColor,
	primaryColorDarken,
	secondaryColor,
	secondaryColorDarken,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
	grayColor,
	primaryBoxShadow,
	infoBoxShadow,
	successBoxShadow,
	warningBoxShadow,
	dangerBoxShadow,
	roseBoxShadow,
	warningCardHeader,
	successCardHeader,
	dangerCardHeader,
	infoCardHeader,
	primaryCardHeader,
	roseCardHeader,
	cardActions,
	cardHeader,
	defaultBoxShadow,
	title,
	cardTitle,
	cardLink,
	cardSubtitle,
}
