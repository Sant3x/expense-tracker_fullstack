import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import { Login } from "./Components/login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const global = useGlobalContext();
  console.log(global);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}

      <div>
        {isLoggedIn ? (
          <LoggedInLayout />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </AppStyled>
  );
}
function LoggedInLayout() {
  const [active, setActive] = useState(1);
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Income />;
      case 3:
        return <Expenses />;
    
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Navigation active = {active} setActive={setActive} />
      {displayData()}
    </div>
  );
}

const AppStyled = styled.div`
  height: 300px;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 100;
    }
  }
`;

export default App;
