import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navigation: {
            1: "Home",
            2: "Articles",
            3: "About Us",
          },

          articles: {
            title: "All ARTICLES here!",
          },
          pages: {
            page: "page",
          },
          rules: {
            title: "All RULES here!",
          },
          about: {
            title: "All ABOUT US here!",
          },
          page404: {
            title: "PAGE NOT FOUND!",
          },
        },
      },
      ua: {
        translation: {
          navigation: {
            1: "Головна",
            2: "Статті",
            3: "Про нас",
          },
          articles: {
            title: "Усі СТАТТІ тут!",
          },
          pages: {
            page: "сторінка",
          },
          rules: {
            title: "Усі ПРАВИЛА тут!",
          },
          about: {
            title: "Усі ПРО НАС тут!",
          },
          page404: {
            title: "ТАКОЇ СТОРІНКИ НЕМАЄ!",
          },
        },
      },
    },
  });

export default i18n;
