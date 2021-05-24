import React, { useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
// import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import Lock from '@material-ui/icons/Lock'
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
// utils
// import {loginUser} from '@/utils/apiRequests/sing'

// router
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useLocation,
	useHistory
} from 'react-router-dom'

// styles
import styles from '@/assets/jss/material-kit-react/views/loginPage'
// images
import image from '@/assets/images/material-kit-img/bg7.jpg'

const useStyles = makeStyles(styles)

export default function LoginPage(properties) {
	const [cardAnimaton, setCardAnimation] = useState('cardHidden')
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()
	// console.log('history', history)

	// анимация появления окна
	setTimeout(function () {
		setCardAnimation('')
	}, 700)

	const classes = useStyles()

	// при отправке
	const handleSubmit = async () => {
		console.log('submit event')
		
		if (login.length > 4 && password.length > 4) {
			await loginUser({ email: login, password })
			await history.push("/")
		} else {
			console.error('small login or password')
		}
	}

	// при изменении полей
	const handleChangeLogin = value => {
		console.log(`been changed${value}`)
		setLogin(value)
	}

	const handleChangePassword = value => {
		console.log(`been changed${value}`)
		setPassword(value)
	}

	const { ...rest } = properties

	const loginUser = async user => {
		const rawResponse = await fetch(
			'https://rs-lang-app.herokuapp.com/signin',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			},
		)
		console.log('rawResponse', rawResponse)

		if (rawResponse.status === 200) {
			const content = await rawResponse.json()

			console.log('loginUser', content)
			properties.setUserAuth({
				userId: content.userId,
				token: content.token,
			})

		} else {
			alert('Введите корректные данные')
		}
	}

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
										<h4 className={classes.cardHeaderTitle}>Личный Кабинет</h4>
									</CardHeader>
									<CardBody className={classes.cardBody}>
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
									<CardFooter className={classes.cardFooterLogin}>
										<Button
											color='secondary'
											size='lg'
											onClick={event => handleSubmit()}
											className={classes.authBtn}>
											Войти
										</Button>
										<p className={classes.dividerBottom}>Или</p>
										{/* <Switch location={location}> */}
										{/* <Route exact path={path}> */}
										<Link to='/registration'>
											<Button
												simple
												color='primary'
												size='lg'
												className={classes.authBtn}>
												Создать аккаунт
											</Button>
										</Link>
										{/* <a href='/registration'>
											<Button simple color='primary' size='lg'>
												Создать аккаунт
											</Button>
										</a> */}
										{/* </Route> */}
										{/* </Switch> */}
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
