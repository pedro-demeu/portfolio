import { Box, Typography } from "@mui/material";
import PIX from "react-qrcode-pix";

export default function PayMeACoffee() {
  return (
    <Box
      sx={{
        padding: "2rem",
        margin: "0 auto",
        height: "100vh",
        width: "100%",
        textAlign: "center",
        bgcolor: "#FAFAFA",
      }}
    >
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
        }}
      >
        Apoie-me pagando um café 
      </Typography>
      <Typography variant="h2" mb={4}>☕</Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#555", maxWidth: '450px', textAlign: 'justify', margin: '0 auto' }}>
        Se você gostou do meu trabalho e quer me agradecer, que tal me pagar um
        café? Basta escanear o QR Code abaixo e enviar um PIX. Qualquer valor é
        bem-vindo! 😊
      </Typography>
      <Box sx={{
        mt: 6,
      }}>
        <PIX
          pixkey="pdemeu@picpay.com.br"
          merchant="Pedro Demeu"
          city="Socorro"
        />
      </Box>
    </Box>
  );
}
