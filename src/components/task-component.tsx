import { Remove, TaskAlt, Warning } from "@mui/icons-material";
import { Alert, AlertTitle, Box, Card, Chip, IconButton, Stack, type AlertColor, type AlertProps } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { api } from "../libraries/axios";
import type { Step, Task } from "../types/types";

type Props = { task: Task };

type StatusConfig = Record<Task["status"], { variant: AlertProps["variant"]; severity: AlertColor }>;

const statusConfig: StatusConfig = {
  todo: { variant: "outlined", severity: "warning" },
  doing: { variant: "filled", severity: "info" },
  done: { variant: "standard", severity: "success" },
  failed: { variant: "standard", severity: "error" },
};

export function TaskComponent(props: Props) {
  const stepQuery = useQuery({
    queryKey: ["steps", props.task.id],
    queryFn: async () => {
      const response = await api.get<Step[]>(`/steps?taskId=${props.task.id}`);
      return response.data;
    },
  });

  const hasStep = stepQuery.data && stepQuery.data?.length > 0;

  return (
    <Card className="flex flex-col p-2 gap-2">
      <Box className="flex items-center gap-2">
        <Alert
          className="w-full items-center"
          variant={statusConfig[props.task.status].variant}
          severity={statusConfig[props.task.status].severity}
          icon={
            <IconButton color="warning" className="w-max h-max">
              <Warning />
            </IconButton>
          }
          action={
            hasStep && (
              <IconButton>
                <Remove />
              </IconButton>
            )
          }
        >
          <AlertTitle>{props.task.title}</AlertTitle>
          <Stack direction="row" spacing={1}>
            {hasStep && <Chip size="small" label="2/3" />}
            <Chip size="small" label="📖 Estudo" />
            <Chip size="small" label="Diária" />
          </Stack>
        </Alert>
      </Box>
      {stepQuery.data?.map((step) => {
        return (
          <>
            <Alert
              className="flex items-center"
              key={step.id}
              icon={
                <IconButton size="small" color="success" className="w-max h-max">
                  <TaskAlt />
                </IconButton>
              }
            >
              {step.title}
            </Alert>
          </>
        );
      })}
    </Card>
  );
}
