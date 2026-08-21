import { Alert, Card, CardActionArea, CardContent, Container, Stack, Typography } from "@mui/material";
import { CampaignCard } from "../../components/dashboard/campaign-card";

export function DashboardPage() {
  return (
    <Container className="p-6">
      <Stack spacing={1}>
        <CampaignCard />

        <Card>
          <CardContent>
            <Stack spacing={1}>
              <Typography>Missões ativas</Typography>
              <CardActionArea>
                <Alert severity="info" variant="standard">
                  Acordar às 6h
                </Alert>
              </CardActionArea>
              <CardActionArea>
                <Alert severity="info" variant="standard">
                  Tomar banho
                </Alert>
              </CardActionArea>
              <Alert severity="info" variant="standard">
                Fazer exercícios
              </Alert>
              <Alert severity="info" variant="standard">
                Café da manhã
              </Alert>
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography>Missões no mapa</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography>Missões das próximas campanhas</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
