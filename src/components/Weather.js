import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Today from './Today';
import Weekly from './Weekly'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  section: {
    paddingTop: 5,
    borderRadius: 10,
    boxShadow: 8,
    backgroundColor: 'rgba(232, 246, 244,0.1)',
    border: "5px solid #ffffff"
  },
}));

function Weather({ today, weekly }) {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12}>
          <Card className={classes.section}>
            <Today today={today} />
            <Weekly weekData={weekly} />
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
export default Weather