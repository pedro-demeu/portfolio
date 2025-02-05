import { Dialog, DialogTitle, DialogContent, Typography, Box } from "@mui/material";

export default function DegreeDialog({
  open,
  name,
  onClose,
  alt,
  src,
}: {
  open: boolean;
  name: string;
  onClose: () => void;
  src: string;
  alt: string;
}) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xl"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          background: "#222",
          color: "white",
          borderRadius: "10px",
          padding: "1.5rem",
        },
      }}
    >
      <DialogTitle
        sx={{ textAlign: "left", fontWeight: "bold", fontSize: "2rem" }}
      >
        Visualização de {name}
        <Typography
          variant="body2"
          sx={{
            color: "gray",
          }}
        >
          Esc para sair
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            overflow: "hidden",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}