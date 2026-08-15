import { Container, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

export function DashboardPage() {
  const useAuth = useContext(AuthContext);

  return (
    <Container>
      <Typography>Olá, {useAuth?.user?.username}!</Typography>
    </Container>
  );
}
