import {Outlet} from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard.js";
import {BigSidebar, Navbar, SmallSidebar} from "../components/index.js";
import {createContext, useContext, useState} from "react";

const DashboardContext = createContext()

const DashboardLayout = () => {
    // temp
    const user = {
        name: 'John Doe'
    }
    const [showSidebar, setShowSidebar] = useState(false)
    const [isDarkTheme, setisDarkTheme] = useState(false)


    const toggleDarkTheme = () => {
        console.log("Toggle dark theme")
    }

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const logutUser = async () => {
        console.log("Logout user")
    };

    return (
        <DashboardContext.Provider value={{
            user,
            showSidebar,
            isDarkTheme,
            toggleSidebar,
            toggleDarkTheme,
            logutUser
        }}>
        <Wrapper>
            <main className='dashboard'>
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <Navbar />
                    <div className='dashboard-page'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout