function NavigationAdminBox({ to, imgUrl, title, subTitle }) {
  const classes = useStyle();
  return (
    <Link to={to} className={`${classes.root} flex-center--ver`}>
      <img className={classes.icon} src={imgUrl} alt="Icon" />
      <div>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.subTitle}>{subTitle}</p>
      </div>
    </Link>
  );
}

NavigationAdminBox.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  subTitle: PropTypes.string,
};

NavigationAdminBox.defaultProps = {
  imgUrl: '',
  title: '',
  to: '',
  subTitle: '',
};

export default NavigationAdminBox;
