import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { getColors } from '../api/getColors';


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect( () => {
    getColors().then( res => {
      setColorList(res);
    })
    // setColorList(getColors());
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors={getColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
