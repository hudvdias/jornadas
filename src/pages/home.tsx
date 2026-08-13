import { Button, Container, Typography } from "@mui/material";

export function HomePage() {
  return (
    <Container className="flex flex-col items-center p-8 h-screen">
      <Typography variant="h2" className="mt-8!">
        Jornadas
      </Typography>
      <Typography color="textSecondary" className="mt-2!">
        App de tarefas.
      </Typography>
      <Button className="mt-8!000" variant="contained" href="/login">
        Iniciar jornada
      </Button>
    </Container>
  );
}
