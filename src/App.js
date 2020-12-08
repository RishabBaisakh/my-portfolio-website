import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Experience from "./Education";
import Contact from "./Contact";
import Sidebar from "./Sidebar";

function App() {
  const navData = [
    {
      title: "About",
      link: "/",
      caption: "About me",
      component: <About />,
    },
    {
      title: "Skills",
      link: "/skills",
      caption: "Skills that I have",
      component: <Skills />,
    },
    {
      title: "Education",
      link: "/education",
      caption: "Where all the beginning happens",
      component: <Education />,
    },
    {
      title: "Experience",
      link: "/experience",
      caption: "Something missing",
      component: <Experience />,
    },
    {
      title: "Work",
      link: "/work",
      caption: "Something I did for fun",
      component: <Work />,
    },
    {
      title: "Contact",
      link: "/contact",
      caption: "Feel free to reach me out",
      component: <Contact />,
    },
  ];

  return (
    <div className="app">
      <Router>
        <div className="app__sidebar">
          <Sidebar sidebarNavData={navData} />
        </div>

        <Switch>
          {navData.map((data) => {
            return (
              <>
                <Route path={data.link}>
                  <div className="app__header">{data.caption}</div>
                  <div className="app__body">{data.component}</div>
                </Route>
              </>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
