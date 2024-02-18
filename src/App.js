import Button from "@mui/material/Button";
import { AccessAlarm, AddCircle, ThreeDRotation } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function App() {
  return (
    <>
      <div>Brian Nguyen</div>

      <Button
        onClick={() => {
          alert("Test!!");
        }}
        color="success"
        variant="contained"
      >
        Click me!!
      </Button>
      <br />

      <AccessAlarm
        fontSize="large"
        color="primary"
      />

      <ThreeDRotation fontSize="large" />
      <AddCircleOutlineIcon color="success" />
      <AddCircle color="error" />
    </>
  );
}
export default App;
