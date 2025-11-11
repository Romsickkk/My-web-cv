function Socials() {
    const boxStyle =
        'bg-[#C4C4C4] hover:bg-[#AFAFAF] p-2 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transform transition-transform duration-200 hover:-translate-y-2 ';

    return (
        <div className="mt-5 flex flex-row gap-5">
            <a href="" className={boxStyle}>
                <img src="/IconGmail.svg" alt="" />
            </a>
            <a href="" className={boxStyle}>
                <img src="/IconGitHub.svg" alt="" />
            </a>
            <a href="" className={boxStyle}>
                <img src="/IconLinkedIn.svg" alt="" />
            </a>
        </div>
    );
}

export default Socials;
