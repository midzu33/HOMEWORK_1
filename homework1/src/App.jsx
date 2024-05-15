import './App.css'
import {Route , Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import SendPostPage from "./pages/SendPostPage.jsx";
import Layout from './pages/Layout';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="/create" element={<SendPostPage />} />

                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    )
}
export default App;