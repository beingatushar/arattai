interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export const SearchInput = ({
    value,
    onChange,
    placeholder = "Search...",
    className = "",
}: SearchInputProps) => {
    return (
        <div className={`w-full mb-4 ${className}`}>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-3 py-2 bg-white dark:bg-gray-800 border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all 
                           dark:text-white dark:border-gray-600"
            />
        </div>
    );
};
