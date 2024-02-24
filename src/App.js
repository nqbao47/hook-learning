import CheckBox from "./components/two_way_binding/SubmitForm_checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useColorScheme } from "@mui/material/styles";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { useState } from "react";
import ReCallApi from "./components/useEffect/re-CallApi";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      size="small"
    >
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <MenuItem value="light">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LightModeIcon />
            Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <DarkModeIcon />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <SettingsBrightnessIcon />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div style={{ padding: "10px" }}>
        <Button
          variant="contained"
          onClick={() => setShow(!show)}
        >
          Toggle !
        </Button>
        {show && <ReCallApi />}

        <hr />
        {/* <TodoList />
        <hr />
        <ModeSelect />
        <hr />
        <ModeToggle />
        <hr />
        <div
          className="App"
          style={{ padding: "20px" }}
        >
          <div>Brian Nguyen</div>
          <CheckBox />
          <Stack>
            <Button variant="contained">log</Button>
            <Button>log</Button>
          </Stack>
        </div> */}
      </div>
    </>
  );
}
export default App;
