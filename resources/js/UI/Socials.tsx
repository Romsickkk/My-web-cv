function Socials() {
    const boxStyle =
        'flex items-center justify-center max-lg:h-8 max-lg:w-8 lg:bg-[#C4C4C4] lg:hover:bg-[#AFAFAF] lg:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] lg:transform lg:transition-transform lg:duration-200 lg:hover:-translate-y-2 lg:h-12 lg:w-12';
    return (
        <div className="mt-5 flex flex-row gap-5 max-lg:flex-col">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=roman.babayan1133@gmail.com" target="_blank" className={boxStyle}>
                <img src="/IconGmail.svg" className="max-lg:invert" alt="" />
            </a>
            <a href="https://github.com/Romsickkk" target="_blank" className={boxStyle}>
                <img src="/IconGitHub.svg" className="max-lg:invert" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/roman-babayan-319a87270/?locale=en" target="_blank" className={boxStyle}>
                <img src="/IconLinkedIn.svg" className="max-lg:invert" alt="" />
            </a>
        </div>
    );
}

export default Socials;
