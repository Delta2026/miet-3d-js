import { Idea } from "@/types/idea";

const STORAGE_KEY = "ideas";

export function loadIdeas(): Idea[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveIdeas(ideas: Idea[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
}