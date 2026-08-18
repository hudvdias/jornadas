import { Container, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { TaskComponent } from "../../components/task-component";
import { api } from "../../libraries/axios";
import type { Task } from "../../types/types";

export function DashboardPage() {
  // const queryClient = useQueryClient();

  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await api.get<Task[]>("/tasks?userId=a");
      return response.data;
    },
  });

  if (tasksQuery.isLoading) {
    return (
      <Container>
        <Typography>Carregando...</Typography>
      </Container>
    );
  }

  if (!tasksQuery.data || tasksQuery.data.length === 0) {
    return (
      <Container className="p-4">
        <Typography>Nenhuma tarefa para hoje.</Typography>
      </Container>
    );
  }

  if (tasksQuery.data.length > 0) {
    return (
      <Container className="p-4">
        <Stack spacing={1}>
          {tasksQuery.data.map((task) => {
            return <TaskComponent key={task.id} task={task} />;
          })}
        </Stack>
      </Container>
    );
  }

  return <></>;
}
