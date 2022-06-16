import React from "react";
import { useHistory } from "react-router-dom";

import Button from "./button";

export default function ButtonEXP() {
    const history = useHistory();

  const addTheatre = e => {
    history.push('/add-theatre')
  };

  const addShow = e => {
    history.push('/add-show')
  };
  
  return (
    <div>
      <Button
        id={"btnSave"}
        type={"Submit"}
        value={"Add Show"}
        isDisabled={false}
        clickHandler={addShow}
      />
      <Button
        id={"btnSave"}
        type={"Submit"}
        value={"Add Theatre"}
        isDisabled={false}
        clickHandler={addTheatre}
      />
    </div>
  );
}
