interface TitleProps {
    href: string;
}

export const NameTitle = ({ href = "/" }: TitleProps) => {

    return (
        <h2>
            <a href={href} className='text-blue-600'>
                Erivelto<span className='text-white'> Silva</span>.
            </a>

        </h2>
    );
}

