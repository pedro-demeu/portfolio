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
import { useState } from "react";

export default function HomeSession() {
  const [openContactMe, setOpenContactMe] = useState(false);

  const handleOpen = () => {
    setOpenContactMe(true);
  };
  const handleClose = () => {
    setOpenContactMe(false);
  };
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
              Desenvolvedor Full-Stack | Engenheiro de Software
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
                  bottom: 10, // Ajuste a posição para ficar mais próxima
                  right: 70, // Ajuste a posição para ficar mais próxima
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
          Sou um
          <strong
            style={{
              color: "#DDD",
            }}
          >
            {" "}
            engenheiro de software
          </strong>{" "}
          com{" "}
          <strong
            style={{
              color: "#DDD",
            }}
          >
            5 anos de experiência
          </strong>
          , que transforma ideias em{" "}
          <strong
            style={{
              color: "#DDD",
            }}
          >
            produtos digitais incríveis.
          </strong>{" "}
          Meu trabalho vai além de escrever código: eu entendo o seu negócio e
          construo{" "}
          <strong
            style={{
              color: "#DDD",
            }}
          >
            interfaces simples e eficientes
          </strong>{" "}
          que resolvem problemas reais do seu negócio.
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            color: "#aaa",
            mb: "2rem",
          }}
        >
          Atualmente, estou atuando como{" "}
          <strong
            style={{
              color: "#DDD",
            }}
          >
            desenvolvedor frontend
          </strong>{" "}
          em um produto de
          <strong
            style={{
              color: "#DDD",
            }}
          >
            {" "}
            video-monitoramento em nuvem (VMS Cloud)
          </strong>
          , usando{" "}
          <strong
            style={{
              color: "#DDD",
            }}
          >
            React
          </strong>{" "}
          e{" "}
          <strong
            style={{
              color: "#DDD",
            }}
          >
            TypeScript
          </strong>{" "}
          para entregar soluções que funcionam bem e geram valor para os
          clientes.
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
            <Link
              href="#projects"
              color="inherit"
              sx={{
                textTransform: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Conhecer Mais
            </Link>
            <Button
              sx={{
                backgroundColor: "#f0f0f0",
                color: "#191919",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
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
