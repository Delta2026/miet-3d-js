"use client";

import { useState } from "react";
import { Idea } from "@/types/idea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  onAdd: (idea: Idea) => void;
};

export default function IdeaForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(1);
  const [status, setStatus] = useState<"idea" | "in-progress" | "done">("idea");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim()) return;

    const newIdea: Idea = {
      id: crypto.randomUUID(),
      title,
      category: category || undefined,
      priority,
      status,
    };

    onAdd(newIdea);

    setTitle("");
    setCategory("");
    setPriority(1);
    setStatus("idea");
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <Input
        placeholder="Название идеи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Категория (необязательно)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <Input
        type="number"
        min={1}
        max={5}
        placeholder="Приоритет (1–5)"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      />

      <Select
        value={status}
        onValueChange={(value) =>
          setStatus(value as "idea" | "in-progress" | "done")
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Статус" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="idea">Идея</SelectItem>
          <SelectItem value="in-progress">В работе</SelectItem>
          <SelectItem value="done">Готово</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit">Добавить идею</Button>
    </form>
  );
}
