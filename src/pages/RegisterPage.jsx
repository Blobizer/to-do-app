import classes from '../styles/registerPage.module.css';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/Input/MyInput';

function RegisterPage() {
  return (
    <div className={classes.body}>
      <div className={classes.RegisterContainer}>
        <h2>Register</h2>
        <form>
          <MyInput type="text" placeholder="e-mail" required />
          <MyInput type="password" placeholder="Password" required />
          <MyButton>Register</MyButton>
        </form>
        <div className={classes.info}>
          <a href="">user license</a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
