import React from "react";
import "./SubGroupsStyles.css";
import groupdata from "./GroupsName-Data";
import "./App.css";
import dictionaryFile from "./Questions";

function EPISubGroups() {
  return (
    <div>
      {dictionaryFile.map((dictionary) =>
        dictionary.layout.groups.map((group, idxgroup) => (
          <div className="subgroupAllCell" key={idxgroup}>
            {group &&
              group.subgroups &&
              group.subgroups.map((subgroup, idxVSub) => (
                <div className="subgroupCell" key={idxVSub}>
                  <p> {subgroup.name}</p>
                </div>
              ))}
          </div>
        ))
      )}
    </div>
  );
}
export default EPISubGroups;
// return (
//   <div>
//     <div className="subgroupAllCell">
//       {groupdata.map((item) => {
//         return (
//           <div className="subgroupCell">
//             {item.SubGroups.map((subItem) => {
//               return <p> {subItem}</p>;
//             })}
//           </div>
//         );
//       })}
//     </div>
//   </div>
// );

// return (
//   <div>
//     {dictionaryFile.map((layout, idx) => {
//       return (
//         <div className="subgroupAllCell">
//           {layout.groups.map((subgroups, idxx) => {
//             return (
//               <div className="subgroupCell">
//                 {subgroups.map((subgroup, idxx) => {
//                   return <p> {subgroup.name}</p>;
//                 })}
//               </div>
//             );
//           })}
//         </div>
//       );
//     })}
//   </div>
// );

// {dictionaryFile &&
//   dictionaryFile.map((layout, idx) => (
//     <div className="subgroupAllCell" key={idx}>
//       {layout &&
//         layout.groups &&
//         layout.groups.map(
//           (group, idxV) =>
//             group &&
//             group.subgroups &&
//             group.subgroups.map((subgroup, idxVSub) => (
//               <div className="subgroupCell" key={idxVSub}>
//                 <p> {subgroup.name}</p>
//               </div>
//             ))
//         )}
//     </div>
//   ))}
