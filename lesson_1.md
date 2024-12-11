# Основы работы с React

## Установка Node.js и NPM
1. **Проверка установки**:
    ```bash
    node -v
    npm -v
    ```

## Создание нового проекта React
1. **Использование `npn create vite`**:
    ```bash
    npn create vite lesson_1
    ```
    - Замените `lesson_1` на имя вашего проекта.

## Запуск проекта
1. **Перейдите в директорию проекта и запустите сервер**:
    ```bash
    cd lesson_1
   npm run dev 
    
    ```
    - Откроется приложение по адресу [http://localhost:3000](http://localhost:3000).

## Основные команды для работы с React
- **Запуск в режиме разработки**:
    ```bash
   npm run dev 
    ```

- **Создание продакшн-сборки**:
    ```bash
    npm run build
    ```

- **Запуск тестов**:
    ```bash
    npm test
    ```

- **Установка нового пакета**:
    ```bash
    npm install <package-name>
    ```

- **Удаление пакета**:
    ```bash
    npm uninstall <package-name>
    ```

## Структура проекта
```text
my-app/
  node_modules/
  public/
    index.html
  src/
    App.js
    index.js
  package.json
