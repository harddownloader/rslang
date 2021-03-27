import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import heartIcon from '@/assets/images/heart.png'
import { randomRange } from './Savannah'
import Loader from './Loader'
import Timer from './Timer'

const useStyles = makeStyles({
    savannahGame: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    gameStatus: {
        display: 'flex',
        width: '55%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    taskWord: {
        color: 'Black',
        fontWeight: 'bold',
        fontSize: '5rem',
        margin: '2rem',
    },
    timer: {
        marginLeft: '5%',
    },
    attempts: {
        margin: '3rem',
        alignSelf: 'flex-end',
        fontSize: '4rem',
    },
    variableOptions: {
        width: '50%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    option: {
        width: 'available',
        border: 'solid .2rem #f8ee3a',
        padding: '1rem',
        margin: '1rem 1rem',
    },
})

function getOptions(correct, words) {
    const set = new Set()
    set.add(correct)
    do {
        set.add(words[randomRange(20)].wordTranslate)
    } while (set.size < 4)
    console.log(set)
    return Array.from(set).sort(() => Math.random() - 0.5);
}

function GameBoard(properties) {
    const classes = useStyles()
    const level = properties.level
    const word = properties.words[level]
    const options = getOptions(word.wordTranslate, properties.words)  // add other options
    return (
        <>
            <div className={classes.gameStatus}>
                <Timer cls={classes.timer} sec={5} />
                <div className={classes.attempts}>

                </div>
            </div>
            <div className={classes.taskWord}>
                {word.word.toUpperCase()}
            </div>
            <div className={classes.variableOptions}>
                {options.map(function opts(option, index) {
                    return (
                        <div className={classes.option} key={index} >
                            {option.toString().toUpperCase()}
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default function Game(properties) {
    const [attempts, setAttempts] = useState(5)
    const classes = useStyles()
    const [level, setLevel] = useState(0)
    const [words, setWords] = useState()
    const [isError, setError] = useState()

    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch(`https://rs-lang-app.herokuapp.com/words?group=0&page=0`)
            .then(response => response.json())
            .then(
                result => {
                    setWords(result)
                    setIsLoaded(true)
                },
                error => {
                    setError(error)
                    setIsLoaded(true)
                },
            )
    }, [])
    return (
        <div className={classes.savannahGame}>
            {isError ? isError.message : undefined}
            {isLoaded ? <GameBoard words={words} level={level} /> : <Loader />}
        </div>
    )
}