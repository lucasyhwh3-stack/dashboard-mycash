import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'success' | 'error' | 'warning' | 'info' | 'neutral';
}

const Badge = ({ className, variant = 'neutral', children, ...props }: BadgeProps) => {
    const variants = {
        success: 'bg-feedback-success/10 text-feedback-success',
        error: 'bg-feedback-error/10 text-feedback-error',
        warning: 'bg-feedback-warning/10 text-feedback-warning',
        info: 'bg-feedback-info/10 text-feedback-info',
        neutral: 'bg-neutral-100 text-neutral-600',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center px-8 py-2 rounded-full text-xs font-bold whitespace-nowrap',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
