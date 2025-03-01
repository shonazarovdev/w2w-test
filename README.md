# 📋 Медицинский Список Сотрудников

## 🏥 Описание проекта

Этот проект — управление списком врачей и медсестер с возможностью добавления, редактирования и удаления сотрудников.

## 📌 Основные функции:
- 📄 Просмотр списка врачей и медсестер.
- ➕ Добавление нового сотрудника.
- ✏️ Редактирование данных сотрудника.
- ❌ Удаление сотрудников.

## 🚀 Технологии

Проект разработан с использованием следующих технологий:
- ⚛️ **React** – UI-библиотека для работы с компонентами.
- 🟦 **TypeScript** – строгая типизация для повышения надежности кода.
- 🔄 **React Router** – навигация между страницами врачей и медсестер.
- 🎨 **Ant Design** – готовые UI-компоненты для стилизации таблицы и форм.

## 📂 Установка и запуск проекта

### 1️⃣ Клонирование репозитория:
```sh
git clone https://github.com/shonazarovdev/w2w-test.git
cd w2w-test
```

### 2️⃣ Установка зависимостей:
```sh
npm install
```

### 3️⃣ Запуск проекта:
```sh
npm start
```

Проект запустится на http://localhost:3000.

## 📂 Структура проекта

- **w2w-test/**
    - 📂 **src/**
        - 📂 **components/**
            - `StaffTable.tsx` – Таблица с врачами/медсестрами
        - 📂 **data/**
            - `data.ts` – Начальные данные (врачи и медсестры)
        - `App.tsx` – Главный компонент с маршрутизацией
        - `index.tsx` – Точка входа React
    - `package.json` – Конфигурация npm-зависимостей
    - `README.md` – Документация проекта
    - `.prettierrc` - Конфигурация форматирования кода (Prettier)

## 🛠 Функционал

### 🔹 Просмотр сотрудников

При открытии проекта вы увидите список врачей.
Можно переключаться между “Врачи” и “Медсестры” с помощью меню.

### 🔹 Добавление нового сотрудника
	1.	Нажмите кнопку “Добавить врача” или “Добавить медсестру”.
	2.	Введите ФИО и выберите отделение.
	3.	Нажмите “OK”, и сотрудник появится в списке.

### 🔹 Редактирование сотрудника
	1.	Нажмите кнопку ✏️ Редактировать напротив нужного сотрудника.
	2.	Измените ФИО или отделение.
	3.	Сохраните изменения.

### 🔹 Удаление сотрудника
	1.	Нажмите ❌ Удалить напротив сотрудника.
	2.	Подтверждение не требуется — сотрудник сразу удаляется.