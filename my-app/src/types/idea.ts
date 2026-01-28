export type IdeaStatus = "idea" | "in-progress" | "done";

export type Idea = {
  id: string;
  title: string;
  category?: string;
  priority: number;
  status: IdeaStatus;
};
