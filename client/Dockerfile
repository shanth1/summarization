# Базовый образ для стадии сборки
FROM node:18 AS build

# Рабочая директория в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Построение приложения
RUN npm run build

# Базовый образ для стадии запуска
FROM nginx:alpine

# Копируем собранные файлы из стадии сборки
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт
EXPOSE 3000

# Старт nginx
CMD ["nginx", "-g", "daemon off;"]
