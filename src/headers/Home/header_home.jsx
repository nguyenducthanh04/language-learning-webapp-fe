import "./header_home.scss";
import Logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown  } from '@fortawesome/free-solid-svg-icons';
function HeaderHome() {
    return (
        <div className="header_home">
            <header className="header">
                <div className="logo_header">
                    <img src={Logo} className="logo_img"></img>
                </div>
                <div className="btn_header">
                   <div className="btn_change_language">
                     <span className="change_language">Tiếng việt</span>
                    <FontAwesomeIcon icon={faCaretDown} className="icon_change"/>
                   </div>
                   <div className="btn_login">
                    <button className="login">Đăng nhập</button>
                </div>
                </div>
                
            </header>
        </div>
    )
}
export default HeaderHome;