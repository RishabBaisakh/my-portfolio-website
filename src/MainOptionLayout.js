import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";

function MainOptionLayout({ children }) {
  const history = useHistory();
  const close = () => {
    history.push("/");
  };

  return (
    <div className="mainOptionLayout">
      <div className="mainOptionLayout__topbar">
        <CloseIcon onClick={close} />
      </div>

      {children}
    </div>
  );
}

export default MainOptionLayout;
