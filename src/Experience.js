import React from "react";
import "./Experience.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Experience() {
  return (
    <div className="experience">
      <div className="experience__row myRowLayout">
        <div className="experience__rowHeader">
          <h1>FlexiEle Consultancy Services Ltd.</h1>
          <h1>(Aug, 2018 - Aug, 2019)</h1>
        </div>
        <p className="experience__location">
          <LocationOnIcon />
          Gurugram, India
        </p>
        <h2 className="experience__title">Associate Technology</h2>
        <ul className="experience__responsibilities">
          <li>
            <p>
              Initial six months, worked as a Data Analyst. I was involved in
              writing complex sql queries. I was involved in implementing
              database Procedures and Functions.
            </p>
          </li>

          <li>
            <p>
              My role as a Data Analyst also involved generating excel reports
              using PHPExcel Library.
            </p>
          </li>
          <li>
            <p>
              For the latter six months, I was given an opportunity to be a part
              of the development team for a migration product, as a frontend
              Angular 2+ developer.
            </p>
          </li>
          <li>
            <p>
              As a part of development team, I was working with a team of 7 very
              dynamic web developers.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
