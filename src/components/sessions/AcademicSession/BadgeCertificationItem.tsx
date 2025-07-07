import { Check } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Tooltip,
  Button,
  Link,
} from "@mui/material";
import { useCallback } from "react";

type ItemProps = {
  src: string;
  title: string;
  entityName: string;
  onClick?: () => void;
  actionText: string;
  startYear: number;
  endYear?: number;
  description?: string;
  redirect?: boolean;
  redirectUrl?: string;
};
export function BadgeCertificationItem({
  src,
  title,
  entityName,
  onClick,
  actionText,
  startYear,
  endYear,
  description,
  redirect = false,
  redirectUrl,
}: ItemProps) {
  const handleOpen = useCallback(() => {
    onClick?.();
  }, [onClick]);
  return (
    <Card
      sx={{
        backgroundColor: "#333",
        color: "white",
        borderRadius: 2,
        width: "100%",
        ":hover": {
          boxShadow: "0 0 10px #111",
          transform: "scale(1.02)",
          transition: "0.3s",
          backgroundColor: "#555",
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
          <img src={src} alt={entityName} />
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
                component="h4"
                variant="h6"
                sx={{
                  marginBottom: 1,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {title}
                <Tooltip title="Completo">
                  <Check aria-hidden="true" color="success" />
                </Tooltip>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#AAA",
                  mb: 1,
                }}
              >
                {entityName}
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
                  {startYear} {endYear ? `-${endYear}` : null}
                </Typography>
              </Box>
              {description && <Typography variant="body2"
                sx={{
                  mt: 1,
                  color: "#ccc",
                  textAlign: "justify",
                  fontSize: "0.8rem",
                }}>{description}</Typography>}
            </Box>
            {redirect ? <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{
                width: "50%",
              }}
            >
              <Link href={redirectUrl} target="_blank" sx={(theme) => ({
                color: theme.palette.common.white,
                textDecoration: 'none'
              })}>
                {actionText}
              </Link>
            </Button> :
              <Button
                variant="contained"
                size="small"
                color="primary"
                sx={{
                  width: "50%",
                }}
                onClick={handleOpen}
              >
                {actionText}
              </Button>}
          </Box>
        </Box>

      </CardContent>
    </Card>
  );
}
