import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Container,
  IconButton,
} from "@mui/material";
import mockData from "./mock";
import ecommerceImage from '../../../assets/demo-ecommerce.png'

export default function ProjectsSession() {
  const projects = mockData.projects;
  return (
    <Box
      id="projects"
      sx={{
        padding: "2rem",
        paddingTop: "4rem",
        width: "100%",
        margin: "0 auto",
        textAlign: "left",
        pb: 10,
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
            textAlign: "center",
          }}
        >
          Resultados do mundo real
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "2rem",
            textAlign: "center",
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
            textTransform: "none",
            fontWeight: 400,
            textAlign: "justify",
            color: "#b0b0b0",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Aqui estão alguns projetos que eu trabalhei recentemente. Ajudando
          meus clientes a alcançar seus objetivos.
        </Typography>

        <Box
          sx={{
            display: "grid",
            my: 5,
            gap: 3,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{
                backgroundColor: project.active ? "#2E2E2E" : "#222",
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
              <CardContent sx={{
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    marginY: 2.5,
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: 20,
                    textTransform: 'uppercase'
                  }}
                >
                  {project.titulo}
                </Typography>
                {!project.active && (
                  <img
                    src={project.imagem}
                    alt={project.titulo}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                )}
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 2, color: "#ccc", textAlign: "justify", fontSize: 16, px: 2, mt: 2 }}
                >
                  {project.descricao}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center', gap: 1, mt: 2, mb: 1, }}>
                  {project.tecnologias.map((tecnologia, index) => (
                    <Chip
                      key={project.id + tecnologia.name + index}
                      label={tecnologia.name}
                      sx={{ backgroundColor: "#ddd", color: "dark", height: 18, fontSize: 12 }}
                    />
                  ))}
                </Box>                
                {project.active ? (
                  <Typography
                    sx={{
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography mt={1} mr={1} variant="body1" textTransform="uppercase" color="white">Você está aqui</Typography><IconButton>🎉</IconButton>
                  </Typography>
                ) : (
                  <Box sx={{ textAlign: "center", marginTop: 2 }}>
                    <a
                      href={project.linkTo}
                      target="_blank"
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
