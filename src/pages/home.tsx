import { Button, Container, Typography } from "@mui/material";

export function HomePage() {
  return (
    <Container className="flex flex-col items-center p-8 h-screen gap-4">
      <Typography variant="h2">Jornadas</Typography>
      <Typography color="textSecondary" className="">
        App de tarefas.
      </Typography>
      <Button className="" variant="contained" href="/login">
        Iniciar jornada
      </Button>
    </Container>
  );
}
