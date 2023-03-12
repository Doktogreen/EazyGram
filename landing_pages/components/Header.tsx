import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, IconButton, makeStyles, Tooltip, Switch, Button } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import AvatarLogo from './AvatarLogo';
import DownloadButton from './DownloadButton';
import classNames from 'classnames';

const useStyles = makeStyles((theme: { 
  palette: { type: string; secondary: { main: any; }; text: { primary: any; }; }; spacing: (arg0: number) => any; }) => ({
  appBar: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.main : '#fcf5ebcc', 
    color: theme.palette.text.primary,
    position: 'sticky',
    top: 0,
    boxShadow: '0px 0px 0px -1px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 1px 0px 0px rgb(0 0 0 / 12%) !important'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoButton: {
    display: 'flex',
    alignItems: 'center'
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  socialIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: theme.palette.type === 'dark' ? '#1874f4' : '#000',
  },
  button: {
    marginLeft: theme.spacing(2),
    color: theme.palette.type === 'dark' ? '#fff' : '#000', // set color for light and dark themes
    backgroundColor: theme.palette.type === 'dark' ? '#1874f4' : '#f5f5f5', // set background color for light and dark themes
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark' ? '#1874f4' : '#dbdbdb', // set hover background color for light and dark themes
    },
  },
}));

const Header = ({toggleTheme, themeMode}) => {
  const classes = useStyles();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const goToDownloadPage = () => {
    console.log(router);
    router.push('/download')
  }
  return (
    <AppBar position="static" className={classNames(classes.appBar)}>
      <Toolbar className={classNames(classes.toolbar)}>
        <Link href="/" passHref>
          <IconButton className={classNames(classes.logoButton)} edge="start" color="inherit" aria-label="Home">
            <AvatarLogo imageUrl="https://res.cloudinary.com/skiltime/image/upload/v1609139208/SKILTIME6_rnh6qs.png" altText="Profile Image" />
            <img src='https://res.cloudinary.com/skiltime/image/upload/v1678319602/SKILTIME1_a5mcat_1_lt38x8.png' alt="Logo" width="97" height="20" />
          </IconButton>
        </Link>
        <div className={classNames(classes.socialLinks)}>
        <div>
          <DownloadButton label="Download" onClick={() => goToDownloadPage()} />
        </div>
          <Tooltip title="Instagram Login">
            <IconButton
              aria-label="Instagram"
              className={classNames(classes.socialIcon)}
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Twitter Login">
            <IconButton
              aria-label="Twitter"
              className={classNames(classes.socialIcon)}
              component="a"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener"
            >
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook Login">
            <IconButton
              aria-label="Facebook"
              className={classNames(classes.socialIcon)}
              component="a"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn Login">
            <IconButton
              aria-label="LinkedIn"
              className={classNames(classes.socialIcon)}
              component="a"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Web Login">
            <IconButton
              // onClick={''}
              aria-label="Web"
              className={classNames(classes.socialIcon)}
              component="a"
              href="/signup"
              rel="noopener"
            >
              <WebIcon />
            </IconButton>
          </Tooltip>
          
          <IconButton onClick={toggleTheme}>
            {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
