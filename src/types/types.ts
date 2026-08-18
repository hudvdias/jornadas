// Client structure

export type User = {
  id: string;
  username: string;
  password: string;
};

// Date structure

export type Year = {
  id: string;
  userId: string;
  number: number;
};

export type Month = {
  id: string;
  userId: string;
  number: number;
};

export type Week = {
  id: string;
  userId: string;
  number: number;
};

export type day = {
  id: string;
  userId: string;
  date: string;
};

// Data structure

export type Category = {
  id: string;
  userId: string;
  title: string;
};

export type TaskStatus = "todo" | "doing" | "done" | "failed";
export type TaskRecurrency = "once" | "daily" | "weekly" | "monthly" | "annual";

export type Task = {
  id: string;
  userId: string;
  categoryId: string;
  title: string;
  status: TaskStatus;
  recurrency: TaskRecurrency;
  date: string; // Format: 2026-01-01
};

export type Step = {
  id: string;
  taskId: string;
  title: string;
  status: TaskStatus;
};
