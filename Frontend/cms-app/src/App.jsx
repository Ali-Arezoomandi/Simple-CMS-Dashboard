import { useRoutes } from "react-router-dom";
import routes from "./routes";

import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import SideBar from "./components/SideBar/SideBar";

export default function App() {
    let router = useRoutes(routes);

    return (
        <>
            <SideBar />
            <main className="main">
                <Topbar />
                {router}
            </main>
        </>
    );
}
