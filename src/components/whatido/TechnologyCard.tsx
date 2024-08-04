import { twMerge } from "tailwind-merge";

interface TechnologyProps {
    title: string;
    description: string;
    className?: string;
    expertiseLevel: number;
    Icon?: React.ComponentType<{ className?: string }>;
    iconClassName?: string;
}

export const TechnologyCard = ({ title, Icon, iconClassName, description, expertiseLevel, ...props }: TechnologyProps) => {
    return (
        <>
            <article className={twMerge("flex flex-col rounded-lg border border-blue-300 p-8 space-y-4", props.className)}>
                {Icon && <Icon className={iconClassName} />}
                <h4 className="text-start font-semibold text-2xl">{title}</h4>
                <p className="truncate-lines truncate-lines-3">
                    {description}
                </p>
                <div className="w-full bg-gray-200 rounded-full">
                    <div className="bg-blue-600 py-0.5 text-center rounded-full" style={{ width: `${expertiseLevel}%` }}>
                        <span className="text-white text-sm">{expertiseLevel}%</span>
                    </div>
                </div>
            </article>
        </>
    )
}
