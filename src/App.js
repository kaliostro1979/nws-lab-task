import Images from "./components/Images";
import Sidebar from "./components/Sidebar";
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";


function App() {

    return (
        <div className="App">
            <div className={"Container"}>
                <Sidebar/>
                <Layout>
                    <Routes>
                        <Route path={'/'}>
                            <Route path={':id'} element={<Images/>}/>
                        </Route>
                    </Routes>
                </Layout>
            </div>
        </div>
    );
}

export default App;
