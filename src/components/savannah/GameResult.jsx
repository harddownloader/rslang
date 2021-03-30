import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    result: {
        width: '100%',
        height: '100%',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        justifySelf: 'center',
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'black',
        color: 'yellow',
    },
    result__title: {
        fontSize: '8rem',
        margin: '2rem',
    },
    result__btns: {
        width: '30%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '2rem',
    },
    result__btn: {
        textDecoration: 'none',
        color: 'yellow',
    },
}))

export default function GameResult(properties){
    const classes = useStyles()
    function ShouldLearn(properties){
        return (
            <>
            <p>Pay attention to this word{(properties.incorrect.length > 1) ? 's':''}:</p>
            {properties.incorrect.map(function (item, index){
                return <p key={index}>{item.word.toUpperCase()}</p>
            })}
            </>
        )
    }
    return (
    <div className={classes.result}>
        <h2 className={classes.result__title}>Game over</h2>
        <p>Your best strick of correct answers: {properties.stat.bestStrick}</p>
        <p>Correctly answer{(properties.stat.correct.length > 1) ? 's' : ''}: {properties.stat.correct.length}</p>
        {(properties.stat.incorrect.length > 0) ? <ShouldLearn incorrect={properties.stat.incorrect} /> : undefined}
        <div className={classes.result__btns}>
        <Button variant='contained' color='secondary' className={classes.result__btn}>New game</Button>
        <Button variant='contained' color='secondary' className={classes.result__btn}>
            <Link to='/'>Back to main page</Link>
        </Button>
        </div>
    </div>
    )
}