import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Loader from '@/components/savannah/Loader'
import GameBoard from '@/components/savannah/GameBoard'

const useStyles = makeStyles((theme) => ({
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
        fontSize: '8rem',
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
        marginTop: '4rem',
    },
    option: {
        width: 'available',
        margin: '1rem 1rem',
        fontSize: '3rem',
    },
}))

export default function Game(properties) {
    const classes = useStyles()
    const [words, setWords] = useState()
    const [isError, setError] = useState()
    const difficulty = properties.difficulty
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`https://rs-lang-app.herokuapp.com/words?group=${difficulty}&page=0`)
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
            {isLoaded ? <GameBoard words={words} /> : <Loader />}
        </div>
    )
}

export { useStyles }