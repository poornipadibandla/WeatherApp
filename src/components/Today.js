import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    unit__icon: {
        width: 22,
        height: 22,
        alignSelf: 'center',

    },
    unit__icon1: {
        width: 22,
        height: 22,
        alignSelf: 'center',
        fontSize: '15',
    },
    weather__icon: {
        width: 90,
        height: 90,
        Top: 0,
    },
    main: {
        textAlign: 'center',
        minWidth: '185px',
        flexWrap: 'wrap',
    },
    text__left: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
    },
    text__right: {
        alignSelf: 'center',
    },
    span: {
        fontWeight: 'bold',
    },
    info: {
        fontSize: 21,
    }

}));

function Today({ today }) {
    const classes = useStyles();
    return (
        <CardContent>
            <div className={classes.main}>
                <div>
                    <Typography variant="h3" className={classes.info} gutterBottom>
                        Today
                    </Typography>
                    <img src={`https://openweathermap.org/img/w/${today.icon}.png`} alt={today.icon} className={classes.weather__icon} />
                    <Typography variant="h3" >
                        {Math.round(today.temp)}°C
                    </Typography>
                </div>
            </div>
        </CardContent>
    )
}

export default Today
