import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import uk from './locales/uk.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import it from './locales/it.json';

const messages = {
  en,
  ru,
  de,
  uk,
  fr,
  es,
  it,
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
