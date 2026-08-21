import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { CreateTaskPanel } from "../../components/manager/create-task-panel";

export function ManagerPage() {
  const [openCreateTaskPanel, setOpenCreateTaskPanel] = useState(false);

  return (
    <Container className="flex flex-col p-8">
      <Box className="flex justify-between items-center">
        <Typography>Gerenciar tarefas</Typography>
        <Button className="" variant="contained" onClick={() => setOpenCreateTaskPanel(true)}>
          Criar nova tarefa
        </Button>

        {/** Popup de criar tarefa */}
        <CreateTaskPanel isOpen={openCreateTaskPanel} close={() => setOpenCreateTaskPanel(false)} />
      </Box>
    </Container>
  );
}
