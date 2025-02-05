import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Link,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

const messageSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().nonempty("Message is required"),
});

type MessageFormData = z.infer<typeof messageSchema>;

export default function ContactMeDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<MessageFormData>({
    mode: "onBlur",
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = (data: MessageFormData) => {
    console.log(data);
    toast("Sua mensagem foi recebida com sucesso", {});
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          background: "#333",
          color: "white",
        },
      }}
    >
      <DialogTitle>Vamos nos conectar? Me envie uma mensagem</DialogTitle>
      <DialogContent>
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontSize: "1.1rem",
          }}
        >
          Sua mensagem será enviada para meu E-mail. Sinta-se livre para me
          enviar também
        </Typography>
        <Link
          href="mailto:pdemeu.pessoal@gmail.com"
          sx={{
            color: "inherit",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          pdemeu.pessoal@gmail.com
        </Link>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            mt: "2rem",
          }}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.name ? "red" : "white",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.name ? "red" : "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.name ? "red" : "primary.main",
                    },
                  },
                }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.email ? "red" : "white",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.email ? "red" : "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.email ? "red" : "primary.main",
                    },
                  },
                }}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message?.message}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.message ? "red" : "white",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.message ? "red" : "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.message ? "red" : "primary.main",
                    },
                  },
                }}
              />
            )}
          />
          <DialogActions sx={{ my: 2, px: 3, gap: 4 }}>
            <Button onClick={onClose} color="inherit">
              Cancelar
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!isValid}
            >
              Enviar Mensagem
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
