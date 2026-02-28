const widths = {
    full: "w-full",
    half: "w-1/2",
    third: "w-1/3",
    auto: "w-auto"
}

export default function TextInput({ width="full", elem }) {
    return(
        <input
        name={ elem.name }
        type={ elem.name }
        placeholder={ elem.placeholder }
        autoComplete={ elem.auto }
        className={ `${widths[width]} p-4 border-1 border-stone-400 rounded-md focus:border-none focus:outline-none focus:ring-2 focus:ring-amber-400` }
        onChange= { elem.onChange }
        />
    );
}