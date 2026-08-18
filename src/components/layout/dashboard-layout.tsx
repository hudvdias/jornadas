import { Checklist, Close, EditNote, Logout, Menu } from "@mui/icons-material";
import { AppBar, Box, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../../contexts/auth-context";

export function DashboardLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  const useAuth = useContext(AuthContext);

  return (
    <Container disableGutters className="flex flex-col w-full max-w-screen h-full max-h-screen">
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setOpenMenu(true)}>
            <Menu />
          </IconButton>
          <Typography className="ml-2">Olá, {useAuth?.user?.username}!</Typography>
        </Toolbar>
      </AppBar>

      {/** Main menu drawer */}
      <MainMenu isOpen={openMenu} close={() => setOpenMenu(false)} />

      {/** Render content */}
      <Container maxWidth="md" disableGutters>
        <Outlet />
      </Container>
    </Container>
  );
}

type MainMenuProps = {
  isOpen: boolean;
  close: () => void;
};

function MainMenu(props: MainMenuProps) {
  const useAuth = useContext(AuthContext);
  const menuOptions = [
    { title: "Tarefas", path: "/dashboard", icon: <Checklist /> },
    { title: "Gerenciar", path: "/manager", icon: <EditNote /> },
  ];

  return (
    <Drawer open={props.isOpen}>
      <Box className="w-xs h-screen flex flex-col">
        <Box className="p-2 flex">
          <IconButton className="ml-auto" onClick={() => props.close()}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {menuOptions.map((option) => (
            <NavLink to={option.path} onClick={() => close} key={option.title}>
              {({ isActive }) => (
                <ListItem disablePadding className={isActive ? "text-cyan-500" : ""}>
                  <ListItemButton>
                    <ListItemIcon className={isActive ? "text-cyan-500" : ""}>{option.icon}</ListItemIcon>
                    <ListItemText primary={option.title} />
                  </ListItemButton>
                </ListItem>
              )}
            </NavLink>
          ))}
        </List>

        <List className="mt-auto">
          <ListItem disablePadding>
            <ListItemButton onClick={() => useAuth?.logout()}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
