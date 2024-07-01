import "./Auth.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

export default function Auth() {
  const [tabName, setTabName] = useState("login");

  const handleChange = (event, newValue) => {
    setTabName(newValue);
  };
  return (
    <div className="auth">
      <TabContext value={tabName}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} style={{ color: "" }}>
            <Tab label="login" value="login" color="primary" />
            <Tab label="register" value="register" />
          </TabList>
        </Box>
        <TabPanel value="login">
          <Login />
        </TabPanel>
        <TabPanel value="register">
          <Register setTabName={setTabName} />
        </TabPanel>
      </TabContext>
    </div>
  );
}
