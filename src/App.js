import CheckBox from "./components/two_way_binding/SubmitForm_checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useColorScheme } from "@mui/material/styles";

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
  return (
    <>
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
      </div>
    </>
  );
}
export default App;
