import {
  Typography,
  Box,
  Container,
} from "@mui/material";
import unoparLogo from "../../../assets/unopar_transparente_100x86.png";
import diplomaImage from "../../../assets/diploma.png";
import frontImage from "../../../assets/FRONTEND-certificate.png";
import seImage from "../../../assets/SoftwareEngineer-certificate.png";
import awsLogo from '../../../assets/amazon_logo_100x86.png';
import efSetEnglishLogo from '../../../assets/efset_logo_100x86.png';
import hackerRankLogo from "../../../assets/hackerrank_resized_100x86.png";
import amazonQImage from '../../../assets/aws_certificate.jpeg';
import { useState } from "react";
import { DegreeDialog } from "../../dialog";
import { BadgeCertificationItem } from "./BadgeCertificationItem";
import { AnimatedSection } from "../../core";

export default function AcademicSession() {
  const [openDegree, setOpenDegree] = useState(false);
  const [openFront, setOpenFront] = useState(false);
  const [openSoftEng, setOpenSoftEng] = useState(false);
  const [openAmazonQ, setOpenAmazonQ] = useState(false);
  

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
const handleOpenAWSCertification = () => {
  setOpenAmazonQ(true);
}
  const handleCloseSoftEng = () => {
    setOpenSoftEng(false);
  };

  const handleOpenSoftEng = () => {
    setOpenSoftEng(true);
  };

  const handleCloseAmazonQ = () => {
    setOpenAmazonQ(false);
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

        <AnimatedSection animation="fadeInUp" delay={200}>
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
              onClick={handleOpen}
            />
          </Box>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={400}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "1rem",
              marginBottom: "2rem",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Certificações
          </Typography>
        </AnimatedSection>
        <AnimatedSection animation="fadeInLeft" delay={600}>
          <Box
            sx={{
              mb: 4,
            }}
          >
            <BadgeCertificationItem
              src={awsLogo}
              title="Amazon Q Developer Getting Started"
              entityName="Amazon Web Services (AWS)"
              actionText="Visualizar Certificação"
              startYear={2025}
              onClick={handleOpenAWSCertification}
              description="It covers topics like Code Agent, Vibe Coding and Amazon Q tools"
            />
          </Box>
        </AnimatedSection>

        <AnimatedSection animation="fadeInRight" delay={800}>
          <Box
            sx={{
              mb: 6,
            }}
          >
            <BadgeCertificationItem
              src={efSetEnglishLogo}
              title="English Certificate (B1 Intermediate)"
              entityName="EF SET English"
              actionText="Visualizar Certificação"
              startYear={2025}
              redirectUrl="https://cert.efset.org/en/6LwF65"
              redirect
            />
          </Box>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={1000}>
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
        </AnimatedSection>
        <AnimatedSection animation="fadeInLeft" delay={1200}>
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
              onClick={handleOpenFront}
              description="It covers topics like React, CSS, and JavaScript."
            />
          </Box>
        </AnimatedSection>
        <AnimatedSection animation="fadeInRight" delay={1400}>
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
              onClick={handleOpenSoftEng}
              description="It covers topics like Problem solving, SQL, and REST API."
            />
          </Box>
        </AnimatedSection>
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
        
        <DegreeDialog
          open={openAmazonQ}
          name="Certificado"
          onClose={handleCloseAmazonQ}
          src={amazonQImage}
          alt="Certificado Amazon Q Developer"
        />
      </Container>
    </Box>
  );
}