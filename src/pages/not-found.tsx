import { Button, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";

export function NotFounPage() {
  const useAuth = useContext(AuthContext);

  return (
    <Container className="flex flex-col p-8 justify-center h-screen gap-4">
      <Typography variant="h3">Página não encontrada</Typography>
      <Typography color="textSecondary">O caminho solicitado não existe em nossa jornada.</Typography>
      <Button className="w-max" href={useAuth?.isAuthenticated ? "/dashboard" : "/"}>
        Retornar
      </Button>
    </Container>
  );
}
