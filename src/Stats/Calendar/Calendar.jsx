import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    calendar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function Calend() {

    const classes = useStyles();

    const [value, onChange] = useState(new Date());

    return (
        <div className={classes.calendar}>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default Calend;