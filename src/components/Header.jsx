import style from "./emotions.module.css";
import Profile from "./Prodile";
import Search from "./Search";
import Logo from "./Logo";

function Header(){
    return(
        <div className={style.outer}>
            <Logo />
            <Search />
            <Profile />
        </div>
    )
}

export default Header;