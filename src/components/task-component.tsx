import { Remove } from "@mui/icons-material";
import { Alert, Box, Card, CardActionArea, IconButton, type AlertColor, type AlertProps } from "@mui/material";
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
        <CardActionArea>
          <Alert variant={statusConfig[props.task.status].variant} severity={statusConfig[props.task.status].severity}>
            {props.task.title} {hasStep && `(${stepQuery.data.length})`}
          </Alert>
        </CardActionArea>
        {hasStep && (
          <IconButton>
            <Remove />
          </IconButton>
        )}
      </Box>
      {stepQuery.data?.map((step) => {
        return <Alert key={step.id}>{step.title}</Alert>;
      })}
    </Card>
  );
}
