import { Box, Chip, Typography } from "@mui/material";

const technologies = [
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  { name: "Recoil", logo: "https://recoiljs.org/img/logo.svg" },
  {
    name: "MUI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Material_UI_logo.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  { name: "Styled Components", logo: "https://styled-components.com/logo.png" },
  { name: "Jest", logo: "https://jestjs.io/img/jest-logo.svg" },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/v1572282926/zeit/now-logo.svg",
  },
  {
    name: "Git",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  },
  {
    name: "Bitbucket",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bitbucket-blue-logomark-only.svg",
  },
  {
    name: "Agile",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Agile_logo.svg",
  },
  {
    name: "Java",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    name: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "Docker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "NestJS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/NestJS_Logo.svg",
  },
  {
    name: "Spring Boot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
  },
  {
    name: "Redis",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
  },
  { name: "Remix", logo: "https://remix.run/img/brand/logo.svg" },
  {
    name: "HLS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/HTTP_Live_Streaming_logo.svg",
  },
  {
    name: "Video.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Videojs_logo.svg",
  },
  {
    name: "Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
];

export default function SkillsSession() {
  return (
    <Box
      sx={{
        padding: "2rem",
        paddingTop: "10rem",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        height: "100vh",
        textAlign: "left",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "1rem",
          marginBottom: "0.5rem",
          fontFamily: "monospace",
          textTransform: "uppercase",
          background: "linear-gradient(90deg, #3da2dc, #63b4e3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Hard Skills
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: "1.5rem",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
          fontWeight: 700,
          mt: "1rem",
        }}
      >
        Habilidades Técnicas
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {technologies.map((tech) => (
          <Chip
            key={tech.name}
            label={tech.name}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #424242",
              fontFamily: "sans-serif",
              borderRadius: "8px",
              color: "white",
              padding: "0.5rem",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
