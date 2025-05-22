import { ReactFlowProvider } from "@xyflow/react";

import { AuthProvider } from "./Context/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePages";

const App=()=>{
    return(
            <ReactFlowProvider>
                <AuthProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                        </Routes>
                    </Router>
                </AuthProvider>
            </ReactFlowProvider>
    )
}

export default App