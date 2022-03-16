import React, { useState } from "react";
import Select from "react-select";
import "./MemberDetailsStyles.css";
import ProfileImage from "./Images/ProPicDefault.png";
import dictionaryFile from "./Questions";
import TextField from "@material-ui/core/TextField";
import EpiDropdown from "./EpiDropdown";

const options = [
  { value: "spanish", label: "Spanish" },
  { value: "cantonese", label: "Cantonese, Mandarin or other Chinses dialect" },
  { value: "portuguese", label: "Portuguese" },
  { value: "vietnamese", label: "Vietnamese" },
  { value: "korean", label: "Korean" },
  { value: "french", label: "French or French Creole" },
  { value: "filipino", label: "Filipino" },
  { value: "arabic", label: "Arabic" },
  { value: "other", label: "Other" },
  { value: "declines", label: "Declines to Answer" },
];

export default function memberDetails() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedOption, setSelectedOption] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState(null);

  var optionDicM = [];
  var dicval = { value: "", label: "" };
  var optionDic = [];

  return (
    <div className="QuestionContainer">
      <div className="MemderDetailsContainer">
        <div className="profileNameContainer">
          <img className="ProfileImage" src={ProfileImage} alt="" />
          <h6>Christoper Leanoverdes</h6>
        </div>

        <div className="MemberInfoCOntainer">
          <h6>
            {" "}
            <span>
              DOB : <br /> 22-02-2022{" "}
            </span>{" "}
          </h6>
        </div>
        <div className="groupSeperatorVertical"></div>

        <div className="MemberInfoCOntainer">
          <h6>
            {" "}
            <span>
              Age : <br />
              23{" "}
            </span>{" "}
          </h6>
        </div>
        <div className="groupSeperatorVertical"></div>
        <div className="MemberInfoCOntainer">
          <h6>
            {" "}
            <span>
              Member ID : <br /> ACB123S{" "}
            </span>{" "}
          </h6>
        </div>
        <div className="groupSeperatorVertical"></div>

        <div className="MemberInfoCOntainer">
          <h6>
            {" "}
            <span>
              Medicare # : <br /> AS8764OP2{" "}
            </span>{" "}
          </h6>
        </div>
        <div className="groupSeperatorVertical"></div>
      </div>

      <div className="TopQuestionContainer">
        <div className="SubGroupNameContainer">
          <h5>Member Information</h5>
          <div className="groupSeperatorHorizantal"></div>
        </div>
        <EpiDropdown />
      </div>
    </div>
  );
}

// <div className="SubGroupParentQuestionContainer">
// <div className="SubGroupQuestionsContainer">
//   {dictionaryFile.map((dictionary) =>
//     dictionary.layout.groups.map(
//       (group, idxgroup) =>
//         group &&
//         group.subgroups &&
//         group.subgroups.map(
//           (subgroup, idxVSub) =>
//             subgroup &&
//             subgroup.sections &&
//             subgroup.sections.map((section, idxVSubsec) => {
//               let options = section.options.map((object) => ({
//                 value: object,
//                 label: object,
//               }));
//               console.log(options, "Test");
//               return (
//                 <div key={idxVSubsec}>
//                   <h5> {section.question}</h5>
//                   <div className="RowContainer">
//                     <Select
//                       className="DropDownQuestionContainer"
//                       defaultValue={selectedOption}
//                       onChange={setSelectedOption}
//                       options={options}
//                       isMult={true}
//                     />

//                     <div className="TextFieldContainer">

//                         <TextField
//                           value={name}
//                           label="Specify"
//                           onChange={(e) => {
//                             setName(e.target.value);
//                           }}
//                         />

//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//         )
//     )
//   )}
// </div>
// </div>
