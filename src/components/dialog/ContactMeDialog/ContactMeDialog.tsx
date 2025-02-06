import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useState } from "react";

const messageSchema = z.object({
  name: z.string().min(4, "O nome deve ter pelo menos 4 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type MessageFormData = z.infer<typeof messageSchema>;

export default function ContactMeDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<MessageFormData>({
    mode: "onChange",
    resolver: zodResolver(messageSchema),
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data: MessageFormData) => {
    console.log({
      data,
    });

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulando envio de mensagem
      toast.success("Recebi sua mensagem! 😊");
      handleClose();
    } catch (error) {
      toast.error("Erro ao enviar mensagem");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
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
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Vamos nos conectar? Envie-me uma mensagem!
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            mt: "1rem",
          }}
        >
          {["name", "email", "message"].map((field, index) => (
            <Controller
              key={field}
              name={field as keyof MessageFormData}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  {...controllerField}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  variant="outlined"
                  fullWidth
                  multiline={field === "message"}
                  rows={field === "message" ? 4 : 1}
                  autoFocus={index === 0}
                  error={!!errors[field as keyof MessageFormData]}
                  helperText={errors[field as keyof MessageFormData]?.message}
                  sx={{
                    "& .MuiInputBase-root": { color: "white" },
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                      "&:hover fieldset": { borderColor: "#bbb" },
                      "&.Mui-focused fieldset": { borderColor: "primary.main" },
                    },
                  }}
                />
              )}
            />
          ))}
          <DialogActions sx={{ mt: 2, justifyContent: "space-between" }}>
            <Button onClick={handleClose} sx={{ color: "white" }}>
              Cancelar
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!isValid || loading}
              startIcon={
                loading ? <CircularProgress size={20} color="inherit" /> : null
              }
              sx={{
                "&:disabled": {
                  backgroundColor: "gray",
                  color: "#ddd",
                },
              }}
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
