import Logo from "../../Icons/logo.svg";

function Logotype({onclick}) {
    return <div onClick={onclick} style={{ minWidth:"66px", width:"100%",cursor:"pointer"}}><a href="#"><img src={Logo} alt="logo"/></a></div>
}

export default Logotype