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
import {loginUser} from '@/utils/apiRequests/sign'
import {setUserWords} from '@/utils/apiRequests/userWords'
import {setStatistics} from '@/utils/apiRequests/statistics'
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

	// получить тек. дату
	const getCurrentDate = () => {
		const dateObj = new Date()
		const month = dateObj.getUTCMonth() + 1
		const day = dateObj.getUTCDate()
		const year = dateObj.getUTCFullYear()
		const newdate = year + "-" + month + "-" + day
		return newdate
	}

	// при отправке
	const handleSubmit = async () => {
		console.log('submit event')
		if (login.length > 4 && password.length > 4 && name.length > 1) {
			await createUser({ email: login, password: password })

			const loggedUser = await loginUser({ email: login, password: password })
			console.log('loggedUser', loggedUser)

			// берем слова которые поставим в словарь
			const newWords = await getAggregatedWords(
				loggedUser.userId,
				loggedUser.token,
				0,
				false,
				60,
				false
			)
			console.log('newWords', newWords)
			
			// ставим слова в словарь(чтобы быил доступны мини игры)
			for(let i = 0; i<newWords[0].paginatedResults.length; i++) {
				setUserWords(
					loggedUser.userId,
					loggedUser.token,
					newWords[0].paginatedResults[i]._id,
					"easy",
					{
						// сколько раз пользователь правильно ответил на слово в мини играх
						correct_answers: 0,
						uncorrect_answers: 0,
						games: {
							'savannah': {
								learned: false
							},
							'sprint': {
								learned: false
							},
							'speaker': {
								learned: false
							},
							'my_game': {
								learned: false
							}
						}
					}
				)
			}

			// ставим 0ю статистику
			await setStatistics(
				loggedUser.userId,
				loggedUser.token,
				0,
				{
					level: 0,
					exp: 0,
					days: 0,
					dates: {
						dateItems: [
							{
								date: getCurrentDate(),
								countWord: 0,
								answerTrue: 0,
								games: {
									savana: {
										countAnswer: 0,
										trueAnswer: 0,
										seriesAnswer: 0
									},
									audio: {
										countAnswer: 0,
										trueAnswer: 0,
										seriesAnswer: 0
									},
									myGame: {
										countAnswer: 0,
										trueAnswer: 0,
										seriesAnswer: 0
									},
									sprint: {
										countAnswer: 0,
										trueAnswer: 0,
										seriesAnswer: 0
									}
								}
							}
						]
					}
				}
			)
			
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

	const handleChangeValidatePassword = value => {
		{
			// Validate lowercase letters
			const lowerCaseLetters = /[a-z]/g;
			// if(value.match(lowerCaseLetters)) {
			// 	console.log('  валиден')
			// 	// letter.classList.remove("invalid");
			// 	// letter.classList.add("valid");
			// } else {
			// 	console.log('  не валиден')
			// 	// letter.classList.remove("valid");
			// 	// letter.classList.add("invalid");
			// }
		
			// Validate capital letters
			// const upperCaseLetters = /[A-Z]/g;
			// if(value.match(upperCaseLetters)) {
			// 	console.log('  валиден')
			// 	// capital.classList.remove("invalid");
			// 	// capital.classList.add("valid");
			// } else {
			// 	console.log('  не валиден')
			// 	// capital.classList.remove("valid");
			// 	// capital.classList.add("invalid");
			// }
		
			// Validate numbers
			const numbers = /[0-9]/g;
			// if(value.match(numbers)) {
			// 	console.log('  валиден')
			// 	// number.classList.remove("invalid");
			// 	// number.classList.add("valid");
			// } else {
			// 	console.log('  не валиден')
			// 	// number.classList.remove("valid");
			// 	// number.classList.add("invalid");
			// }
		
			// // Validate length
			// if(value.length >= 8) {
			// 	console.log('  валиден')
			// 	// length.classList.remove("invalid");
			// 	// length.classList.add("valid");
			// } else {
			// 	console.log('  не валиден')
			// 	// length.classList.remove("valid");
			// 	// length.classList.add("invalid");
			// }

			if(
				value.match(lowerCaseLetters) &&
				value.match(numbers) &&
				value.length >= 8
			) {
				console.log('password валиден')
				setPassword(value)
			} else {
				console.log('password не валиден')
				setPassword('')
			}
		}
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
											labelText='Пароль(должен содержать буквы и цифры, и быть более 8 символов)'
											id='pass'
											onChangeEvent={handleChangeValidatePassword}
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
