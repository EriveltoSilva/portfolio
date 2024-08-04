

interface Title1Props {
    title: React.ReactNode | string;
    description: React.ReactNode | string;

}

export const Title1 = ({ title, description }: Title1Props) => {

    return (
        <div className="absolute top-[300px] left-[50%] transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] text-transparent bg-clip-text text-base">{"<body"}</span>
            <div className="flex flex-col border-l-2 pl-4 ml-5">
                <div className="flex flex-col text-[48px] font-semibold">
                    <h1 className="text-white">
                        <span className="bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] text-transparent bg-clip-text">{"< "}</span>
                        {title}
                        <span className="bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] text-transparent bg-clip-text">{" />"}</span>
                    </h1>
                </div>
                <p className="text-[#CCFFFE] text-[24px] font-normal">

                    {description}
                </p>
            </div>
        </div>
    )
}

