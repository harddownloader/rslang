import React, { useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
// import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import Lock from '@material-ui/icons/Lock'
import People from '@material-ui/icons/People'
// core components
import Header from '@/components/header'
import Footer from '@/components/Footer/Footer'
import GridContainer from '@/components/Grid/GridContainer'
import GridItem from '@/components/Grid/GridItem'
import Button from '@/components/CustomButtons/Button'
import Card from '@/components/Card/Card'
import CardBody from '@/components/Card/CardBody'
import CardHeader from '@/components/Card/CardHeader'
import CardFooter from '@/components/Card/CardFooter'
import CustomInput from '@/components/CustomInput/CustomInput'
import Dropzone from '@/components/Dropzone'
// utils
import {getAggregatedWords} from '@/utils/apiRequests/aggregatedWords'
import {validateEmail} from '@/utils/validate'
// styles
import styles from '@/assets/jss/material-kit-react/views/loginPage'
// images
import image from '@/assets/images/material-kit-img/bg7.jpg'

const useStyles = makeStyles(styles)

export default function RegistrationPage(properties) {
	const createUser = async user => {
		const rawResponse = await fetch('https://rs-lang-app.herokuapp.com/users', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})

		if (rawResponse.status === 200) {
			const content = await rawResponse.json()

			console.log('loginUser', content)
			const newWords = getAggregatedWords(
				content.userId,
				content.token,
				0,
				false,
				60,
				false
			)
			console.log('newWords', newWords)
			// window.location.replace('/')
		} else {
			alert('Введите корректные данные')
		}
	}

	const [cardAnimaton, setCardAnimation] = useState('cardHidden')
	const [name, setName] = useState('')
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	setTimeout(function () {
		setCardAnimation('')
	}, 700)

	const classes = useStyles()

	// при отправке
	const handleSubmit = () => {
		console.log('submit event')
		if (login.length > 4 && password.length > 4 && name.length > 1) {
			createUser({ email: login, password })
		} else {
			console.error('small login or password')
			alert('вы заполнили не все поля')
		}
	}

	// при изменении полей
	const handleChangeName = value => {
		// console.log('been changed' + val)
		setName(value)
	}

	const handleChangeLogin = value => {
		// console.log('been changed' + val)
		if(validateEmail(value)) {
			setLogin(value)
		} else {
			setLogin('')
			console.log('email не валиден')
		}
	}

	const handleChangePassword = value => {
		// console.log('been changed' + val)
		setPassword(value)
	}

	const { ...rest } = properties

	return (
		<div>
			<Header />
			<div
				className={classes.pageHeader}
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'top center',
				}}>
				<div className={classes.container}>
					<GridContainer justify='center'>
						<GridItem xs={12} sm={12} md={4}>
							<Card className={classes[cardAnimaton]}>
								<form className={classes.form}>
									<CardHeader color='primary' className={classes.cardHeader}>
										<h4 className={classes.cardHeaderTitle}>Зарегистрироваться</h4>
									</CardHeader>
									<CardBody className={classes.cardBody}>
										<Dropzone />
										<CustomInput
											labelText='Имя...'
											id='first'
											onChangeEvent={handleChangeName}
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												type: 'text',
												endAdornment: (
													<InputAdornment position='end'>
														<People className={classes.inputIconsColor} />
													</InputAdornment>
												),
											}}
										/>
										<CustomInput
											labelText='Email...'
											id='email'
											onChangeEvent={handleChangeLogin}
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												type: 'email',
												endAdornment: (
													<InputAdornment position='end'>
														<Email className={classes.inputIconsColor} />
													</InputAdornment>
												),
											}}
										/>
										<CustomInput
											labelText='Пароль'
											id='pass'
											onChangeEvent={handleChangePassword}
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												type: 'password',
												endAdornment: (
													<InputAdornment position='end'>
														<Lock className={classes.inputIconsColor} />
													</InputAdornment>
												),
												autoComplete: 'off',
											}}
										/>
									</CardBody>
									<CardFooter className={classes.cardFooterRegistration}>
										<Button
											color='secondary'
											size='lg'
											onClick={event => handleSubmit()}
											className={classes.authBtn}
										>
											Создать аккаунт
										</Button>
									</CardFooter>
								</form>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
				<Footer whiteFont />
			</div>
		</div>
	)
}
