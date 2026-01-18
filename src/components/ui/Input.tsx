import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    rightIcon?: ReactNode;
    containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, icon, rightIcon, containerClassName, ...props }, ref) => {
        return (
            <div className={cn('relative flex items-center w-full group', containerClassName)}>
                {icon && (
                    <div className="absolute left-16 text-neutral-400 group-focus-within:text-neutral-600 transition-colors">
                        {icon}
                    </div>
                )}
                <input
                    ref={ref}
                    className={cn(
                        'w-full bg-neutral-100 border-none outline-none text-sm text-neutral-1000 placeholder:text-neutral-400 font-medium py-12 transition-all rounded-xl focus:ring-1 focus:ring-neutral-200',
                        icon ? 'pl-48' : 'pl-16',
                        rightIcon ? 'pr-48' : 'pr-16',
                        className
                    )}
                    {...props}
                />
                {rightIcon && (
                    <div className="absolute right-16 text-neutral-600 cursor-pointer">
                        {rightIcon}
                    </div>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
