import am from './am.json';
import en from './en.json';
import ru from './ru.json';

export type TranslationsType = any;
const translations: Record<'en' | 'ru' | 'am', TranslationsType> = {
    en,
    ru,
    am,
};

export default translations;
