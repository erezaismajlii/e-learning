export const formStyle = () => ({
  root: {
    padding: '1.5rem 4.0rem',
    boxShadow: 'var(--box-shadow)',
    borderRadius: 'var(--border-radius)',
    width: '35rem',
    '& > *': {
      marginTop: '0.8rem',
      marginBottom: '0.8rem',
    },
  },

  title: {
    fontSize: '1.8rem',
    fontWeight:'400px',
  },
  
  forgotPw: {
    color: 'var(--title-color)',
    opacity: 0.65,
    fontWeight: 500,
    fontSize: '1.4rem',
    textAlign: 'right',
  },

  icon: {
    fontSize: '1.8rem',
    color: 'var(--grey)',
    cursor: 'pointer',
  }
});
