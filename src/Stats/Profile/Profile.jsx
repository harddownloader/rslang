import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import './profile.scss'

const useStyles = makeStyles({
    icon: {
        width: '120px',
        height: '120px',
        color: '#699e47'
    }
})

const Profile = () => {

    const classes = useStyles();

    const number = 1

    return (
        <>
            <AccountCircleIcon className={classes.icon} />
            <div className='wrapper'>
                <h3>УРОВЕНЬ 1: </h3>
                <span>25%</span><progress max='100' value='25'></progress>
                <p>До следующего уровня вам осталось 20 xp.</p>
            </div>
        </>
    )
}

export default Profile;