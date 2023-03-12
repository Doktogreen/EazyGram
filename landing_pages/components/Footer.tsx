import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(4),
      position: 'sticky',
      bottom: 0,
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, #fff 20%, transparent 20%)',
        backgroundSize: '50px 50px',
        zIndex: -1,
        transform: 'translateY(-50%)',
        animation: '$animBg 4s linear infinite',
      },
    },
    '@keyframes animBg': {
        '0%': {
            transform: 'translateY(-50%)',
        },
        '50%': {
            transform: 'translateY(50%)',
        },
        '100%': {
            transform: 'translateY(-50%)',
        },
    },
    link: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      marginLeft: theme.spacing(2),
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }),
);

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classNames(classes.root)}>
      <Typography variant="body2" align="center">
        © 2023 Skiltime
      </Typography>
      <Typography variant="body2" align="center">
        From{''}
        <Link
          href="https://lorgarithm.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.link)}
        >
          Lorgarithm Inc.
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
