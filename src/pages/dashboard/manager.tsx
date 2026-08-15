import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { CreateTaskModal } from "../../components/manager/create-task-modal";

export function ManagerPage() {
  const [openCreateTaskModal, setOpenCreateTaskModal] = useState(false);

  return (
    <Container className="flex flex-col p-8">
      <Box className="flex justify-between items-center">
        <Typography>Gerenciar tarefas</Typography>
        <Button className="" variant="contained" onClick={() => setOpenCreateTaskModal(true)}>
          Criar nova tarefa
        </Button>

        {/** Popup de criar tarefa */}
        <CreateTaskModal isOpen={openCreateTaskModal} close={() => setOpenCreateTaskModal(false)} />
      </Box>
    </Container>
  );
}
