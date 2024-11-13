import Image from "next/image";

interface CaseProps {
  title: string;
  description: string;
  image: string;
  altImage?: string;
  className?: string;
  link?: string;
  handleOnclick: () => void;
}

export const CertificateCard = ({ title, description, image, altImage, className, handleOnclick }: CaseProps) => {
  return (
    <article className="space-y-8 md:w-[367px] w-full h-auto p-4 flex-shrink-0">
      <button onClick={handleOnclick} className="w-full">
        <Image
          src={image}
          alt={altImage || title}
          className="rounded-2xl max-w-[367px]  max-h-64 w-full  h-full bg-cover object-cover"
          height={0}
          width={0}
          sizes="100vw"
        />
      </button>

      <h4 className="text-white font-semibold text-2xl">
        <button onClick={handleOnclick}>{title}</button>
      </h4>

      <p className="font-normal text-white">{description}</p>
    </article>
  );
};
