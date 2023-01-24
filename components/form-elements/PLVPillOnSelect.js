import React, { useRef } from "react";
import { useState } from "react";
import Chip from "./Chip.js";
import { Dialog , Stack, Autocomplete, TextField, Box} from '@mui/material';

// import InputDataList from "./FormElements/InputDataList.js/index.js";

const PLVPillOnSelect = ({ status, onChange = () => {}, label }) => {
  const [tags, setTags] = useState([]);
  const [activeText, setActiveText] = useState("  ");
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleDelete = (i) => {
    console.info("You clicked the delete icon.");
    const newTags = tags.filter((el, index) => index != i);
    setTags(newTags);
  };
  const onAddItem = (e) => {
    // console.log("key event is", inputRef.current.innerText, inputRef.current);
    console.log("Key vent is...", e.which);
    console.log("Key vent is...", e);
    // Use keycodes for mobile
    if (e.key == "Enter" || e.code == "Enter" || e.keyCode == 13 || e.which == 13) {
      if (inputRef.current.value == "") {
        console.log("Empty value");
      } else {
        setTags([...tags, inputRef.current.value]);
        onChange([...tags, inputRef.current.value]);
      }
      inputRef.current.value = "";
    }

    // if ((e.key == "Backspace" || e.code == "Backspace" || e.keyCode == 8 || e.which == 8) && inputRef.current.value == "") {
    //   console.log("Backspace Reached", inputRef.current.value);
    //   console.log(tags);
    //   inputRef.current.value = tags[tags.length - 1] ?? "";
    //   inputRef.current.focus();
    //   setTags((val) => val.slice(0, -1));
    // }
  };
  return (
    <div>
      {/* <InputDataList
        ref={inputRef}
        onKeyDown={(e) => {
          onAddItem(e);
        }}
        label={label}
      ></InputDataList> */}
    <TextField sx={{backgroundColor:'red'}}
    
    label="Email" ref={inputRef} 
    onKeyDown={(e) => {
        onAddItem(e);
      }}
    type='email' value={inputValue.email} fullWidth placeholder="Type in here…" required />

      <div className="mt-[14px] flex gap-[1.2rem] max-w-[600px] flex-wrap">
        {tags.map((e, i) => {
          return (
            <Chip
              action={() => {
                handleDelete(i);
              }}
              key={i}
              text={e}
            />
          );
        })}

        {/* <Chip text="love" />
        <Chip text="love" />
        <Chip text="love" />
        <Chip text="love" /> */}
      </div>
    </div>
  );
};

export default PLVPillOnSelect;
