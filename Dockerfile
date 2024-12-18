# استفاده از تصویر رسمی Node.js
FROM node:18

# تنظیم دایرکتوری کاری
WORKDIR /app

# کپی فایل‌های پروژه
COPY . .

# نصب وابستگی‌ها
RUN npm install

# پورت 8080
EXPOSE 8080

# اجرای سرور
CMD ["node", "index.js"]
