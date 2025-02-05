import { Box, Chip, Tooltip, Typography } from "@mui/material";

const technologies = [
  {
    id: 1,
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "A JavaScript library for building user interfaces",
  },
  {
    id: 2,
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    description: "The standard markup language for creating web pages",
  },
  {
    id: 3,
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript",
  },
  {
    id: 4,
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    description:
      "A style sheet language used for describing the presentation of a document",
  },
  {
    id: 5,
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    description:
      "A high-level, often just-in-time compiled, and multi-paradigm programming language",
  },
  {
    id: 6,
    name: "Recoil",
    logo: "https://recoiljs.org/img/logo.svg",
    description: "A state management library for React",
  },
  {
    id: 7,
    name: "MUI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Material_UI_logo.svg",
    description: "A popular React UI framework",
  },
  {
    id: 8,
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description: "A utility-first CSS framework for rapid UI development",
  },
  {
    id: 9,
    name: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "A framework for building native apps using React",
  },
  {
    id: 10,
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    description:
      "A React framework for server-rendered or statically-exported React apps",
  },
  {
    id: 11,
    name: "Styled Components",
    logo: "https://styled-components.com/logo.png",
    description: "A library for React and React Native to write and manage CSS",
  },
  {
    id: 12,
    name: "Jest",
    logo: "https://jestjs.io/img/jest-logo.svg",
    description: "A delightful JavaScript testing framework",
  },
  {
    id: 13,
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/v1572282926/zeit/now-logo.svg",
    description: "A platform for frontend frameworks and static sites",
  },
  {
    id: 14,
    name: "Git",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    description: "A distributed version control system",
  },
  {
    id: 15,
    name: "Bitbucket",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bitbucket-blue-logomark-only.svg",
    description: "A Git repository management solution",
  },
  {
    id: 16,
    name: "Agile",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Agile_logo.svg",
    description: "A set of principles for software development",
  },
  {
    id: 17,
    name: "Java",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    description:
      "A high-level, class-based, object-oriented programming language",
  },
  {
    id: 18,
    name: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
    description:
      "A source-available cross-platform document-oriented database program",
  },
  {
    id: 19,
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    description: "A powerful, open source object-relational database system",
  },
  {
    id: 20,
    name: "Docker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    description:
      "A set of platform as a service products that use OS-level virtualization",
  },
  {
    id: 21,
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    id: 22,
    name: "NestJS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/NestJS_Logo.svg",
    description:
      "A progressive Node.js framework for building efficient, reliable and scalable server-side applications",
  },
  {
    id: 23,
    name: "Spring Boot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    description:
      "An open source Java-based framework used to create a micro Service",
  },
  {
    id: 24,
    name: "Redis",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
    description:
      "An open source, in-memory data structure store, used as a database, cache, and message broker",
  },
  {
    id: 25,
    name: "Remix",
    logo: "https://remix.run/img/brand/logo.svg",
    description: "A React framework for building better user experiences",
  },
  {
    id: 26,
    name: "HLS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/HTTP_Live_Streaming_logo.svg",
    description: "A communications protocol for delivering media streams",
  },
  {
    id: 27,
    name: "Video.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Videojs_logo.svg",
    description: "An open source HTML5 video player",
  },
  {
    id: 28,
    name: "Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    description: "A minimal and flexible Node.js web application framework",
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
          marginBottom: "2rem",
          fontFamily: "monospace",
          textTransform: "uppercase",
          background: "linear-gradient(90deg, #3da2dc, #63b4e3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        Hard Skills
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: "1rem",
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
          <Tooltip title={tech.description}>
            <Chip
              key={tech.id}
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
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#616161",
                  cursor: "pointer",
                },
              }}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
