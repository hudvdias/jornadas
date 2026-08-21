import { KeyboardTab, MoreVert, TaskAlt, Tune } from "@mui/icons-material";
import { Alert, Box, Card, CardContent, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import { useState } from "react";

export function CampaignCard() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Card>
        <CardContent className="flex items-center justify-between">
          <Typography>Campanha: Quinta, 20/08/2026</Typography>
          <IconButton size="small" onClick={() => setIsMenuOpen(true)}>
            <MoreVert fontSize="small" />
          </IconButton>
        </CardContent>
      </Card>

      <CampaignMenu isOpen={isMenuOpen} close={() => setIsMenuOpen(false)} />
    </>
  );
}

type CampaignMenuProps = {
  isOpen: boolean;
  close: () => void;
};

function CampaignMenu(props: CampaignMenuProps) {
  return (
    <Drawer open={props.isOpen} anchor="right">
      <Box className="flex flex-col w-sm  h-screen">
        <CardContent>
          <IconButton onClick={props.close}>
            <KeyboardTab />
          </IconButton>
        </CardContent>

        <Divider />

        <List>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TaskAlt />
              </ListItemIcon>
              <ListItemText>Concluir campanha</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Tune />
              </ListItemIcon>
              <ListItemText>Filtrar missões</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

// Move to quest card
function QuestMenu(props: CampaignMenuProps) {
  return (
    <Drawer open={props.isOpen} anchor="right">
      <Box className="flex flex-col w-sm  h-screen">
        <CardContent>
          <IconButton onClick={props.close}>
            <KeyboardTab />
          </IconButton>
        </CardContent>

        <Divider />

        <List>
          <ListSubheader>Ações da missão</ListSubheader>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <Alert severity="info" className="w-full">
                Aceitar Missão
              </Alert>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <Alert severity="warning" className="w-full">
                Adiar Missão
              </Alert>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <Alert severity="success" className="w-full">
                Concluir Missão
              </Alert>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <Alert severity="error" className="w-full">
                Abandonar Missão
              </Alert>
            </ListItemButton>
          </ListItem>
          <ListSubheader>Outras ações</ListSubheader>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <Alert severity="warning" className="w-full">
                Mover missão para outro dia
              </Alert>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <Alert severity="warning" className="w-full">
                Mover missão para o Backlog
              </Alert>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
