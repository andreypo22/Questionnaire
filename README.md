React + Redux Toolkit + Vite
Приложение-анкета для заявки на получение загранпаспорта.

В приложении реализованы:

заполнение полей анкеты
пагинация по страницам
валидация полей ввода
отправка данныx на сервер
управление состоянием с помощью Redux Toolkit

Технологии, используемые в проекте:

React hooks: useEffect,    useState,  useMemo, useRef, useId, createContext, useContext, useLayoutEffect
React-router-dom: BrowserRouter, Route, Routes, useLocation, useNavigate
React-redux: useDispatch, useSelector, Provider
Хранение данных на локальном сервере (библиотека JSON server)
CSS стили

Запуск приложения:

склонировать репозиторий
установить зависимости "npm i"
запустить приложение локально "npm run dev"
запустить сервер локально "npm run server"
потестировать можно здесь https://questionnaire-zvty.onrender.com (правда это бесплатный тариф на платформе render.com, поэтому загрузка данных с сервера может тормозить, обычно ожидание от 1 до 5 минут)
