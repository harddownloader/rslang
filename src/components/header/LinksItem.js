import gameIco from '@/assets/images/gameImg.jpg'
import mainIco from '@/assets/images/mainIco.jpg'
import statIco from '@/assets/images/statIco.jpg'
import vocIco from '@/assets/images/vocImage.jpg'
import colors from '@/utils/colors'

export default [
	{
		path: '/',
		bg: colors.boxA,
		title: 'Main',
		subtitle: 'Главная страница',
		img: mainIco,
	},
	{
		path: '/electro-book',
		bg: colors.boxB,
		title: 'Vocabulary',
		subtitle: 'Электронный учебник',
		img: vocIco,
	},
	{
		path: '/games',
		bg: colors.boxC,
		title: 'Games',
		subtitle: 'Игры',
		img: gameIco,
	},
	{
		path: '/statistics',
		bg: colors.boxD,
		title: 'Statistics',
		subtitle: 'Статистика',
		img: statIco,
	},
]
