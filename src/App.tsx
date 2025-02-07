import { Box, GlobalStyles } from "@mui/material";
import {
  HomeSession,
  ProjectsSession,
  AcademicSession,
  SkillsSession,
  FooterSession,
  WorkTimeLineSession,
} from "./components/sessions";
import { ToastContainer } from "react-toastify";
import PayMeACoffe from "./components/sessions/PayMeACoffe/PayMeACoffe";

function App() {
  return (
    <>
      <Box sx={{
        width: '100%',
        color: 'white'
      }}>
        <GlobalStyles
          styles={{
            html: { scrollBehavior: "smooth" },
          }}
        />
        <ToastContainer />
        <HomeSession />
        <WorkTimeLineSession />
        <ProjectsSession />
        <AcademicSession />
        <SkillsSession />
        <PayMeACoffe />
      </Box>
      <FooterSession />
    </>
  );
}

export default App;
