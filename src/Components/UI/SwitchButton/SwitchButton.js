import classes from "./SwitchButton.module.css";
import { useContext } from "react";
import themeContext from "../../../store/theme-context";

const SwitchButton = (props) => {
  const ctx = useContext(themeContext);
  const switchClass = [`${classes.switcher} ${ctx.tv && classes.clicked}`];
  return (
    <div className={classes.box}>
      <div className={classes.switch} onClick={ctx.onChangeType}>
        <div className={switchClass}></div>
        <span>TV</span>
        <span>Movie</span>
      </div>
    </div>
  );
};

export default SwitchButton;
