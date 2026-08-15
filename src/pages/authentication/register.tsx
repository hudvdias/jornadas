import { Button, Card, CardContent, Container, Link, TextField, Typography } from "@mui/material";
import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { api } from "../../libraries/axios";

export function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function createUser(event: SubmitEvent) {
    event.preventDefault();
    if (!username || !password) return;
    const response = await api.post("/users", { username, password });
    console.log({ response });
    alert("usuário criado com sucesso! Você já pode fazer o login.");
    navigate("/login");
  }

  return (
    <Container className="flex flex-col items-center h-screen p-8">
      <Card className="w-md">
        <CardContent className="flex flex-col gap-4 items-center" component={"form"} onSubmit={(event) => createUser(event)}>
          <Typography>Inicie sua jornada</Typography>

          <TextField label="Nome de usuário" required fullWidth value={username} onChange={(event) => setUsername(event.target.value)} size="small" />
          <TextField label="Senha" required type="password" fullWidth value={password} onChange={(event) => setPassword(event.target.value)} size="small" />
          <Button variant="contained" type="submit" fullWidth>
            Criar conta
          </Button>
          <Typography>
            Já tem uma conta? <Link href="/login">Entre</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
