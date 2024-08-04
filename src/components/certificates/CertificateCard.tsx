
interface CaseProps {
    title: string;
    description: string;
    image: string;
    altImage?: string;
    className?: string;
    link?: string;
    handleOnclick: () => void;
}

export const CertificateCard = ({ title, description, image, altImage, className, handleOnclick, }: CaseProps) => {
    return (
        <article className="space-y-8 lg:w-[367px] w-full h-auto p-4 flex-shrink-0">
            <button onClick={handleOnclick}>
                {/* <Image
                    src={image}
                    alt={altImage || title}
                    className="rounded-2xl w-full bg-cover"
                    width={367}
                    height={256}

                /> */}
                <img
                    src={image}
                    alt={altImage || title}
                    className="rounded-2xl w-full bg-cover"
                    width={367}
                    height={256}
                />
            </button>

            <h4 className="text-white font-semibold text-2xl">
                <button onClick={handleOnclick}>
                    {title}
                </button>
            </h4>

            <p className="font-normal text-white">
                {description}
            </p>

        </article>
    )
}

