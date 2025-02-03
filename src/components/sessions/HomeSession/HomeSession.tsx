import { Box, Button, Typography } from "@mui/material";

export default function HomeSession() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
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
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "2.5rem",
              fontWeight: 700,
              mb: "0.5rem",
            }}
          >
            Olá, eu sou Pedro Demeu
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "#ccc",
            }}
          >
            Desenvolvedor Full-Stack | Engenheiro de Software
          </Typography>
        </Box>
        <img
          src="https://github.com/pedro-demeu.png"
          alt="Pedro Demeu"
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            border: "2px solid #111",
            boxShadow: "0 0 10px #111",
            marginRight: "2.5rem",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "1.2rem",
          mb: "1rem",
          fontWeight: 500,
          color: "#ccc",
          mt: "1rem",
        }}
      >
        Sobre
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          color: "#aaa",
          mb: "1rem",
        }}
      >
        Eu sou o <strong>Pedro</strong>, um{" "}
        <strong>engenheiro de software</strong> com 5 anos de experiência, que transforma ideias em{" "}
        <strong>produtos digitais incríveis.</strong> Meu trabalho vai além de
        escrever código: eu entendo o seu negócio e construo{" "}
        <strong>interfaces simples e eficientes</strong> que resolvem problemas
        reais do seu negócio.
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          color: "#aaa",
          mb: "2rem",
        }}
      >
        Atualmente, estou atuando como <strong>desenvolvedor frontend</strong>{" "}
        em um produto de
        <strong> videomonitoramento</strong>, usando <strong>React</strong> e{" "}
        <strong>TypeScript</strong> para entregar soluções que funcionam bem e
        geram valor para os clientes.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            textTransform: "none",
          }}
        >
          Conhecer Mais
        </Button>
        <Button
          sx={{
            backgroundColor: "#f0f0f0",
            color: "#191919",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
            textTransform: "none",
          }}
        >
          Contate-me 👋
        </Button>
      </Box>
    </Box>
  );
}
