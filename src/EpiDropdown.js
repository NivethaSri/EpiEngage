import React, { Component, useState } from "react";
import Select from "react-select";
import "./MemberDetailsStyles.css";
import dictionaryFile from "./Questions";
import TextField from "@material-ui/core/TextField";

function EpiDropdown() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState(null);
  const handleSelectOption = (e) => {
    console.log(e, "episource");
    if (e.value === "Other") {
      console.log(e.value, "entered");
      <TextField
        value={name}
        label="Specify"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />;
    }
  };

  return (
    <div className="SubGroupParentQuestionContainer">
      <div className="SubGroupQuestionsContainer">
        {dictionaryFile.map((dictionary) =>
          dictionary.layout.groups.map(
            (group, idxgroup) =>
              group &&
              group.subgroups &&
              group.subgroups.map(
                (subgroup, idxVSub) =>
                  subgroup &&
                  subgroup.sections &&
                  subgroup.sections.map((section, idxVSubsec) => {
                    let options = section.options.map((object) => ({
                      value: object,
                      label: object,
                    }));
                    console.log(options, "Test");
                    return (
                      <div key={idxVSubsec}>
                        <h5> {section.question}</h5>
                        <div className="RowContainer">
                          <Select
                            className="DropDownQuestionContainer"
                            defaultValue={selectedOption}
                            onChange={handleSelectOption}
                            options={options}
                            isMult={true}
                          />
                        </div>
                      </div>
                    );
                  })
              )
          )
        )}
      </div>
    </div>
  );
}

export default EpiDropdown;
