import { Alert, Card, CardActionArea, type AlertColor, type AlertProps } from "@mui/material";
import type { Task } from "../types/types";

type Props = { task: Task };

type StatusConfig = Record<Task["status"], { variant: AlertProps["variant"]; severity: AlertColor }>;

const statusConfig: StatusConfig = {
  todo: { variant: "outlined", severity: "warning" },
  doing: { variant: "filled", severity: "info" },
  done: { variant: "standard", severity: "success" },
  failed: { variant: "standard", severity: "error" },
};

export function TaskComponent(props: Props) {
  return (
    <Card>
      <CardActionArea className="">
        <Alert variant={statusConfig[props.task.status].variant} severity={statusConfig[props.task.status].severity}>
          {props.task.title}
        </Alert>
      </CardActionArea>
    </Card>
  );
}
