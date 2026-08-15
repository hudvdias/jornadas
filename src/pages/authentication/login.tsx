import { Button, Card, CardContent, Container, Link, TextField, Typography } from "@mui/material";
import { useContext, useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/auth-context";
import { api } from "../../libraries/axios";
import type { User } from "../../types/types";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const useAuth = useContext(AuthContext);
  const navigate = useNavigate();

  async function login(event: SubmitEvent) {
    event.preventDefault();
    try {
      const response = await api.get<User[]>(`/users?username=${username}`);
      const user = response.data[0];
      if (!user) {
        alert("Usuário não encontrado.");
        return;
      }
      console.log({ useAuth, login: useAuth?.login });
      await useAuth?.login(user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert((error as Error).message);
    }
  }

  return (
    <Container className="flex flex-col items-center h-screen p-8">
      <Card className="w-md">
        <CardContent className="flex flex-col gap-4 items-center" component={"form"} onSubmit={(event) => login(event)}>
          <Typography>Continue sua jornada</Typography>

          <TextField label="Nome de usuário" required fullWidth value={username} onChange={(event) => setUsername(event.target.value)} size="small" />
          <TextField label="Senha" required type="password" fullWidth value={password} onChange={(event) => setPassword(event.target.value)} size="small" />
          <Button variant="contained" type="submit" fullWidth>
            Entrar
          </Button>

          <Typography>
            Ainda não tem uma conta? <Link href="/register">Criar conta</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
