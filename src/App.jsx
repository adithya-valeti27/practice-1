import React from "react";
import Photos from "./mapping/Photos";
import Usestate from "./react-states/Usestate";
import Useeffect from "./react-states/Useeffect";
import Useref from "./react-states/Useref";
import Uselayout from "./react-states/Uselayout";

const App = () => {
  return (
    <div>
      <Usestate />
      {/* <Photos/> */}
      <Useeffect />
      <Useref />
      <Uselayout/>
    </div>
  );
};

export default App;
