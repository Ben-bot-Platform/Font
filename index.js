const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// مجموعه فونت‌ها
const fontStyles = {
    "Bold": text => text.toUpperCase(),
    "Italic": text => text.split('').map(c => c + '̶').join(''),
    "Fancy": text => text.split('').map(c => '✦' + c + '✦').join(''),
    "Japanese": text => text.split('').map(c => c + 'サ').join(''),
    "Arabic": text => text.split('').map(c => c + 'ا').join(''),
    "Emoji": text => text.split('').map(c => '🌟' + c + '🌟').join(''),
    "Cursive": text => text.split('').map(c => c + '𝒸').join(''),
    "UpsideDown": text => text.split('').reverse().join(''),
    "Greek": text => text.split('').map(c => c + 'α').join(''),
    "SmallCaps": text => text.toLowerCase().split('').map(c => c + 'ᶜ').join('')
};

// مسیر API
app.get('/api/font-txt', (req, res) => {
    const text = req.query.text; // دریافت متن از پارامتر "text"
    if (!text) {
        return res.status(400).json({ status: false, message: 'No text provided' });
    }

    // تولید فونت‌ها
    const convertedFonts = {};
    Object.keys(fontStyles).forEach(fontName => {
        convertedFonts[fontName] = fontStyles[fontName](text);
    });

    res.json({
        status: true,
        creator: 'nothing',
        data: convertedFonts
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
