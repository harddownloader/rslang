import React, {useState} from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
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
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		if (rawResponse.status === 200) {
			const content = await rawResponse.json()
	
			console.log('loginUser', content)
			window.location.replace("/");
		} else {
			alert("Введите корректные данные")
		}
	};


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
			createUser({ "email": login, "password": password })
		} else {
			console.error('small login or password')
			alert("вы заполнили не все поля")
		}
	}

	// при изменении полей
	const handleChangeName = (val) => {
		// console.log('been changed' + val)
		setName(val)
	}

	const handleChangeLogin = (val) => {
		// console.log('been changed' + val)
		setLogin(val)
	}

	const handleChangePassword = (val) => {
		// console.log('been changed' + val)
		setPassword(val)
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
										<h4>Зарегистрироваться</h4>
									</CardHeader>
									<CardBody>
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
														<Icon className={classes.inputIconsColor}>
															lock_outline
														</Icon>
													</InputAdornment>
												),
												autoComplete: 'off',
											}}
										/>
									</CardBody>
									<CardFooter className={classes.cardFooterRegistration}>
										<Button color='secondary' size='lg' onClick={event => handleSubmit()}>
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
