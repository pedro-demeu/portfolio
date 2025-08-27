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
import { useTranslation } from "../../../hooks/useTranslation";

export default function AcademicSession() {
  const { t } = useTranslation();
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
          {t('academic.subtitle')}
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
          {t('academic.title')}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8rem",
            color: "#ccc",
            marginBottom: "4rem",
          }}
          dangerouslySetInnerHTML={{ __html: t('academic.description') }}
        />

        <AnimatedSection animation="fadeInUp" delay={200}>
          <Box
            sx={{
              mb: 6,
            }}
          >
            <BadgeCertificationItem
              src={unoparLogo}
              title={t('academic.items.degree.title')}
              entityName={t('academic.items.degree.entity')}
              actionText={t('academic.viewDiploma')}
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
            {t('academic.certifications')}
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
              title={t('academic.items.amazonQ.title')}
              entityName={t('academic.items.amazonQ.entity')}
              actionText={t('academic.viewCertification')}
              startYear={2025}
              onClick={handleOpenAWSCertification}
              description={t('academic.items.amazonQ.description')}
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
              title={t('academic.items.english.title')}
              entityName={t('academic.items.english.entity')}
              actionText={t('academic.viewCertification')}
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
            {t('academic.relevantCourses')}
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
              title={t('academic.items.frontend.title')}
              entityName={t('academic.items.frontend.entity')}
              actionText={t('academic.viewCertificate')}
              startYear={2020}
              onClick={handleOpenFront}
              description={t('academic.items.frontend.description')}
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
              title={t('academic.items.softwareEngineer.title')}
              entityName={t('academic.items.softwareEngineer.entity')}
              actionText={t('academic.viewCertificate')}
              startYear={2020}
              onClick={handleOpenSoftEng}
              description={t('academic.items.softwareEngineer.description')}
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