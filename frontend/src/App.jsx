import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Customer from "./pages/Customer/Customer";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                
				<Route path="/customer" element={<Customer />}/>
                    
				<Route path="/order" element={<Order />}/>
            </Routes>
        </Router>
    );
}

export default App;
