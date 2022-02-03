import classes from './Header.module.css'

const Header = () => {
    return <header className={classes.title}>
        <h3>logo</h3>
        <h3 className={classes.link}>Login</h3>
        <h3 className={classes.link}>Sign Up</h3>
    </header>
}   

export default Header;