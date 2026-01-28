"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  sort: "asc" | "desc";
  onSortChange: (value: "asc" | "desc") => void;
};

export default function Filters({
  categories,
  selectedCategory,
  onCategoryChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <div className="flex gap-3">
      <Select
        value={selectedCategory}
        onValueChange={onCategoryChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Категория" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Все</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={sort}
        onValueChange={(v) => onSortChange(v as "asc" | "desc")}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="desc">Сначала важные</SelectItem>
          <SelectItem value="asc">Сначала неважные</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
