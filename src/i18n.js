import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import uk from './locales/uk.json';
import fr from './locales/fr.json'; // Добавляем французский язык
import es from './locales/es.json'; // Добавляем испанский язык
import it from './locales/it.json'; // Добавляем итальянский язык

const messages = {
  en,
  ru,
  de,
  uk,
  fr, // Добавляем французский язык
  es, // Добавляем испанский язык
  it  // Добавляем итальянский язык
};

const i18n = createI18n({
  locale: 'en', // Установите язык по умолчанию
  fallbackLocale: 'en', // Установите резервный язык
  messages, // Установите сообщения для локалей
});

export default i18n;