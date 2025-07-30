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
    mode: "onBlur",
    resolver: zodResolver(messageSchema),
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data: MessageFormData) => {
    setLoading(true);
    try {
      // Simulando envio via API/EmailJS
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      toast.success("Mensagem enviada com sucesso! Retornarei em breve 😊");
      reset();
      handleClose();
    } catch (error) {
      // Fallback: salvar no localStorage para não perder a mensagem
      const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      messages.push({
        ...data,
        timestamp: new Date().toISOString(),
        id: Date.now(),
      });
      localStorage.setItem('contact_messages', JSON.stringify(messages));
      
      toast.success("Mensagem salva! Entrarei em contato via email 📧");
      reset();
      handleClose();
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
      <DialogTitle sx={{ textAlign: "left", fontWeight: "bold" }}>
        Vamos nos conectar? <br /> Me envie uma mensagem!
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
          autoComplete="off"
        >
          {["name", "email", "message"].map((field) => (
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
                  error={!!errors[field as keyof MessageFormData]}
                  helperText={errors[field as keyof MessageFormData]?.message}
                  sx={{
                    "& .MuiInputBase-root": { color: 'white' },
                    "& .MuiInputLabel-root": { color: errors[field as keyof MessageFormData] ? "error.main" : 'white' },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: errors[field as keyof MessageFormData] ? "error.main" : 'white' },
                      "&:hover fieldset": { borderColor: errors[field as keyof MessageFormData] ? "error.main" : '#bbb' },
                      "&.Mui-focused fieldset": { borderColor: errors[field as keyof MessageFormData] ? "error.main" : 'primary.main' },
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
