import HeaderHome from "../../headers/Home/header_home";
import Footer from "../Footer/footer";
function LayoutHome({children}) {
    return (
        <>
        <HeaderHome/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}
export default LayoutHome;