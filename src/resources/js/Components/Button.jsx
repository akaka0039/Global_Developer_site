export default function Button({ submit = true, className = '', colorSet, disabled, children, ...props }) {
    const options = [];
    options.push(colorSet?.bg_color || 'bg-primary');
    options.push(colorSet?.bg_hover || 'hover:bg-primary-hover');
    options.push(colorSet?.text_color || 'text-white');
    options.push(colorSet?.text_hover || 'hover:text-white');

    return (
        <button
            {...props}
            className={
                    `inline-flex justify-center py-2 px-4 text-gray-500 rounded-full border shadow-sm font-medium ${
                    disabled && 'opacity-25'
                } ` + className + ' ' + options.join(' ')
            }
            disabled={disabled}
            type= {submit ? 'submit' : 'button'}
        >
            {children}
        </button>
    );
}
