import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    icon: Icon,
    iconPosition = 'right',
    loading = false,
    disabled,
    type = 'button',
    to,
    href,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold gap-2 transition-all duration-300 rounded-xl focus:outline-none rounded-2xl group";

    const variants = {
        primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20",
        secondary: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200",
        dark: "bg-gray-900 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-900/20",
        outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent",
        text: "text-emerald-600 hover:text-emerald-700",
        ghost: "text-white hover:text-emerald-600 bg-transparent"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs gap-1.5",
        md: "px-5 py-2.5 text-sm gap-2",
        lg: "px-6 py-3.5 text-base gap-2.5",
        xl: "px-8 py-4 text-lg gap-3"
    };

    const classes = [
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        loading ? 'cursor-wait' : '',
        className
    ].join(' ');

    const content = (
        <>
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {!loading && Icon && iconPosition === 'left' && <Icon className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />}
            <span>{children}</span>
            {!loading && Icon && iconPosition === 'right' && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;