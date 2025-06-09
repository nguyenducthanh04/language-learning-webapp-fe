import HeaderHome from "../../headers/Home/header_home";
function LayoutHome({children}) {
    return (
        <>
        <HeaderHome/>
        <main>{children}</main>
        </>
    )
}
export default LayoutHome;