const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// مسیر فایل شمارنده
const counterFile = path.join(__dirname, "counter.txt");

// بررسی وجود فایل شمارنده
if (!fs.existsSync(counterFile)) {
    fs.writeFileSync(counterFile, "0");
}

// مسیری برای سرو فایل HTML
app.use(express.static(path.join(__dirname, "public")));

// API برای دریافت تعداد بازدیدها
app.get("/visits", (req, res) => {
    let count = parseInt(fs.readFileSync(counterFile, "utf-8"));
    count += 1;
    fs.writeFileSync(counterFile, count.toString());
    res.json({ visits: count });
});

// اجرای سرور
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
