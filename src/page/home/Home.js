import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/userAction';
import UserCard from '../../component/card/UserCard';
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: {
    flexGrow: 1,
  },
  root: {
    marginTop: 24,
  },
}));

const Home = () => {
  const classes = useStyles();
  const usersInfo = useSelector((state) => state.users.usersInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <Container className={classes.root}>
      <Grid container className={classes.grid} spacing={2}>
        {usersInfo.length > 0 &&
          usersInfo.map((user) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={user.id}>
              <UserCard name={user.name} email={user.email} phone={user.phone} website={user.website} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default memo(Home);
