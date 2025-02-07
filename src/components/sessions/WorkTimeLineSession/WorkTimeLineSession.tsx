import { Box, Chip, Container, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import WorkIcon from "@mui/icons-material/Work";

export default function WorkTimeLineSession() {
  const workExperiences = [
    {
      year: "2021 - 2025 (atualmente)",
      company: "Segware Security Performance",
      role: "Frontend Software Engineer (Pleno)",
      description:
        "Na Segware, contribuo significativamente para o desenvolvimento de novas funcionalidades e aprimoramento dos produtos da empresa, impactando milhares de clientes. Mantenho o Frontend do Produto VMS Cloud, e ajudo o mundo a ser um lugar mais seguro.",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "CSS",
        "MUI",
        "CYPRESS",
        "Docker",
        "Java",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      year: "2020 - 2021",
      company: "BlockIT Security",
      role: "FullStack Software Engineer (Part-time)",
      description:
        "Na BlockIT, uma software house, tive um papel ativo e essencial no desenvolvimento de software. Contribuí significativamente para a melhoria contínua de softwares existentes, garantindo uma experiência otimizada para os usuários. Além disso, participei ativamente da criação e implementação de novos projetos inovadores, incluindo ERPs, CRMs e Landing Pages.",
      skills: [
        "Python",
        "Django",
        "PostgreSQL",
        "Express",
        "JavaScript",
        "Bootstrap",
        "JQuery",
      ],
    },
    {
      year: "2020 - 2021",
      company: "Provedor de Internet - Intera",
      role: "Suporte Técnico | Python | AngularJS | Redes | Atendimento ao Cliente | Administrativo",
      description:
        "Trabalhei como Suporte Técnico na Intera Internet, onde fui responsável pelo monitoramento de clientes e suporte técnico. Além das habilidades técnicas, desenvolvi minha capacidade de atendimento ao cliente e trabalhei bastante minhas soft skills. Meu gestor disponibilizava acesso à plataforma Alura como benefício, o que me permitiu aprofundar meus conhecimentos em tecnologia, assistindo a mais de 100 horas de cursos durante meu período na empresa. Essa experiência foi fundamental para meu crescimento profissional, combinando aprendizado prático e teórico.",
      skills: [
        "Python",
        "AngularJS",
        "Networking",
        "Customer Service",
        "Administrative",
        "React",
        "ERP"
      ],
    },
    {
      year: "2016 - 2018",
      company: "Grupo Ferreira Neves",
      role: "Trainee Software Developer | Java Swing - JavaFX - PHP - JQuery - Bootstrap",
      description:
        "Desenvolvi um sistema de controle de acesso e monitoramento para a segurança de condomínios, utilizando Java Swing para a interface desktop e PostgreSQL para gerenciar cadastros e registros de entrada/saída. O sistema gerava relatórios diários para a equipe de segurança e enviava notificações por e-mail e SMS em caso de incidentes. Esse projeto me proporcionou experiência em desenvolvimento de aplicações desktop, design de banco de dados e lógica de programação.",
      skills: ["Java Swing", "JavaFX", "PHP", "JQuery", "Bootstrap", "HTML", "CSS"],
    },
  ];

  return (
    <Box
      id="work-timeline"
      sx={{
        padding: "2rem",
        paddingTop: "2rem",
        width: "100%",
        margin: "0 auto",
        textAlign: "left",
        color: "#f0f0f0",
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
          Experiência
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "2rem",
            textTransform: "uppercase",
            fontWeight: 700,
            mt: "0.5rem",
          }}
        >
          Profissional
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "2rem",
            textTransform: "none",
            fontWeight: 400,
            textAlign: "justify",
            color: "#b0b0b0",
            maxWidth: "600px",
            margin: "0 auto",
            mb: 6,
          }}
        >
          Nessa sessão, compartilho minhas{" "}
          <strong>experiências profissionais</strong> e trajetória no{" "}
          <strong>mercado de trabalho</strong>, destacando minhas{" "}
          <strong>contribuições</strong> e <strong>aprendizados</strong> ao
          longo dos anos.
        </Typography>
        <Timeline position="alternate">
          {workExperiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0", color: "#f0f0f0", opacity: 0.7 }}
                align="right"
                variant="body2"
              >
                {experience.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    background: "linear-gradient(45deg, #ff8a00, #e52e71)",
                  }}
                >
                  <WorkIcon sx={{ color: "#fff" }} fontSize="small" />
                </TimelineDot>
                {index !== workExperiences.length - 1 && (
                  <TimelineConnector
                    sx={{
                      background: "linear-gradient(45deg, #ff8a00, #e52e71)",
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 700, color: "#f0f0f0" }}
                >
                  {experience.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#f0f0f0", opacity: 0.7 }}
                >
                  {experience.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#f0f0f0", opacity: 0.7, mt: 1 }}
                >
                  {experience.description}
                </Typography>
                <Typography sx={{
                  mt: 4,
                }}>Competências</Typography>
                <br />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {experience.skills?.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      sx={{
                        background: "linear-gradient(45deg, #ff8a00, #e52e71)",
                        color: "#fff",
                      }}
                    />
                  ))}
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
