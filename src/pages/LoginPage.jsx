import styling from '../styles/loginPage.module.css';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/Input/MyInput';
import { Navigate } from 'react-router';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../redux/slices/auth';

function LoginPage() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all', // Обновляем isValid сразу
    defaultValues: {
      email: 'test@gmail.com',
      password: '12345',
    },
  });

  const onSubmit = async (value) => {
    const data = await dispatch(fetchAuth(value));
    if (!data.payload) {
      alert('Не удалось авторизоваться');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styling.body}>
      <div className={styling.loginContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MyInput
            type="text"
            placeholder="e-mail"
            {...register('email', { required: 'Write e-mail' })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <MyInput
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Write password' })}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <MyButton type="submit">Login</MyButton>
        </form>
        <div className={styling.info}>
          <a href="#">Can't remember password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
