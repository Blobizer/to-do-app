import styling from '../styles/loginPage.module.css';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/Input/MyInput';

function LoginPage() {
  return (
    <div className={styling.body}>
      <div className={styling.loginContainer}>
        <h2>Login</h2>
        <form>
          <MyInput type="text" placeholder="Username" required />
          <MyInput type="password" placeholder="Password" required />
          <MyButton>Login</MyButton>
        </form>
        <div className={styling.info}>
          <a href="">Cant remember password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
