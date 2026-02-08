import{ useState ,useEffect} from "react"
import DashboardLayouts from "./layouts/DashboardLayouts";
import { BrowserRouter,Route,Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import './App.css'
function App(){
  const [IsLoggedIn , setIsLoggedIn] = useState(() => {
    const savedLoginStatus = localStorage.getItem("isLoggedIn");
    return savedLoginStatus === "true";
  })
   useEffect(() => {
    localStorage.setItem("isLoggedIn", IsLoggedIn);
  }, [IsLoggedIn]);

  return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={ IsLoggedIn ?<DashboardLayouts setIsLoggedIn={setIsLoggedIn}/> : <Navigate to="/Login"/> } />
        
      </Routes>
     
      </BrowserRouter>
     

    
  )
}
export default App;