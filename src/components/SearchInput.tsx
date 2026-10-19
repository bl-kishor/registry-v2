import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = term.trim();
    if (!searchTerm) return;

    navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <VscSearch className="h-5 w-5 text-gray-500" />
        </div>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="pl-10 py-2 w-full border-0 shadow-none"
          placeholder="Search packages"
        />
      </div>
    </form>
  );
}

export default SearchInput;
