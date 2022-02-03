import classes from './Button.module.css'

const Button = props => {
    const validation = props.valid.email === true && props.valid.password === true && props.valid.checkbox === true ? classes.blue : '';
    return <button className={`${classes.btn} ${validation}`}>{props.children}</button>
}

export default Button;