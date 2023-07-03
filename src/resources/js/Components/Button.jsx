export default function Button({ className = '', bgColorSet, disabled, children, ...props }) {
    console.log(bgColorSet, 'props');
    const options = [];
    options.push(bgColorSet?.bg_color || 'bg-primary');
    options.push(bgColorSet?.bg_hover || 'bg-primary-hover');

    return (
        <button
            {...props}
            className={
                    `inline-flex justify-center py-2 px-4 text-gray-500 rounded-full border shadow-sm font-medium ${
                    disabled && 'opacity-25'
                } ` + className + ' ' + options.join(' ')
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
