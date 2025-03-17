import { ChangeEvent, FormEvent, useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Rechercher une tâche..."
        className="input input-bordered w-full"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};