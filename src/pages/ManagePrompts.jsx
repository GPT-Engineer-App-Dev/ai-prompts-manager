import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function ManagePrompts() {
  const [prompts, setPrompts] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState({ text: "", tags: "" });

  const handleAddPrompt = () => {
    setPrompts([...prompts, { ...currentPrompt, id: prompts.length + 1, date: new Date().toLocaleDateString() }]);
    setCurrentPrompt({ text: "", tags: "" });
  };

  const handleEditPrompt = (id) => {
    const prompt = prompts.find((p) => p.id === id);
    setCurrentPrompt(prompt);
  };

  const handleDeletePrompt = (id) => {
    setPrompts(prompts.filter((p) => p.id !== id));
  };

  return (
    <div className="p-4">
      <Button variant="primary" onClick={() => setCurrentPrompt({ text: "", tags: "" })}>
        <DialogTrigger asChild>
          <span>Add Prompt</span>
        </DialogTrigger>
      </Button>
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentPrompt.id ? "Edit Prompt" : "Add Prompt"}</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              currentPrompt.id ? handleEditPrompt(currentPrompt.id) : handleAddPrompt();
            }}
          >
            <Input
              placeholder="Prompt Text"
              value={currentPrompt.text}
              onChange={(e) => setCurrentPrompt({ ...currentPrompt, text: e.target.value })}
              required
            />
            <Input
              placeholder="Tags"
              value={currentPrompt.tags}
              onChange={(e) => setCurrentPrompt({ ...currentPrompt, tags: e.target.value })}
              required
            />
            <Button type="submit">{currentPrompt.id ? "Save Changes" : "Add Prompt"}</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Prompt Text</TableHead>
            <TableHead>Date Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prompts.map((prompt) => (
            <TableRow key={prompt.id}>
              <TableCell>{prompt.id}</TableCell>
              <TableCell>{prompt.text}</TableCell>
              <TableCell>{prompt.date}</TableCell>
              <TableCell>
                <Button variant="secondary" onClick={() => handleEditPrompt(prompt.id)}>
                  Edit
                </Button>
                <Button variant="destructive" onClick={() => handleDeletePrompt(prompt.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ManagePrompts;