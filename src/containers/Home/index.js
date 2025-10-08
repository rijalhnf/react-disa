// import "./App.css";
import { useState } from "react";

import Mode from "../../components/Mode/Mode";
import Header from "../../components/Header/Header";
import { About } from "../../components/About/About";
// import { Bio } from "../../components/Bio/Bio";
// import { Footer } from "../../components/Footer/Footer";
// import Project from "../../components/Project/Project";
// import Calendar from "../calendar/Calendar";
// import College from "../college/College"
// import ContentCreator from "../contentCreator/ContentCreator"
// import Developer from "../developer/Developer"
// import Meals from "../meals/Meals"
// import Weather from "../weather/Weather";
import { ConfigProvider, theme, } from "antd";
import { Footer } from "../../components/Footer/Footer";
import Portfolio from "../portofolio/Portofolio";


// function Content({ props }) {
//   switch (props) {
//     case "calendar":
//       return <Calendar />
//     case "college":
//       return <College />
//     case "contentcreator":
//       return <ContentCreator />
//     case "developer":
//       return <Developer />
//     case "meals":
//       return <Meals />
//     // case "weather":
//     //   return <Weather />
//     default:
//       return <div>
//         <Header />
//         <About />
//         <Calendar />
//         {/* <Bio /> */}
//         {/* <Project /> */}
//         <Footer />
//       </div>
//   }
// }

function Home() {
  const [whiteMode, setWhiteMode] = useState(true);

  const handleModeChange = () => {
    setWhiteMode(!whiteMode);
  };


  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"} style={{ minHeight: "100vh" }}>

      <ConfigProvider theme={{
        algorithm: whiteMode ? theme.defaultAlgorithm : theme.darkAlgorithm,
        components: {
          Table: {
            cellPaddingBlock: 16,
            cellPaddingInline: 16
          }
        }
      }}>

        <Mode setMode={whiteMode} handleModeChange={handleModeChange} />

        <Header />
        <About />
        <Portfolio />
        {/* <Calendar /> */}
        {/* <ContentCreator /> */}
        <Footer />
        {/* <Content props={fill} /> */}



      </ConfigProvider>

    </div>
  );
}

export default Home;
