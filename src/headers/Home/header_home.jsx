import { useState } from "react";
import "./header_home.scss";
import Logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown  } from '@fortawesome/free-solid-svg-icons';
import LoginModal from "../../components/LoginModal/login_modal";
import RegisterModal from "../../components/RegisterModal/register_modal";
function HeaderHome() {
 const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
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
                    <button className="login" onClick={() => setShowLogin(true)}>Đăng nhập</button>
                </div>
                </div>
        <LoginModal show={showLogin} onClose={() => setShowLogin(false)} onSwitchToRegister={() => { setShowLogin(false); setShowRegister(true); }}/>
        <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} onSwitchToLogin={() => { setShowRegister(false); setShowLogin(true); }}/>
            </header>
        </div>
    )
}
export default HeaderHome;