import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardMedia, ImageList, ImageListItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    flexWrap: 'nowrap',
    alignContent: 'center',
    overflow: 'hidden'
  },
  weather__icon: {
    width: 60,
    height: 60,
    top: 0,
    transform: 'translateY(0%)',
    left: 0,
  },
  day: {
    textAlign: 'center',
    border: "3px solid #ffffff",
    minWidth: '185px',
  },
  info: {
    fontSize: 21,
  }
}));

function Weekly({ weekData }) {
  const classes = useStyles();

  return (
    <CardMedia>

      <ImageList className={classes.gridList} rowHeight="auto" gap={4}>
        {weekData.map((data, idx) => {
          if (idx === 0)
            return null;
          return (
            <ImageListItem key={data.key} cols={0.5} className={classes.day}>
              <Typography className={classes.info} gutterBottom >
                {data.day}
              </Typography>

              <img
                src={`https://openweathermap.org/img/w/${data.icon}.png`}
                alt={data.icon}
                className={classes.weather__icon}
              />
              <Typography gutterBottom className={classes.info}>
                {Math.round(data.hTemp)}°C
              </Typography>
            </ImageListItem>

          )
        }
        )}
      </ImageList>
    </CardMedia>
  );
}

export default Weekly;