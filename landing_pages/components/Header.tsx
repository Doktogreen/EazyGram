import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Router, useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    right: 0,
    left: 0,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  logoIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#F5BE00",
    marginRight: theme.spacing(1),
  },
  logoText: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  actionButton: {
    marginLeft: theme.spacing(2),
    backgroundColor: "#F5BE00",
    color: "#14172C",
    "&:hover": {
      backgroundColor: "#F5BE00",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const router = useRouter();
  const send = () => {
    router.push('/send')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.logo}>
            <div className={classes.logoIcon} />
            <Typography variant="h6" className={classes.logoText}>
              EazyGram
            </Typography>
          </div>
          <Button className={classes.actionButton}>Send Money</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
