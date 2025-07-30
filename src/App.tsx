import { Box, GlobalStyles } from "@mui/material";
import {
  HomeSession,
  ProjectsSession,
  AcademicSession,
  SkillsSession,
  FooterSession,
  WorkTimeLineSession,
} from "./components/sessions";
import { BackToTopButton } from "./components/core";
import { ToastContainer } from "react-toastify";

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
      </Box>
      <FooterSession />
      <BackToTopButton />
    </>
  );
}

export default App;
