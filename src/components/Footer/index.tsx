import React from 'react';
import { FaFilePdf, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { MediaLink2 } from '../Button/MediaLink';
import { NameTitle } from '../Titles/NameTitle';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0B0B0C] grid lg:grid-cols-2 lg:justify-items-center  grid-cols-1  justify-items-center  px-[5%] py-12 items-center h-[181px] w-full">
            <div className="space-y-3">
                <p>Siga minhas redes sociais</p>

                <div className="flex flex-wrap gap-5">
                    <MediaLink2 Icon={FaGithub} iconClassName='text-zinc-950 text-2xl' title='See my github repository' link='https://github.com/EriveltoSilva' />
                    <MediaLink2 Icon={FaLinkedin} iconClassName='text-blue-600 text-2xl' title='See my LinkedIn profile' link='https://ao.linkedin.com/in/erivelto-silva-39a61a275' />
                    <MediaLink2 Icon={SiGmail} iconClassName='text-red-600 text-2xl' title='Talk to me using e-mail' link='mailto:eriveltoclenio@gmail.com' />
                    <MediaLink2 Icon={FaYoutube} iconClassName='text-red-600 text-2xl' title='See my Youtube Channel' link='https://www.youtube.com/channel/UCC7-b4HzSJIpg9vn3CmRw0Q' />
                    <MediaLink2 Icon={FaFilePdf} iconClassName='text-red-600 text-2xl' title='Download my cv in english' link={'/docs/cv/Erivelto´s  Curriculum.pdf'} />
                    <MediaLink2 Icon={FaFilePdf} iconClassName='text-red-600 text-2xl' title='Download my cv in portuguese' link='/docs/cv/Curriculum Erivelto.pdf' />
                </div>
            </div>

            <div className='space-y-3'>
                <div className="text-[32px] font-bold">
                    <NameTitle href='/' />
                </div>
                <p>Erivelto Silva Portfolio &copy; Inspired by <span className='text-blue-400'><a href="">O Code Lab webpage</a></span></p>
            </div>
        </footer>
    );
}

export default Footer;


