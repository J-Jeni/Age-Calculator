
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Main from "./main";
import Mess from "./mes";


function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route path="/message" element={<Mess/>}/>
            
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;