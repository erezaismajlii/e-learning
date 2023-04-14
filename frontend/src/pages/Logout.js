function LogoutPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authReducer);

  useEffect(() => {

    (async function () {
      try {
        // const apiRes = await userApi.logout();
        // if (apiRes.status === 200) {
          dispatch(logout());
          dispatch(setMessage('Logout successfully.', 'success'))
          window.location.replace('/home');
          // setTimeout(() => {
          
          // }, UX.DELAY_TIME);
      //  }
      } catch (error) {
        dispatch(setMessage(error.response.data.message, 'error'));
      }
    })();

    return () => {};
  }, []);

  return <>{isAuth && <GlobalLoading title="Logging out ..." />}</>;
}

export default LogoutPage;
