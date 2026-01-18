import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, padding = 'md', children, ...props }, ref) => {
        const paddings = {
            none: 'p-0',
            sm: 'p-12',
            md: 'p-24',
            lg: 'p-32',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'bg-neutral-0 border border-neutral-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300',
                    paddings[padding],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export default Card;
