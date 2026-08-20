import { MoreVert, TaskAlt, Tune } from "@mui/icons-material";
import { Alert, Card, CardContent, Container, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";

export function DashboardPage() {
  {
    /*  Move to an Campaign Card component */
  }
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className="p-6">
      <Stack spacing={1}>
        <Card>
          <CardContent className="flex items-center justify-between">
            <Typography>Campanha: Quinta, 20/08/2026</Typography>
            <IconButton size="small" onClick={(event) => handleClick(event)}>
              <MoreVert fontSize="small" />
            </IconButton>

            <Menu open={open}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <TaskAlt />
                </ListItemIcon>
                <ListItemText>Finalizar campanha</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Tune />
                </ListItemIcon>
                <ListItemText>Filtrar missões</ListItemText>
              </MenuItem>
            </Menu>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack spacing={1}>
              <Typography>Missões ativas</Typography>
              <Alert
                severity="info"
                variant="standard"
                action={
                  <IconButton size="small">
                    <MoreVert fontSize="small" />
                  </IconButton>
                }
              >
                Acordar às 6h
              </Alert>
              <Alert severity="info" variant="standard">
                Tomar banho
              </Alert>
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
