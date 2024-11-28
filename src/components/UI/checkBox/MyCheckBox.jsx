import classes from "./MyCheckBox.module.css"

const MyCheckBox = ({children}) => {

  
  return (
    
    <div className={classes.todoContainer}>
    <label>
      <input type="checkbox"></input>
      <span className={classes.customCheckbox}></span>
      <div className={classes.todoText}>{children}</div>
    </label>
    
    </div>
    

  );
};

export default MyCheckBox;
