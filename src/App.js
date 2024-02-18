import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function App() {
  return (
    <>
      <div>Brian Nguyen</div>
      <Tabs></Tabs>
      <Button
        onClick={() => {
          alert("Test!!");
        }}
        color="success"
        variant="contained"
      >
        Click me!!
      </Button>
      <Tabs></Tabs>

      <AccessAlarmIcon
        fontSize="large"
        color="primary"
      />
      <ThreeDRotationIcon fontSize="large" />
      <AddCircleOutlineIcon color="success" />
      <AddCircleIcon color="error" />
    </>
  );
}
export default App;
