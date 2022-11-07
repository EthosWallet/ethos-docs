
const Checkbox = ({
    label,
    id,
    onChange,
    checked,
    className,
    ...reactProps
}) => {
    return (
        <div
            className={`${
                className || ''
            } flex items-center text-left mx-6 mb-6`}
        >
            <input
                id={id}
                aria-describedby={`${id}-description`}
                name={id}
                type="checkbox"
                onChange={onChange}
                checked={checked}
                className="rounded h-5 w-5 cursor-pointer bg-slate-600 border checked:bg-purple-700 checked:text-purple-700 border-slate-200 focus:ring-0 focus:border-2 focus:border-purple-700 focus:shadow-sm"
                {...reactProps}
            />
            <label
                htmlFor={id}
                className="ml-2 cursor-pointer text-slate-400"
                id={`${id}-description`}
            >
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
