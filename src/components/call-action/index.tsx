
import GIFI from "@/assets/animations/backgroundbottom.gif";
import { MessageIcon } from "@/assets/icons/MessageIcon";
import { Button } from "../Button/Button";

interface Props {
    openContactFormModal: () => void;
}


export const CallActionSection = ({ openContactFormModal }: Props) => {
    const gifi = {
        backgroundImage: `url(${GIFI.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    };

    return (
        <section className="w-full lg:h-[500px] h-[720px]">
            <div style={gifi} className="w-full relative">
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] text-transparent bg-clip-text text-base">{"<body"}
                    </span>
                    <div className="space-y-14">

                        <div className="flex flex-col border-l-2 pl-4 ml-5">

                            <div className="flex flex-col text-[32px] lg:text-[48px] font-semibold">
                                <h1 className="text-white">
                                    <span className="bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] text-transparent bg-clip-text">{"< "}</span>
                                    Vamos conversar
                                    <span className="bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] text-transparent bg-clip-text">{" />"}</span>
                                </h1>
                            </div>
                            <p className="text-[#CCFFFE] text-[18px] lg:text-2xl  font-normal">
                                Se interessou em fazer seu projeto com a gente? <br />
                                Entre em contacto agora mesmo com nosso time <br />
                                e faça seu orçamento
                            </p>
                        </div>
                        <Button Icon={MessageIcon} onClick={openContactFormModal} text="Entre em contacto" className="lg:text-xs text-base justify-center w-3/5 mx-auto" />
                    </div>
                </div>
            </div>




        </section>


    )
}