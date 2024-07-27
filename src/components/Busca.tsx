import { colors } from "@/styles/colors";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Busca() {
  return (

    <form className="max-h-10 flex-1">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FontAwesomeIcon icon={faSearch} color={colors.gray[600]} className="w-3 h-3" />
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 h-8 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 bg-gray-100 font-sf-pro" placeholder="Pesquisar.." required />
      </div>
    </form>
  );
}