import { Box, Chip, Container, Tooltip, Typography } from "@mui/material";
import { AnimatedSection } from "../../core";
import { useTranslation } from "../../../hooks/useTranslation";

const technologies = [
  {
    id: 1,
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description:
      "Uma biblioteca JavaScript para a construção de interfaces de usuário.",
  },
  {
    id: 2,
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    description:
      "A linguagem de marcação padrão para a criação de páginas da web.",
  },
  {
    id: 3,
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    description:
      "Um superconjunto tipado do JavaScript que é compilado para JavaScript puro.",
  },
  {
    id: 4,
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    description:
      "Uma linguagem de estilo usada para definir a apresentação de um documento.",
  },
  {
    id: 5,
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    description:
      "Uma linguagem de programação de alto nível, dinâmica e multiparadigma.",
  },
  {
    id: 6,
    name: "Recoil",
    logo: "https://recoiljs.org/img/logo.svg",
    description: "Uma biblioteca de gerenciamento de estado para React.",
  },
  {
    id: 7,
    name: "MUI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Material_UI_logo.svg",
    description: "Um popular framework de componentes para React.",
  },
  {
    id: 8,
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description:
      "Um framework CSS utilitário para desenvolvimento rápido de interfaces.",
  },
  {
    id: 9,
    name: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description:
      "Um framework para criar aplicativos móveis nativos usando React.",
  },
  {
    id: 10,
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    description:
      "Um framework React para renderização no servidor e exportação estática de aplicações.",
  },
  {
    id: 11,
    name: "Styled Components",
    logo: "https://styled-components.com/logo.png",
    description:
      "Uma biblioteca para React e React Native que permite escrever estilos dentro do JavaScript.",
  },
  {
    id: 12,
    name: "Jest",
    logo: "https://jestjs.io/img/jest-logo.svg",
    description: "Um framework de testes para JavaScript.",
  },
  {
    id: 13,
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/v1572282926/zeit/now-logo.svg",
    description:
      "Uma plataforma para hospedagem de aplicações frontend e sites estáticos.",
  },
  {
    id: 14,
    name: "Git",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    description: "Um sistema distribuído de controle de versões.",
  },
  {
    id: 15,
    name: "Bitbucket",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bitbucket-blue-logomark-only.svg",
    description: "Uma solução de gerenciamento de repositórios Git.",
  },
  {
    id: 16,
    name: "Agile",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Agile_logo.svg",
    description:
      "Um conjunto de princípios para desenvolvimento de software ágil.",
  },
  {
    id: 17,
    name: "Java",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    description:
      "Uma linguagem de programação orientada a objetos e de alto nível.",
  },
  {
    id: 18,
    name: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
    description: "Um banco de dados NoSQL orientado a documentos.",
  },
  {
    id: 19,
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    description:
      "Um sistema de gerenciamento de banco de dados relacional de código aberto.",
  },
  {
    id: 20,
    name: "Docker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    description: "Uma plataforma para criação e gerenciamento de containers.",
  },
  {
    id: 21,
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    description:
      "Um ambiente de execução JavaScript baseado no motor V8 do Chrome.",
  },
  {
    id: 22,
    name: "NestJS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/NestJS_Logo.svg",
    description:
      "Um framework progressivo para desenvolvimento de aplicações server-side com Node.js.",
  },
  {
    id: 23,
    name: "Spring Boot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    description: "Um framework Java para criação de microsserviços.",
  },
  {
    id: 24,
    name: "Redis",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
    description:
      "Um armazenamento de dados em memória utilizado como banco de dados, cache e message broker.",
  },
  {
    id: 25,
    name: "Remix",
    logo: "https://remix.run/img/brand/logo.svg",
    description:
      "Um framework React para a construção de experiências de usuário otimizadas.",
  },
  {
    id: 26,
    name: "HLS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/HTTP_Live_Streaming_logo.svg",
    description:
      "Um protocolo de comunicação para transmissão de mídia via internet.",
  },
  {
    id: 27,
    name: "Video.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Videojs_logo.svg",
    description: "Um player de vídeo HTML5 de código aberto.",
  },
  {
    id: 28,
    name: "Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    description: "Um framework web minimalista e flexível para Node.js.",
  },
];

export default function SkillsSession() {
  const { t } = useTranslation();
  
  return (
    <Box
      sx={{
        padding: "2rem",
        paddingTop: "4rem",
        width: "100%",
        margin: "0 auto",
        height: "100vh",
        textAlign: "left",
        color: "#222",
        bgcolor: "#f0f0f0",
      }}
    >
      <Container>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            fontSize: "1rem",
            marginBottom: "2rem",
            fontFamily: "monospace",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          {t('skills.subtitle')}
        </Typography>
        <Typography
          component="h3"
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            fontWeight: 700,
            mt: "0.5rem",
          }}
        >
          {t('skills.technicalSkills')}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: "2rem",
            textTransform: "none",
            fontWeight: 400,
            textAlign: "justify",
            color: "#222",
            maxWidth: "600px",
            margin: "0 auto",
            pb: 6,
          }}
          dangerouslySetInnerHTML={{ __html: t('skills.description') }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {technologies.map((tech, index) => (
            <AnimatedSection
              key={tech.id}
              animation="fadeInUp"
              delay={index * 50}
            >
              <Tooltip title={t(`skills.technologies.${tech.id}`)} placement="top">
                <Chip
                  label={tech.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid linear-gradient(90deg, #ff8a00, #e52e71)",
                    fontFamily: "sans-serif",
                    borderRadius: "8px",
                    bgcolor: '#424242',
                    color: "white",
                    padding: "0.5rem",
                    transition: "transform 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                      cursor: "pointer",
                    },
                  }}
                />
              </Tooltip>
            </AnimatedSection>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
