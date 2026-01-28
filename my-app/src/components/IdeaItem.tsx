"use client";

import { useState } from "react";
import { Idea } from "@/types/idea";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  idea: Idea;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
  onUpdate: (idea: Idea) => void;
};

export default function IdeaItem({
  idea,
  onDelete,
  onToggleStatus,
  onUpdate,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(idea.title);
  const [category, setCategory] = useState(idea.category ?? "");
  const [priority, setPriority] = useState(idea.priority);

  const statusLabel =
    idea.status === "idea"
      ? "Идея"
      : idea.status === "in-progress"
      ? "В работе"
      : "Готово";

  function save() {
    onUpdate({
      ...idea,
      title,
      category: category || undefined,
      priority,
    });
    setIsEditing(false);
  }

  return (
    <div className="border p-3 rounded-xl space-y-2">
      {isEditing ? (
        <>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            placeholder="Категория"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <Input
            type="number"
            min={1}
            max={5}
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
          />

          <div className="flex gap-2">
            <Button size="sm" onClick={save}>
              Сохранить
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsEditing(false)}
            >
              Отмена
            </Button>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-start gap-3">
          <div className="space-y-1">
            <h3 className="font-semibold">{idea.title}</h3>

            <div className="flex gap-2 items-center text-sm">
              {idea.category && (
                <Badge variant="secondary">{idea.category}</Badge>
              )}

              <span>⭐ {idea.priority}</span>

              <Badge
                className="cursor-pointer"
                variant="outline"
                onClick={() => onToggleStatus(idea.id)}
              >
                {statusLabel}
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm" onClick={() => setIsEditing(true)}>
              ✏️
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(idea.id)}
            >
              🗑
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
