import { Idea } from "@/types/idea";
import IdeaItem from "./IdeaItem";

type Props = {
  ideas: Idea[];
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
  onUpdate: (idea: Idea) => void;
};

export default function IdeaList({
  ideas,
  onDelete,
  onToggleStatus,
  onUpdate,
}: Props) {
  if (ideas.length === 0) {
    return <p className="text-sm text-muted-foreground">Идей пока нет</p>;
  }

  return (
    <div className="space-y-3">
      {ideas.map((idea) => (
        <IdeaItem
          key={idea.id}
          idea={idea}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
