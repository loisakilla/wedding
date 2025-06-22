# Wedding Invitation Site

Полноценный сайт‑приглашение на свадьбу Екатерины и Георгия, созданный на React, TypeScript и Webpack. Все стили размещены в отдельных CSS‑файлах. Реализованы плавный скролл и анимации на основе framer-motion. Для курсора используется библиотека `mouse-follower`, а фон украшен частицами, реагирующими на движение мыши.
- `src/components` — React-компоненты (Hero, Details, Schedule, Gallery).


## Запуск

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите режим разработки:
   ```bash
   npm start
   ```
3. Сборка production версии:
   ```bash
   npm run build
   ```

## Структура


- `src/components` — React-компоненты (Hero, Details, Schedule, Gallery, CustomCursor).


## Развёртывание на Vercel

1. Создайте аккаунт на [Vercel](https://vercel.com/).
2. Установите CLI:
   ```bash
   npm i -g vercel
   ```
3. Выполните в корне проекта:
   ```bash
   vercel
   ```
   Следуйте инструкциям для первоначальной настройки.
4. Для публикации обновлений используйте:
   ```bash
   vercel --prod
   ```


Сайт содержит несколько секций с плавными анимациями. Разделы поочередно появляются по мере прокрутки страницы.
