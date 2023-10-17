import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";
import { DrawerHeader } from "./components/Drawer";
import Box from "@mui/material/Box";
import MiniDrawer from "./components/Drawer";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Routes>
          <Route path="/" element={<MuiTypography />} />
          <Route path="/buttons" element={<MuiButton />} />
          <Route path="/blogs" element={<MuiTypography />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
