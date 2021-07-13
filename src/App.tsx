import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { IsMobileContext } from "./contexts";

function App(props: any) {
  const [isMobile, setIsMobile] = useState(false);

  const updateWindowWidth = () => {
    setIsMobile(window.innerWidth < 790);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return (
    <div className="App">
      <IsMobileContext.Provider value={isMobile}>
        <Navbar />
        <Main query={props?.location?.search} />
      </IsMobileContext.Provider>
    </div>
  );
}

export default App;
