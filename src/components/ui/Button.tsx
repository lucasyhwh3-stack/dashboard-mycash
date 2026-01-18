import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-neutral-1000 text-neutral-0 hover:opacity-90 active:scale-95',
            secondary: 'bg-neutral-100 text-neutral-1000 hover:bg-neutral-200 active:scale-95',
            ghost: 'bg-transparent text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200',
            outline: 'bg-transparent border border-neutral-200 text-neutral-1000 hover:bg-neutral-100',
            danger: 'bg-feedback-error text-neutral-0 hover:opacity-90 active:scale-95',
        };

        const sizes = {
            sm: 'px-12 py-6 text-xs font-semibold',
            md: 'px-20 py-10 text-sm font-bold',
            lg: 'px-24 py-12 text-md font-bold',
            icon: 'p-8 rounded-full',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center transition-all duration-200 rounded-xl disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    size !== 'icon' && sizes[size as keyof typeof sizes],
                    size === 'icon' && sizes.icon,
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading ? (
                    <div className="w-20 h-20 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
