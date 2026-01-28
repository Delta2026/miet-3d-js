"use client";

import { useEffect, useState } from "react";
import { Idea } from "@/types/idea";
import { loadIdeas, saveIdeas } from "@/lib/storage";
import IdeaForm from "@/components/IdeaForm";
import IdeaList from "@/components/IdeaList";
import Filters from "@/components/Filters";

export default function Home() {
  const [ideas, setIdeas] = useState<Idea[]>(() => loadIdeas());
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  const categories = Array.from(
    new Set(ideas.map((i) => i.category).filter(Boolean))
  ) as string[];

  const visibleIdeas = ideas
    .filter((i) => category === "all" || i.category === category)
    .sort((a, b) =>
      sort === "desc"
        ? b.priority - a.priority
        : a.priority - b.priority
    );

  useEffect(() => {
    saveIdeas(ideas);
  }, [ideas]);

  function deleteIdea(id: string) {
  setIdeas((prev) => prev.filter((idea) => idea.id !== id));
}

  function addIdea(idea: Idea) {
    setIdeas((prev) => [idea, ...prev]);
  }

  function toggleStatus(id: string) {
  setIdeas((prev) =>
    prev.map((idea) => {
      if (idea.id !== id) return idea;

      const nextStatus =
        idea.status === "idea"
          ? "in-progress"
          : idea.status === "in-progress"
          ? "done"
          : "idea";

      return {
        ...idea,
        status: nextStatus,
      };
    })
  );
}

  function updateIdea(updated: Idea) {
  setIdeas((prev) =>
    prev.map((idea) => (idea.id === updated.id ? updated : idea))
  );
}

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">💡 Банк идей</h1>

      <IdeaForm onAdd={addIdea} />

      <Filters
        categories={categories}
        selectedCategory={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
      />

      <IdeaList
  ideas={visibleIdeas}
  onDelete={deleteIdea}
  onToggleStatus={toggleStatus}
  onUpdate={updateIdea}
/>

    </main>
  );
}
