# استفاده از تصویر رسمی Node.js
FROM node:18

# تنظیم دایرکتوری کاری داخل کانتینر
WORKDIR /app

# کپی کردن فایل‌های پروژه به دایرکتوری کاری
COPY . .

# نصب وابستگی‌ها (در صورت وجود package.json)
RUN if [ -f package.json ]; then npm install; fi

# پورت 8080 برای اجرا
EXPOSE 8080

# اجرای یک سرور ساده برای فایل HTML
CMD ["npx", "http-server", "-p", "8080"]
