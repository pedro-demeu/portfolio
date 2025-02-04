import { Box, Container } from "@mui/material";
import {
  HomeSession,
  ProjectsSession,
  AcademicSession,
  SkillsSession,
} from "./components/sessions";

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
        pb: "12rem",
      }}
    >
      <Container
        sx={{
          height: "100%",
          width: "100vw",
        }}
      >
        <HomeSession />
        <ProjectsSession />
        <AcademicSession />
        <SkillsSession />
      </Container>
    </Box>
  );
}

export default App;
