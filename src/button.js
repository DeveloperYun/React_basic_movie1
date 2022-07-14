import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({text}){
    return (
     <button className={styles.btn}>{text}</button>
    )
}

Button.propTypes={
    text: PropTypes.string.isRequired,
}
export default Button; // App.js 에서 import 할 수 있게하기 위함