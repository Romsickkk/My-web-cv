import translations from '@/translations';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'ru' | 'am';

interface LangContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
    const localLang = localStorage.getItem('lang') as Lang;
    const [lang, setLang] = useState<Lang>(localLang || 'en');

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
    const context = useContext(LangContext);

    if (!context) throw new Error('useLang must be used within LangProvider');
    return context;
};
export const useT = () => {
    const { lang } = useLang();
    return translations[lang];
};
