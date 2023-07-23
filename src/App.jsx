import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HeaderContainer from "./components/containers/HeaderContainer";
import FooterContainer from "./components/containers/FooterContainer";
import "./styles/App.css";
import { LOCATION_BY_IP_API } from "./utils/apiProviders";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const urlLat = urlParams.get("lat")
  const urlLon = urlParams.get("lon")
  
  const getIpLocation = async () => {
    const response = await fetch(LOCATION_BY_IP_API);
    const data = await response.json();
    console.log(data);
    navigate(`/location?lat=${data.lat}&lon=${data.lon}`);
  }
  
  if(!urlLat & !urlLon) {
    getIpLocation();
  }

  return (
    <>
      <HeaderContainer />
      <Outlet />
      <FooterContainer />
    </>
  );
}

export default App;
