import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({ icon, text }) {
    return (
        <a className="
        flex flex-col items-center
        bg-zinc-50 w-30 text-center p-3
        rounded-xl cursor-pointer
        whitespace-nowrap hover:bg-zinc-100">
            <FontAwesomeIcon icon= { icon } size="xl"/>
            <p className="size-full">{ text }</p>
        </a>
    );
}