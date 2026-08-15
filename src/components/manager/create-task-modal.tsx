import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useContext, useState, type SubmitEvent } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { api } from "../../libraries/axios";

type Props = {
  isOpen: boolean;
  close: () => void;
};

export function CreateTaskModal(props: Props) {
  const [title, setTitle] = useState("");
  const useAuth = useContext(AuthContext);

  async function createTask(event: SubmitEvent) {
    event.preventDefault();
    if (!title) return;
    await api.post("/tasks", { userId: useAuth?.user?.id, status: "todo", title });
    alert("Tarefa criada com sucesso!");
    setTitle("");
    props.close();
  }

  return (
    <Dialog open={props.isOpen} fullWidth maxWidth="sm" component={"form"} onSubmit={(event) => createTask(event)}>
      <DialogTitle>Criar Tarefa</DialogTitle>
      <DialogContent>
        <TextField size="small" label="Tarefa" required fullWidth value={title} onChange={(event) => setTitle(event.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" type="submit">
          Criar Tarefa
        </Button>
        <Button color="error" type="reset" onClick={() => props.close()}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
