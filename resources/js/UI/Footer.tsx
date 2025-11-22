import { useT } from '@/context/LangContext';
import { useSmoothNavigation } from '@/hooks/useSmoothNavigation';

function Footer() {
    const { scrollTo } = useSmoothNavigation();
    const t = useT();
    return (
        <footer className="flex flex-col items-center gap-3 bg-[#1A1A1A] pt-5 pb-2">
            <button className="flex flex-col items-center gap-2" onClick={() => scrollTo(0, 2500)}>
                <img draggable={false} src="/arrows.svg" alt="arrows" />
                <p className="font-montserrat text-sm font-bold text-white">{t.footer.button}</p>
            </button>
            <div className="flex flex-row items-center gap-10">
                <a href="https://t.me/roma1133" target="_blank">
                    <img draggable={false} src="/icon-telegram.svg" alt="telegram" className="h-7 w-7" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=roman.babayan1133@gmail.com" target="_blank">
                    <img draggable={false} src="/icon-linkedin.svg" alt="linkedin" className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/roman-babayan-319a87270/?locale=en" target="_blank">
                    <img draggable={false} src="/icon-gmail.svg" alt="gmail" className="h-6 w-6" />
                </a>
            </div>
            <p className="font-montserrat text-xs text-white">
                <span className="font-bold"> @{new Date().getFullYear()} Roman Babayan</span>
            </p>
        </footer>
    );
}

export default Footer;
