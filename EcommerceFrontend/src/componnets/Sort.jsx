import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ name, menu }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <div>
             <label htmlFor="">Sorting Price </label>  
            <select  id="">
                <option value="">----</option>
                <option value="">Price Low To High</option>
                <option value="">Price High To Low</option>
            </select>
      </div>
 
    // <Box sx={{ minWidth: 120 }}>
    //   <FormControl fullWidth>
    //     <InputLabel id="demo-simple-select-label">{name}</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={age}
    //       label={name}
    //       onChange={handleChange}
    //     >
    //       {menu.map((e) => {
    //         return <MenuItem value={e}>{e}</MenuItem>;
    //       })}
    //     </Select>
    //   </FormControl>
    // </Box>
  );
}