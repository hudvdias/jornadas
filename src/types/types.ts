export type User = {
  id: string;
  username: string;
  password: string;
};

export type Task = {
  id: string;
  userId: string;
  title: string;
  status: TaskStatus;
};

export type TaskStatus = "todo" | "doing" | "done" | "failed";

export type Step = {
  id: string;
  taskId: string;
  title: string;
  status: TaskStatus;
};
