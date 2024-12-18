const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// تابع تبدیل فونت
function convertToFont(input) {
    const fontMap = {
        'a': 'ᴀ',
        'b': 'ʙ',
        'c': 'ᴄ',
        'd': 'ᴅ',
        'e': 'ᴇ',
        'f': 'ғ',
        'g': 'ɢ',
        'h': 'ʜ',
        'i': 'ɪ',
        'j': 'ᴊ',
        'k': 'ᴋ',
        'l': 'ʟ',
        'm': 'ᴍ',
        'n': 'ɴ',
        'o': 'ᴏ',
        'p': 'ᴘ',
        'q': 'ǫ',
        'r': 'ʀ',
        's': 's',
        't': 'ᴛ',
        'u': 'ᴜ',
        'v': 'ᴠ',
        'w': 'ᴡ',
        'x': 'x',
        'y': 'ʏ',
        'z': 'ᴢ',
    };

    return input.split('').map(char => fontMap[char.toLowerCase()] || char).join('');
}

// مسیر API
app.get('/api/font-txt', (req, res) => {
    const text = req.query.text; // دریافت متن از پارامتر "text"
    if (!text) {
        return res.status(400).json({ status: false, message: 'No text provided' });
    }

    const convertedText = convertToFont(text);
    res.json({
        status: true,
        creator: 'nothing',
        data: convertedText
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
