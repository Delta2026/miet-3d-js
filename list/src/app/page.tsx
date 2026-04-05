"use client";

import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../ui/table";

type Idea = {
  id: number;
  title: string;
  category: string;
  priority: "низкий" | "средний" | "высокий";
};

const initialIdeas: Idea[] = [
  { id: 1, title: "Тест 1", category: "Категория 1", priority: "высокий" },
  { id: 2, title: "Тест 2", category: "Категория 2", priority: "средний" },
  { id: 3, title: "Тест 3", category: "Категория 3", priority: "низкий" },
  { id: 4, title: "Тест 4", category: "Категория 1", priority: "средний" },
];

export default function IdeasApp() {
  const [ideas, setIdeas] = useState<Idea[]>(initialIdeas);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState<Idea["priority"]>("низкий");

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortPriority, setSortPriority] = useState(false);

  function addIdea() {
    if (!title || !category) return;

    const newIdea: Idea = {
      id: Date.now(),
      title,
      category,
      priority,
    };

    setIdeas([...ideas, newIdea]);

    setTitle("");
    setCategory("");
    setPriority("низкий");
  }

  let filteredIdeas = ideas.filter((idea) => {
    if (categoryFilter === "all") return true;
    return idea.category === categoryFilter;
  });

  if (sortPriority) {
    const order = { высокий: 3, средний: 2, низкий: 1 };

    filteredIdeas = [...filteredIdeas].sort(
      (a, b) => order[b.priority] - order[a.priority]
    );
  }

  const categories = Array.from(new Set(ideas.map((i) => i.category)));

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Список идей</h1>

      <Card>
        <CardContent className="p-4 flex gap-4">

          <input
            className="border p-2 w-full"
            placeholder="Название идеи"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border p-2 w-full"
            placeholder="Категория"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <select
            className="border p-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Idea["priority"])}
          >
            <option className="text-black" value="низкий">Низкий</option>
            <option className="text-black" value="средний">Средний</option>
            <option className="text-black" value="высокий">Высокий</option>
          </select>

          <Button variant="outline" onClick={addIdea}>
            Добавить идею
          </Button>

        </CardContent>
      </Card>

      <div className="flex gap-4">

        <select
          className="border p-2"
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option className="text-black" value="all">Все категории</option>

          {categories.map((c) => (
            <option className="text-black" key={c}>{c}</option>
          ))}

        </select>

        <Button
          variant="outline"
          onClick={() => setSortPriority(!sortPriority)}
        >
          Сортировать по приоритету
        </Button>

      </div>

      <Table>

        <TableHeader>
          <TableRow>
            <TableHead>Идея</TableHead>
            <TableHead>Категория</TableHead>
            <TableHead>Приоритет</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>

          {filteredIdeas.map((idea) => (
            <TableRow key={idea.id}>
              <TableCell>{idea.title}</TableCell>
              <TableCell>{idea.category}</TableCell>
              <TableCell>{idea.priority}</TableCell>
            </TableRow>
          ))}

        </TableBody>

      </Table>

    </div>
  );
}