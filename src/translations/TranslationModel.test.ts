import englishTranslations from './en.json';
import spanishTranslations from './es.json';

let englishTranslationList = Object.keys(englishTranslations);

test.each(englishTranslationList)('spanish translations all exist', (item) => {
  expect(spanishTranslations).toHaveProperty(item);
});
