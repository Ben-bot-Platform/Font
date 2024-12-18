const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// تابع‌های تبدیل به چند فونت مختلف
const fontConverters = {
    fancy: (input) => input.split('').map(char => ({ a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ' }[char.toLowerCase()] || char)).join(''),
    reverse: (input) => input.split('').reverse().join(''),
    uppercase: (input) => input.toUpperCase(),
    lowercase: (input) => input.toLowerCase(),
    doubled: (input) => input.split('').map(char => char + char).join(''),
};

// مسیر API
app.get('/api/font-txt', (req, res) => {
    const text = req.query.text;
    if (!text) {
        return res.status(400).json({ status: false, message: 'No text provided' });
    }

    // تولید فونت‌ها
    const fonts = {};
    for (const [name, converter] of Object.entries(fontConverters)) {
        fonts[name] = converter(text);
    }

    res.json({
        status: true,
        creator: 'nothing',
        data: fonts,
    });
});

// ارائه فایل HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// راه‌اندازی سرور
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
