import colors from '@/utils/colors'
import savanaImg from '@/assets/images/gamesPage/savana.jpg'
import sprintImg from '@/assets/images/gamesPage/sprint.jpg'
import speakerImg from '@/assets/images/gamesPage/speaker.jpg'
import testGame from '@/assets/images/gamesPage/testGame.jpg'

export default [
	{
		path: 'savanna',
		bg: colors.boxA,
		title: 'Savanna',
		subtitle: 'Саванна',
		img: savanaImg,
	},
	{
		path: 'sprint',
		bg: colors.boxB,
		title: 'Sprint',
		subtitle: 'Спринт',
		img: sprintImg,
	},
	{
		path: 'speaker',
		bg: colors.boxC,
		title: 'Speaker',
		subtitle: 'Аудиовызов',
		img: speakerImg,
	},
	{
		path: 'myGame',
		bg: colors.boxD,
		title: 'My little game',
		subtitle: 'моя маленькая игра',
		img: testGame,
	},
]
