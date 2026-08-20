import { Button, Container } from "@mui/material";
import { Navigate } from "react-router";

export function NewCampaignPage() {
  // Change Later
  const activeCampaing = true; // Deve buscar na API uma campanha

  if (!activeCampaing) {
    return (
      <Container>
        <Button>Criar nova campanha</Button>
      </Container>
    );
  }

  if (activeCampaing) {
    <Navigate to="/campaign/campaign.id" />; // TODO
  }
}
