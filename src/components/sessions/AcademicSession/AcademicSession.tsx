import {
  Typography,
  Box,
  Container,
} from "@mui/material";
import unoparLogo from "../../../assets/unopar_transparente_100x86.png";
import diplomaImage from "../../../assets/diploma.png";
import frontImage from "../../../assets/FRONTEND-certificate.png";
import seImage from "../../../assets/SoftwareEngineer-certificate.png";

import hackerRankLogo from "../../../assets/hackerrank_resized_100x86.png";
import { useState } from "react";
import { DegreeDialog } from "../../dialog";
import { BadgeCertificationItem } from "./BadgeCertificationItem";

export default function AcademicSession() {
  const [openDegree, setOpenDegree] = useState(false);
  const [openFront, setOpenFront] = useState(false);
  const [openSoftEng, setOpenSoftEng] = useState(false);

  const handleClose = () => {
    setOpenDegree(false);
  };

  const handleOpen = () => {
    setOpenDegree(true);
  };

  const handleCloseFront = () => {
    setOpenFront(false);
  };

  const handleOpenFront = () => {
    setOpenFront(true);
  };

  const handleCloseSoftEng = () => {
    setOpenSoftEng(false);
  };

  const handleOpenSoftEng = () => {
    setOpenSoftEng(true);
  };
  return (
    <Box
      sx={{
        padding: "2rem",
        paddingTop: "4rem",
        width: "100%",
        margin: "0 auto",
        height: "100%",
        textAlign: "left",
        bgcolor: "#191919",
      }}
    >
      <Container
        sx={{
          maxWidth: "800px!important",
        }}
      >
        <Typography
          component="h2"
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
          Resultados Acadêmicos
        </Typography>
        <Typography
          component="h3"
          variant="h4"
          sx={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            fontWeight: 700,
            mt: "1rem",
            textAlign: "center",
          }}
        >
          Ensino Superior - Completo 🎓
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8rem",
            color: "#ccc",
            marginBottom: "4rem",
          }}
        >
          Ao longo do Bacharel em <strong>Engenharia de Software</strong>,
          vivenciei projetos com as linguagens de programação como{" "}
          <strong>Java</strong>, <strong>Python</strong>,{" "}
          <strong>JavaScript</strong> e <strong>C++</strong>, além de frameworks
          como <strong>Spring Boot</strong>, <strong>Django</strong> e{" "}
          <strong>React</strong>. Também adquiri experiência com bancos de dados
          relacionais (<strong>MySQL</strong>, <strong>PostgreSQL</strong>) e
          não relacionais (<strong>MongoDB</strong>), e ferramentas de controle
          de versão como <strong>Git</strong> e toda a parte de gestão de
          projetos, de ponta a ponta, sendo capaz de atuar em qualquer etapa do
          processo de desenvolvimento.
        </Typography>

        <Box
          sx={{
            mb: 6,
          }}
        >
          <BadgeCertificationItem
            src={unoparLogo}
            title="Engenharia de Software"
            entityName="Universidade Pitágoras Unopar Anhanguera"
            actionText="Visualizar Diploma"
            startYear={2020}
            endYear={2024}
            openCertificate={handleOpen}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontSize: "1rem",
            marginBottom: "2rem",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Cursos relevantes
        </Typography>
        <Box
          sx={{
            mb: 4,
          }}
        >
          <BadgeCertificationItem
            src={hackerRankLogo}
            title="Frontend Deveveloper (React.js)"
            entityName="HackerRank"
            actionText="Visualizar Certificado"
            startYear={2020}
            openCertificate={handleOpenFront}
            description="It covers topics like React, CSS, and JavaScript."
          />
        </Box>
        <Box
          sx={{
            mb: 4,
          }}
        >
          <BadgeCertificationItem
            src={hackerRankLogo}
            title="Software Engineer"
            entityName="HackerRank"
            actionText="Visualizar Certificado"
            startYear={2020}
            openCertificate={handleOpenSoftEng}
            description="It covers topics like Problem solving, SQL, and REST API."
          />
        </Box>
        <DegreeDialog
          open={openDegree}
          name="Diploma"
          onClose={handleClose}
          src={diplomaImage}
          alt="Diploma"
        />
        <DegreeDialog
          open={openFront}
          name="Certificado"
          onClose={handleCloseFront}
          src={frontImage}
          alt="Certificado Frontend"
        />
        <DegreeDialog
          open={openSoftEng}
          name="Certificado"
          onClose={handleCloseSoftEng}
          src={seImage}
          alt="Certificado Software Engineer"
        />
      </Container>
    </Box>
  );
}