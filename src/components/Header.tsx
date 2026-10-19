import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 h-14 border-b">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-lg font-bold">
          NPM Registry
        </Link>
      </div>
      <div className="w-full max-w-xl ml-4">
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;
