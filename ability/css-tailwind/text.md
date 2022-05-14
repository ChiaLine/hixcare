# 開始使用 Tailwind CSS

## 安裝 [Play CDN](https://tailwindcss.com/docs/installation/play-cdn)
``` html
<script src="https://cdn.tailwindcss.com"></script>
```

---

## HTML
``` html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- 直接 輸入 class name -->
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
---

## 將 Tailwind 指令添加到您的 CSS
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
---

## JS 自定義配置 添加樣式、主題
``` js
module.exports = {
  theme: {
    extend: {
      colors: {
        // 新增自訂變數、顏色
        eg: '#7c3aed',
        transparent: 'transparent',
        // 修改原配置自訂顏色
        current: 'currentColor',
        'egwhite': '#831843',
      }
    },
  },
  plugins: [],
}

```
---
##其他


