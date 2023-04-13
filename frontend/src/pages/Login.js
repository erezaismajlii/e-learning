const schema = yup.object().shape({
  email: yup.string().required("Email is empty").email("Invalid email"),
  password: yup
    .string()
    .required("Password is blank")
    .min(6, `Password minimum 6 characters`),
});

function LoginPage() {
  useTitle("Login");
  useCloseNavigation();

  const { isAuth, role } = useSelector((state) => state.authReducer);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = makeStyles(formStyle)();
  const [visiblePw, setVisiblePw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    try {
      setLoading(true);
      const res = await userApi.login(user.email, user.password);
      dispatch(setMessage(res.data.message, "success"));
      setTimeout(() => {
        window.location.replace("/home");
      }, UX.DELAY_TIME);
    } catch (error) {
      dispatch(setMessage(error.response?.data?.message, "error"));
      setLoading(false);
    }
  };
