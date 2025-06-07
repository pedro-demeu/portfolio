import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ContactMeDialog } from "../../dialog";
import React, { useState } from "react";

export default function HomeSession() {
  const [openContactMe, setOpenContactMe] = useState(false);

  const handleOpen = React.useCallback(() => {
    setOpenContactMe(true);
  }, []);
  const handleClose = React.useCallback(() => {
    setOpenContactMe(false);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
        width: "100%",
        bgcolor: "#191919",
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <Container
        sx={{
          maxWidth: "800px!important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "4rem",
            width: "100%",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "2.5rem",
                fontWeight: 700,
                mb: "0.5rem",
              }}
            >
              Olá, eu sou Pedro Demeu
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "#ccc",
              }}
            >
              Frontend Engineer com visão Fullstack | Bacharel em Engenharia de Software
            </Typography>

          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <img
              src="https://github.com/pedro-demeu.png"
              alt="Pedro Demeu"
              style={{
                width: "150px",
                height: "150px",
                border: "2px solid #111",
                boxShadow: "0 0 10px #111",
                marginRight: "2.5rem",
                borderRadius: "50%",
              }}
            />
            <Tooltip title="Disponível">
              <Box
                sx={(theme) => ({
                  position: "absolute",
                  bottom: 10,
                  right: 70,
                  height: 20,
                  width: 20,
                  bgcolor: theme.palette.success.light,
                  borderRadius: "100%",
                  border: "2px solid #333",
                })}
              />
            </Tooltip>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "1.2rem",
            mb: "1rem",
            fontWeight: 500,
            color: "#ccc",
            mt: "1rem",
          }}
        >
          Sobre
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            color: "#aaa",
            mb: "1rem",
          }}
        >
          Desenvolvedor de Software com mais de{" "}
          <strong style={{ color: "#DDD" }}>5 anos de experiência</strong>, impactando milhares de pessoas todos os dias.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            color: "#aaa",
            mb: "1rem",
          }}
        >
          Hoje atuo como <strong style={{ color: "#DDD" }}>Frontend Software Engineer</strong>, mantendo em produção uma{" "}
          <strong style={{ color: "#DDD" }}>plataforma de vídeo-monitoramento em nuvem (VMS Cloud)</strong>.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            color: "#aaa",
            mb: "1rem",
          }}
        >
          Tenho muita bagagem com <strong style={{ color: "#DDD" }}>Processos de desenvolvimento, Testes Automatizados, Code Review</strong>, além de{" "}
          <strong style={{ color: "#DDD" }}>experiência em Devops CI/CD, Integrações de API RESTful</strong> e uma{" "}
          <strong style={{ color: "#DDD" }}>visão Full-Stack</strong> com backend em{" "}
          <strong style={{ color: "#DDD" }}>Node.js, NestJS, Java Spring Boot e Django</strong>.
        </Typography>
        <Typography
          sx={{
            fontSize: "0.85rem",
            fontStyle: 'italic',
            color: "#aaa",
            mb: "2rem",
            mt: 6,
          }}
        >
          Stack principal:{" "}
          <strong style={{ color: "#DDD" }}>
            JavaScript • TypeScript • ReactJS • React Native • Node.js • Java Spring Boot • Jest • Jira • Bitbucket • Video.js • SWR • React Testing Library • Cypress • NestJS
          </strong>
        </Typography>


        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                animation: "pulse 1.5s infinite",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                "@keyframes pulse": {
                  "0%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.1)" },
                  "100%": { transform: "scale(1)" },
                },
              }}
              onClick={() => window.location.href = "#work-timeline"}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontWeight: 500,
                }}
              >
                Conhecer Mais
              </Typography>
            </Box>

            <Button
              sx={{
                color: "#FFF",
                "&:hover": {
                },
                textTransform: "none",
              }}
              onClick={handleOpen}
            >
              Contate-me 👋
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/pdemeu"
              target="_blank"
              rel="noopener"
            >
              <Tooltip title="LinkedIn">
                <IconButton sx={{ color: "white" }}>
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              href="https://github.com/pedro-demeu"
              target="_blank"
              rel="noopener"
            >
              <Tooltip title="GitHub">
                <IconButton sx={{ color: "white" }}>
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Link>
          </Box>
        </Box>
        <ContactMeDialog open={openContactMe} onClose={handleClose} />
      </Container>
    </Box>
  );
}
