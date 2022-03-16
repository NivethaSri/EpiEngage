// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import "./GroupsStyle.css";
import CompletedPic from "./Images/TickMark.png";
import groupdata from "./GroupsName-Data";
import dictionaryFile from "./Questions";

import "./App.css";

function EPIGroups() {
  //const [height, width] = GetSingleGroupSize();
  // const [height, setHeight] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //   setHeight(ref.current.clientHeight);
  // });

  return (
    <div>
      <div className="groupAllCell">
        {console.log(dictionaryFile)}
        {dictionaryFile.map((dictionary, idx) => 
          dictionary.layout.groups.map((group, idxgroup) => (
            <div className="groupCell" key={idxgroup}>
              {console.log(group, "TestGroup")}
              <img className="ProfileImage" src={CompletedPic} alt="" />
              <p className="ProFileName"> {group.name}</p>
              <div className="groupSeperator"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EPIGroups;
// {groupdata.map((item) => {
//   return (
//     <div className="groupCell">
//       <img className="ProfileImage" src={CompletedPic} alt="" />
//       <p className="ProFileName"> {item.GroupName}</p>
//       <div className="groupSeperator"></div>
//     </div>
//   );
// })}
