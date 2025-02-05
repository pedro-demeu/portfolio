import { Box, Typography, Link, IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function FooterSession() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "white",
        padding: "2rem",
        textAlign: "center",
        borderTop: "1px solid #444",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Gostou do perfil? Vamos nos conectar!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Você será bem-vindo em minhas redes
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 4 }}
      >
        <Link
          href="https://www.linkedin.com/in/pedro-demeu"
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
        <Link href="mailto:pdemeu.pessoal@gmail.com">
          <Tooltip title="Email">
            <IconButton sx={{ color: "white" }}>
              <EmailIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Link>
      </Box>

      <footer>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          Pedro Miguel Neves Demeu
          <Tooltip title="Disponível">
            <Box
              sx={(theme) => ({
                height: 8,
                width: 8,
                bgcolor: theme.palette.success.light,
                borderRadius: "100%",
              })}
            />
          </Tooltip>
        </Typography>
        <Typography variant="body2" mt={1} sx={{ color: "gray" }}>
          2019 - {currentYear}
        </Typography>
      </footer>
    </Box>
  );
}