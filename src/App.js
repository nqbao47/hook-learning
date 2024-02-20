import CheckBox from "./components/two_way_binding/SubmitForm_checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function App() {
  return (
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
  );
}
export default App;
