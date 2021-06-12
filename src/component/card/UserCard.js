import React from 'react';
import { makeStyles, Card, CardContent, Typography, Avatar, Box } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },
  name: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});

const UserCard = ({ name, email, phone, website }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Box className={classes.name}>
          <Avatar>
            <PersonIcon />
          </Avatar>
          <Typography color='textSecondary' gutterBottom>
            {name}
          </Typography>
        </Box>

        <Typography variant='body2'>{`Email : ${email}`}</Typography>
        <Typography variant='body2'>{`Phone : ${phone}`}</Typography>
        <Typography variant='body2'>{`Site : ${website}`}</Typography>
      </CardContent>
    </Card>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default UserCard;
