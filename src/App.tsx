import { Box, Container } from "@mui/material";
import {
  HomeSession,
  ProjectsSession,
  AcademicSession,
  SkillsSession,
  FooterSession,
} from "./components/sessions";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "#191919",
        color: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container
        sx={{
          height: "100%",
          width: "100vw",
        }}
      >
        <ToastContainer />
        <HomeSession />
        <ProjectsSession />
        <AcademicSession />
        <SkillsSession />
      </Container>
      <FooterSession />
    </Box>
  );
}

export default App;
