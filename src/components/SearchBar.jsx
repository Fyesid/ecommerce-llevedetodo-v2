import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import TextInput from "./TextInput";

export default function SearchBar() {
    return (
        <div className="relative">
            <input type="text" className="w-150 p-5 h-12 bg-white border-1 border-gray-500 rounded-3xl focus:border-none focus:outline-none focus:ring-2 focus:ring-amber-400"/>
            <button className="absolute w-15 h-full right-0 bg-black cursor-pointer rounded-3xl">
                <FontAwesomeIcon icon={ faMagnifyingGlass } className="text-white" size="xl" />
            </button>
        </div>
    );
}