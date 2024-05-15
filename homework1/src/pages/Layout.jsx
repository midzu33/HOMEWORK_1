import { Outlet } from 'react-router-dom';
import Header from "../components/Header.jsx";

const Layout = () => {
    return (
        <div>
            <header> <Header /> </header>
            <main> <Outlet /> </main>
            <footer>HOMEWORK1</footer>
        </div>
    );
};
export default Layout;