import React, {useEffect} from 'react'

import {words} from '@/components/Sprint/words'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
wordContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3.5rem',
    color: 'yellow'
},
buttonBlock:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '300px'
}
})

// let makeWords = () => {
// 	const elements = words().names.map(item => {
// 		return <li> {item.word} </li>
// 	})
// }
console.log(words)
const MainGame = () => {
    const classes = useStyles()
    useEffect(()=>{
        fetch('https://rs-lang-app.herokuapp.com/words')
        .then(response => response.json())
        .then(data => console.log(data))
    })

    return (
        <div>
            <div className={classes.wordContainer}>
                <span>Word</span>
            </div>
            <div className={classes.buttonBlock}>
                <div className={classes.buttonTrue}>
                    <button>True</button>
                    </div>
                <div className={classes.buttonFalse}>
                    <button>False</button>
                </div>
            </div>
        </div>
    )
}

export default MainGame