import { Box, Container } from "@mui/material";
import { HomeSession } from "./components/sessions";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "#191919",
        color: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Container
        sx={{
          display: "flex",
          height: "100vh",
          width: "100vw",
        }}
      >
        <HomeSession />
      </Container>
    </Box>
  );
}

export default App;
