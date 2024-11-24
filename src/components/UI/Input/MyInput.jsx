import classes from "./MyInput.module.css"

const MyInput = (props, ref) => {

  
  return (
     <input className={classes.myInput} {...props} />
  );
};

export default MyInput;
