import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Tooltip,
} from "@mui/material";
import unoparLogo from "../../../assets/unopar-logo.png";
import hackerRankLogo from "../../../assets/hackerrank_logo.jpeg";

export default function AcademicSession() {
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
        Resultados Acadêmicos
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
        Ensino Superior - Completo{" "}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.8rem",
          color: "#ccc",
          marginBottom: "2rem",
        }}
      >
        Ao longo do Bacharel em <strong>Engenharia de Software</strong>,
        vivenciei projetos com as linguagens de programação como{" "}
        <strong>Java</strong>, <strong>Python</strong>,{" "}
        <strong>JavaScript</strong> e <strong>C++</strong>, além de frameworks
        como <strong>Spring Boot</strong>, <strong>Django</strong> e{" "}
        <strong>React</strong>. Também adquiri experiência com bancos de dados
        relacionais (<strong>MySQL</strong>, <strong>PostgreSQL</strong>) e não
        relacionais (<strong>MongoDB</strong>), e ferramentas de controle de
        versão como <strong>Git</strong> e toda a parte de gestão de projetos,
        de ponta a ponta, sendo capaz de atuar em qualquer etapa do processo de
        desenvolvimento.
      </Typography>

      <Box
        sx={{
          mb: 4,
        }}
      >
        <Card
          sx={{
            backgroundColor: "#222",
            color: "white",
            borderRadius: 2,
            width: "100%",
            ":hover": {
              boxShadow: "0 0 10px #111",
              transform: "scale(1.02)",
              transition: "0.3s",
              backgroundColor: "#333",
            },
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <img
                style={{
                  height: 43,
                  width: 50,
                  marginTop: 20,
                }}
                src={unoparLogo}
                alt="University Logo"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: 1,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    Engenharia de Software{" "}
                    <Tooltip title="Completo">
                      <Box
                        sx={(theme) => ({
                          height: 10,
                          width: 10,
                          bgcolor: theme.palette.success.light,
                          borderRadius: "100%",
                        })}
                      />
                    </Tooltip>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      mb: 1,
                    }}
                  >
                    Universidade Pitágoras Unopar Anhanguera
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ccc",
                        textAlign: "justify",
                        fontSize: "0.8rem",
                      }}
                    >
                      2020 - 2024
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="text"
                  size="small"
                  color="primary"
                  sx={{
                    width: "50%",
                  }}
                >
                  Visualizar Diploma
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
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
        <Card
          sx={{
            backgroundColor: "#222",
            color: "white",
            borderRadius: 2,
            width: "100%",
            ":hover": {
              boxShadow: "0 0 10px #111",
              transform: "scale(1.02)",
              transition: "0.3s",
              backgroundColor: "#333",
            },
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <img
                style={{
                  height: 43,
                  width: 50,
                  marginTop: 20,
                }}
                src={hackerRankLogo}
                alt="University Logo"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: 1,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    Frontend Developer (React)
                    <Tooltip title="Completo">
                      <Box
                        sx={(theme) => ({
                          height: 10,
                          width: 10,
                          bgcolor: theme.palette.success.light,
                          borderRadius: "100%",
                        })}
                      />
                    </Tooltip>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      mb: 1,
                    }}
                  >
                    HackerRank
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ccc",
                        textAlign: "justify",
                        fontSize: "0.8rem",
                      }}
                    >
                      It covers topics like React, CSS, and JavaScript.
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="text"
                  size="small"
                  color="primary"
                  sx={{
                    width: "50%",
                  }}
                >
                  Visualizar Certificado
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          mb: 4,
        }}
      >
        <Card
          sx={{
            backgroundColor: "#222",
            color: "white",
            borderRadius: 2,
            width: "100%",
            ":hover": {
              boxShadow: "0 0 10px #111",
              transform: "scale(1.02)",
              transition: "0.3s",
              backgroundColor: "#333",
            },
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <img
                style={{
                  height: 43,
                  width: 50,
                  marginTop: 20,
                }}
                src={hackerRankLogo}
                alt="University Logo"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: 1,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    Software Engineer{" "}
                    <Tooltip title="Completo">
                      <Box
                        sx={(theme) => ({
                          height: 10,
                          width: 10,
                          bgcolor: theme.palette.success.light,
                          borderRadius: "100%",
                        })}
                      />
                    </Tooltip>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      mb: 1,
                    }}
                  >
                    HackerRank
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ccc",
                        textAlign: "justify",
                        fontSize: "0.8rem",
                      }}
                    >
                      It covers topics like Problem solving, SQL, and REST API.
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="text"
                  size="small"
                  color="primary"
                  sx={{
                    width: "50%",
                  }}
                >
                  Visualizar Certificado
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
