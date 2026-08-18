import { Add, Clear, ErrorOutlineOutlined, HelpOutlineOutlined, Remove, TaskAlt } from "@mui/icons-material";
import { Alert, AlertTitle, Box, Card, Chip, IconButton, Stack, type AlertColor, type AlertProps } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { api } from "../libraries/axios";
import type { Step, Task } from "../types/types";

type Props = { task: Task };

type StatusConfig = Record<Task["status"], { variant: AlertProps["variant"]; severity: AlertColor; icon: ReactNode }>;

const statusConfig: StatusConfig = {
  todo: { variant: "outlined", severity: "warning", icon: <HelpOutlineOutlined /> },
  doing: { variant: "outlined", severity: "info", icon: <ErrorOutlineOutlined /> },
  done: { variant: "standard", severity: "success", icon: <TaskAlt /> },
  failed: { variant: "standard", severity: "error", icon: <Clear /> },
};

export function TaskComponent(props: Props) {
  const [open, setOpen] = useState(true);

  const stepQuery = useQuery({
    queryKey: ["steps", props.task.id],
    queryFn: async () => {
      const response = await api.get<Step[]>(`/steps?taskId=${props.task.id}`);
      return response.data;
    },
  });

  const hasStep = stepQuery.data && stepQuery.data?.length > 0;
  const completedSteps = stepQuery.data?.filter((item) => item.status === "done").length;

  return (
    <Card className="flex flex-col p-2 gap-2">
      <Box className="flex items-center gap-2">
        <Alert
          className="w-full items-center"
          variant={statusConfig[props.task.status].variant}
          severity={statusConfig[props.task.status].severity}
          icon={
            <IconButton color={statusConfig[props.task.status].severity} className="w-max h-max">
              {statusConfig[props.task.status].icon}
            </IconButton>
          }
          action={<IconButton onClick={() => setOpen((value) => !value)}>{open ? <Remove /> : <Add />}</IconButton>}
        >
          <AlertTitle className={`${open ? "" : "m-0"} truncate`}>{props.task.title}</AlertTitle>
          {open && (
            <Stack direction="row" spacing={1}>
              {hasStep && <Chip color="warning" size="small" label={`${completedSteps}/${stepQuery.data.length}`} variant="outlined" />}
              <Chip size="small" label="📖 Estudo" variant="outlined" />
              <Chip size="small" label="Hoje" color="error" variant="outlined" />
            </Stack>
          )}
        </Alert>
      </Box>
      {open &&
        stepQuery.data?.map((step) => {
          return (
            <>
              <Alert
                variant={statusConfig[step.status].variant}
                severity={statusConfig[step.status].severity}
                className="flex items-center py-0 px-4 truncate"
                key={step.id}
                icon={
                  <IconButton color={statusConfig[step.status].severity} className="w-max h-max">
                    {statusConfig[step.status].icon}
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
