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
import { AnimatedSection, LanguageSelector } from "../../core";
import { useState } from "react";
import { useTranslation } from "../../../hooks/useTranslation";

export default function HomeSession() {
  const { t } = useTranslation();
  const [openContactMe, setOpenContactMe] = useState(false);
  const handleOpen = () => setOpenContactMe(true);
  const handleClose = () => setOpenContactMe(false);
  return (
    <Box
      sx={{
        padding: "2rem",
        width: "100%",
        bgcolor: "#191919",
        margin: "0 auto",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 2,
        }}
      >
        <LanguageSelector />
      </Box>
      <Container
        sx={{
          maxWidth: "800px!important",
          position: "relative",
          zIndex: 1,
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
          <AnimatedSection animation="fadeInLeft">
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  mb: "0.5rem",
                }}
              >
                {t('home.greeting')} {t('home.name')}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#ccc",
                }}
              >
                {t('home.title')}
              </Typography>
            </Box>
          </AnimatedSection>
          <AnimatedSection animation="fadeInRight" delay={300}>
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
                aria-hidden="true"
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
          </AnimatedSection>
        </Box>
        <AnimatedSection animation="fadeInUp" delay={600}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              mb: "1rem",
              fontWeight: 500,
              color: "#ccc",
              mt: "1rem",
            }}
          >
            {t('about.title')}
          </Typography>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={800}>
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
        </AnimatedSection>


        <AnimatedSection animation="fadeInUp" delay={1000}>
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
                {t('nav.about')}
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
              {t('nav.contact')} 👋
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
        </AnimatedSection>
        <ContactMeDialog open={openContactMe} onClose={handleClose} />
      </Container>
    </Box>
  );
}
