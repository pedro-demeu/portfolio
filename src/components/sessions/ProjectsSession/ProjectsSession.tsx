import { Card, CardContent, Typography, Box, Chip, Container } from "@mui/material";
import mockData from "./mock";

export default function ProjectsSession() {
  const projects = mockData.projects;
  return (
    <Box
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        width: "100%",
        margin: "0 auto",
        height: "100%",
        textAlign: "center",
        bgcolor: "#191919",
      }}
    >
      <Container>
      <Typography
        variant="h4"
        sx={{
          fontSize: "1rem",
          marginBottom: "0.5rem",
          fontFamily: "monospace",
          textTransform: "uppercase",
          background: "linear-gradient(90deg, #ff8a00, #e52e71)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Resultados do mundo real
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: "2rem",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
          fontWeight: 700,
          mt: "0.5rem",
        }}
      >
        Projetos em destaque
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          color: "#ccc",
          marginBottom: "2rem",
        }}
      >
        Aqui estão alguns projetos que eu trabalhei recentemente.
        <br /> Ajudando meus clientes a alcançar seus objetivos.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            sx={{
              backgroundColor: project.active ? "#dda15e" : "#222",
              color: "white",
              borderRadius: 2,
              ":hover": {
                boxShadow: "0 0 10px #111",
                transform: "scale(1.02)",
                transition: "0.3s",
                backgroundColor: "#333",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 2,
                  fontWeight: 700,
                }}
              >
                {project.titulo}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: 2, color: "#ccc", textAlign: "justify" }}
              >
                {project.descricao}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {project.tecnologias.map((tecnologia) => (
                  <Chip
                    key={tecnologia.id}
                    label={tecnologia.name}
                    sx={{ backgroundColor: "#ddd", color: "dark" }}
                  />
                ))}
              </Box>
              {!project.active && (
                <Box sx={{ textAlign: "center", marginTop: 2 }}>
                  <img
                    src={project.imagem}
                    alt={project.titulo}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </Box>
              )}
              {project.active ? (
                <Typography
                  sx={{
                    mt: 2,
                    color: "#bc6c25",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Você está aqui
                </Typography>
              ) : (
                <Box sx={{ textAlign: "center", marginTop: 2 }}>
                  <a
                    href={project.linkTo}
                    style={{ color: "#90caf9", textDecoration: "none" }}
                  >
                    Ver projeto
                  </a>
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
      </Container>
    </Box>
  );
}
