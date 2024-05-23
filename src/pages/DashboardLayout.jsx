import {Outlet} from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard.js";
import {BigSidebar, Navbar, SmallSidebar} from "../components/index.js";

const DashboardLayout = () => {
    return (
        <Wrapper>
            <main className='dashboard'>
                <SmallSidebar/>
                <BigSidebar/>
                <div>
                    <Navbar/>
                    <div className='dashboard-page'>
                        <Outlet/>
                    </div>
                </div>
            </main>
        </Wrapper>
    )
}

export default DashboardLayout