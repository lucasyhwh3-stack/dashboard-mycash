import { cn } from '../../utils/cn';

interface AvatarProps {
    src?: string;
    initials?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Avatar = ({ src, initials, size = 'md', className }: AvatarProps) => {
    const sizes = {
        sm: 'w-24 h-24 text-[10px]',
        md: 'w-32 h-32 text-xs',
        lg: 'w-48 h-48 text-sm',
    };

    return (
        <div
            className={cn(
                'rounded-full flex items-center justify-center overflow-hidden border border-neutral-100 bg-neutral-200 shrink-0 font-bold text-neutral-600 uppercase',
                sizes[size],
                className
            )}
        >
            {src ? (
                <img src={src} alt={initials} className="w-full h-full object-cover" />
            ) : (
                initials
            )}
        </div>
    );
};

export default Avatar;
