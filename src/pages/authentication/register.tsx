import { Button, Card, CardContent, Container, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { api } from "../../libraries/axios";
import type { User } from "../../types/types";

export function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // In pogress
  async function createUser() {
    if (!username || !password) return;
    const newUser: User = {
      id: crypto.randomUUID(),
      username,
      password,
    };
    const response = await api.post("/users", { user: newUser });
    console.log({ response });
  }

  return (
    <Container className="flex flex-col items-center h-screen p-8">
      <Card className="w-md">
        <CardContent className="flex flex-col gap-4 items-center" component={"form"} onSubmit={createUser}>
          <Typography>Inicie sua jornada</Typography>

          <TextField label="Nome de usuário" required fullWidth value={username} onChange={(event) => setUsername(event.target.value)} />
          <TextField label="Senha" required type="password" fullWidth value={password} onChange={(event) => setPassword(event.target.value)} />
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
