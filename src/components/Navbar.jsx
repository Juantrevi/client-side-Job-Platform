import Wrapper from "../assets/wrappers/Navbar.js";
import {FaAlignLeft} from "react-icons/fa";
import Logo from "./Logo.jsx";
import {useDashboardContext} from "../pages/DashboardLayout.jsx";

const Navbar = () => {
    const {toggleSidebar} = useDashboardContext()

    return (
        <Wrapper>
            <div className='nav-center'>
                <button type='button' className='toggle-btn' onClick={toggleSidebar}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h4 className='logo-text'>dashboard</h4>
                </div>
                <div className='btn-container'>
                    toggle/logout
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar