import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: "2rem",
    border: "3px solid #eee",
    borderRadius: 'var(--sm-border-radius)',
    cursor: 'pointer',
    backgroundColor: 'var(--bg-color-accent)',
    transition: 'all 0.25s',
    '&:hover, &:active': {
      backgroundColor: 'var(--hover-color)',
    },
  },

  icon: {
    width: '4.2rem',
    height: '4.2rem',
    marginRight: '1.4rem',
  },
