// import FormNew from "./form";
// import ProgressContainer from "./ProgressBar";
// import Throttle from "./Throttle";

import { Route, Routes } from "react-router-dom";

// import UseEffectPollyfill from "./useEffectPollyfill";
import NavBar from "./ThemeComponents/Navbar";
import Home from "./ThemeComponents/Home";
import Blog from "./ThemeComponents/Blog";
import About from "./ThemeComponents/About";
import RangeNSelect from "./RangeSelect";

// import UseMemoPollyfill from "./useMemoPollyfill";

// import GridLights from "./GridLights";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/rs"} element={<RangeNSelect />} />
        {/* <Throttle />
      <FormNew /> */}
        {/* <ProgressContainer /> */}
        {/* <GridLights /> */}
        {/* <UseMemoPollyfill /> */}

        {/* <UseEffectPollyfill /> */}
      </Routes>
    </>
  );
}

export default App;
