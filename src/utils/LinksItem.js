import gameIco from '@/assets/images/gameImg.jpg'
import mainIco from '@/assets/images/mainIco.jpg'
import statIco from '@/assets/images/statIco.jpg'
import vocIco from '@/assets/images/vocImage.jpg'

export default [
	{
		path: '/',
		bg: '#363538',
		title: 'Main',
		subtitle: 'Главная страница',
		img: mainIco,
	},
	{
		path: '/vocabulary',
		bg: '#303032',
		title: 'Vocabulary',
		subtitle: 'Cловарь',
		img: vocIco,
	},
	{
		path: '/games',
		bg: '#28282a',
		title: 'Games',
		subtitle: 'Игры',
		img: gameIco,
	},
	{
		path: '/statistics',
		bg: '#24282a',
		title: 'Statistics',
		subtitle: 'Статистика',
		img: statIco,
	},
]
