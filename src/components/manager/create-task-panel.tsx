import { Close } from "@mui/icons-material";
import { Box, Button, CardContent, Divider, Drawer, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext, useState, type SubmitEvent } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { api } from "../../libraries/axios";

type Props = {
  isOpen: boolean;
  close: () => void;
};

export function CreateTaskPanel(props: Props) {
  const [title, setTitle] = useState<string>("");
  const [recurrency, setRecurrency] = useState<string>("once");
  const [date, setDate] = useState<string>("");

  const useAuth = useContext(AuthContext);

  async function createTask(event: SubmitEvent) {
    event.preventDefault();
    if (!title) return;
    await api.post("/tasks", { userId: useAuth?.user?.id, status: "todo", title });
    alert("Tarefa criada com sucesso!");
    onClose();
  }

  async function onClose() {
    setTitle("");
    props.close();
  }

  return (
    <Drawer open={props.isOpen} anchor="right">
      <Box className="flex flex-col h-screen w-sm">
        <CardContent>
          <IconButton onClick={props.close}>
            <Close />
          </IconButton>
        </CardContent>

        <Divider />

        <CardContent component="form">
          <Stack spacing={2}>
            <Typography>Adicionar missão</Typography>

            <TextField label="Missão" placeholder="Descreva a sua missão" />

            <FormControl>
              <InputLabel id="recurrency-label">Repetição</InputLabel>
              <Select labelId="recurrency-label" id="recurrency-select" value={recurrency} label="Repetição" onChange={(event) => setRecurrency(event.target.value)}>
                <MenuItem value="once">Nunca repetir</MenuItem>
                <MenuItem value="daily">Diariamente</MenuItem>
                <MenuItem value="weekly">Semanalmente</MenuItem>
                <MenuItem value="monthly">Mensalmente</MenuItem>
              </Select>
            </FormControl>

            <DatePicker onChange={(data) => console.log({ data })} />

            <Button variant="contained">Adicionar missão</Button>
          </Stack>
        </CardContent>
      </Box>
    </Drawer>
  );
}
