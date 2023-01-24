import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({ label, items = [1, 2, 3, 4], placeholder, onChange}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    // setAge(event.target.value);
  };

  return (
    <div>
     <FormControl variant="filled" sx={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={onChange}
        // onChange={(e) => {
        //               if (e.target.value == items[0]) {
        //                 handleChange("");
        //               } else {
        //                 handleChange(e.target.value);
        //               }
        //               // setValue(e.target.value);
        //             }}
        >
            {items.map((el, i) => {
          return (
            <MenuItem key={i} value={el}>
              <span className=" ">{el}</span>
            </MenuItem>
          );
        })}
        </Select>
      </FormControl>
    </div>
  );
}
