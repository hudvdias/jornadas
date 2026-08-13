import { Button, Card, CardContent, Container, Link, TextField, Typography } from "@mui/material";

export function LoginPage() {
  return (
    <Container className="flex flex-col items-center h-screen p-8">
      <Card className="w-md">
        <CardContent className="flex flex-col gap-4 items-center" component={"form"}>
          <Typography>Continue sua jornada</Typography>

          <TextField label="Usuário" required fullWidth />
          <TextField label="Senha" required type="password" fullWidth />
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
