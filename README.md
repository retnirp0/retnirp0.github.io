<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weazel News • HR Hub</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            background: #0d0d0d;
            color: #e0e0e0;
            padding: 20px;
        }

        .container {
            max-width: 1300px;
            margin: 0 auto;
        }

        header {
            background: linear-gradient(135deg, #1a0a0f, #2d0d1a);
            padding: 35px;
            border-radius: 24px;
            margin-bottom: 30px;
            border: 2px solid #ff2d75;
            text-align: center;
            box-shadow: 0 0 60px #ff2d7520;
        }

        header h1 {
            font-size: 2.8rem;
            background: linear-gradient(90deg, #ff2d75, #ff6b9d, #ff2d75);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        header p {
            color: #ff6b9d;
            margin-top: 8px;
            font-size: 1.1rem;
        }

        .search {
            width: 100%;
            padding: 16px 24px;
            border-radius: 14px;
            border: 2px solid #2a2a2a;
            background: #141414;
            color: #e0e0e0;
            font-size: 1rem;
            margin-bottom: 24px;
            transition: .3s;
        }

        .search:focus {
            outline: none;
            border-color: #ff2d75;
        }

        .tab-bar {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 28px;
        }

        .tab-btn {
            background: #141414;
            border: 2px solid #2a2a2a;
            color: #999;
            padding: 14px 28px;
            border-radius: 16px;
            cursor: pointer;
            font-weight: 600;
            transition: .3s;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .tab-btn:hover {
            background: #1f1f1f;
            border-color: #ff2d75;
            color: #fff;
        }

        .tab-btn.active {
            background: #ff2d75;
            color: #fff;
            border-color: #ff2d75;
            box-shadow: 0 0 40px #ff2d7540;
        }

        .tab-btn .label {
            font-size: .75rem;
            color: #666;
            display: block;
            font-weight: 400;
        }

        .tab-btn.active .label {
            color: #ffb3cc;
        }

        .tab-content {
            display: none;
            animation: fade .3s;
        }

        .tab-content.active {
            display: block;
        }

        @keyframes fade {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .card {
            background: #141414;
            border-radius: 20px;
            padding: 28px;
            border: 1px solid #2a2a2a;
            margin-bottom: 24px;
            transition: .3s;
        }

        .card:hover {
            border-color: #ff2d7540;
        }

        .card h2 {
            color: #ff2d75;
            font-size: 1.5rem;
            margin-bottom: 18px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 2px solid #2a2a2a;
            padding-bottom: 12px;
        }

        .card h2 .badge {
            background: #ff2d7520;
            color: #ff6b9d;
            font-size: .75rem;
            padding: 2px 14px;
            border-radius: 20px;
        }

        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 12px;
            margin-bottom: 20px;
        }

        .category-btn {
            background: #0d0d0d;
            border: 2px solid #2a2a2a;
            border-radius: 16px;
            padding: 14px 16px;
            cursor: pointer;
            text-align: center;
            transition: .3s;
            color: #aaa;
            font-weight: 500;
        }

        .category-btn:hover {
            background: #1a1a1a;
            border-color: #ff2d7540;
            color: #fff;
        }

        .category-btn.active {
            background: #ff2d7520;
            border-color: #ff2d75;
            color: #ff6b9d;
        }

        .category-btn .cat-icon {
            font-size: 1.6rem;
            display: block;
            margin-bottom: 4px;
        }

        .category-btn .cat-label {
            font-size: .8rem;
        }

        .hidden {
            display: none !important;
        }

        .level {
            background: #111;
            padding: 14px 18px;
            border-radius: 12px;
            margin-bottom: 10px;
            border-left: 4px solid #ff2d75;
        }

        .level strong {
            color: #ff6b9d;
            font-size: 1.05rem;
        }

        .level .days {
            color: #ff2d75;
            font-size: .85rem;
            margin-left: 12px;
            background: #ff2d7510;
            padding: 2px 12px;
            border-radius: 12px;
        }

        .level ul {
            margin-top: 6px;
            padding-left: 20px;
            color: #aaa;
            font-size: .93rem;
        }

        .level ul li {
            margin: 3px 0;
        }

        .text-block {
            background: #0a0a0a;
            border-radius: 12px;
            border: 1px solid #1f1f1f;
            overflow: hidden;
            max-height: 600px;
            overflow-y: auto;
        }

        .text-line {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 3px 6px;
            border-bottom: 1px solid #141414;
            transition: .2s;
        }

        .text-line:hover {
            background: #1a0a0f;
        }

        .text-line:last-child {
            border-bottom: none;
        }

        .text-line .copy-btn {
            background: transparent;
            border: none;
            color: #ff2d75;
            cursor: pointer;
            font-size: .8rem;
            padding: 2px 6px;
            border-radius: 4px;
            opacity: .5;
            flex-shrink: 0;
            transition: .2s;
        }

        .text-line .copy-btn:hover {
            background: #ff2d7520;
            opacity: 1;
        }

        .text-line .line-num {
            color: #444;
            font-size: .65rem;
            min-width: 28px;
            text-align: right;
            flex-shrink: 0;
        }

        .text-line .line-text {
            flex: 1;
            word-break: break-word;
            color: #ccc;
            font-size: .92rem;
            padding: 2px 0;
        }

        .text-line .line-text input {
            background: transparent;
            border: none;
            border-bottom: 1px dashed #555;
            color: #ff6b9d;
            font-size: .92rem;
            width: auto;
            min-width: 60px;
            padding: 0 4px;
            font-family: inherit;
            display: inline-block;
        }

        .text-line .line-text input:focus {
            outline: none;
            border-bottom-color: #ff2d75;
        }

        .link-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .link-list a {
            background: #111;
            padding: 10px 20px;
            border-radius: 12px;
            color: #ff6b9d;
            text-decoration: none;
            font-size: .92rem;
            border: 1px solid #2a2a2a;
            transition: .3s;
        }

        .link-list a:hover {
            background: #1a0a0f;
            border-color: #ff2d75;
            color: #ff2d75;
        }

        .time-inputs {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            align-items: center;
        }

        .time-inputs label {
            color: #aaa;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .time-inputs input[type="number"] {
            background: #0d0d0d;
            border: 1px solid #2a2a2a;
            color: #fff;
            padding: 10px 14px;
            border-radius: 10px;
            width: 70px;
            text-align: center;
            font-size: 1.1rem;
        }

        .time-inputs input[type="number"]:focus {
            outline: none;
            border-color: #ff2d75;
        }

        .time-inputs input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }

        .accordion {
            background: #0d0d0d;
            border-radius: 14px;
            border: 1px solid #2a2a2a;
            margin-bottom: 12px;
            overflow: hidden;
        }

        .accordion-header {
            background: #1a1a1a;
            padding: 12px 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: #ddd;
            user-select: none;
        }

        .accordion-header .arrow {
            transition: .3s;
            color: #ff2d75;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 4px 8px;
            border-radius: 8px;
        }

        .accordion-header .arrow:hover {
            background: #ff2d7510;
        }

        .accordion.open .accordion-header .arrow {
            transform: rotate(180deg);
        }

        .accordion-body {
            display: none;
            padding: 14px 18px;
            background: #0d0d0d;
        }

        .accordion.open .accordion-body {
            display: block;
        }

        .leaderboard {
            background: #0d0d0d;
            border-radius: 14px;
            border: 1px solid #2a2a2a;
            padding: 16px;
            position: sticky;
            top: 20px;
            align-self: start;
        }

        .leaderboard h4 {
            color: #ff2d75;
            margin-bottom: 12px;
        }

        .leaderboard table {
            width: 100%;
            border-collapse: collapse;
        }

        .leaderboard th {
            text-align: left;
            color: #666;
            font-weight: 400;
            font-size: .8rem;
            padding: 6px 10px;
            border-bottom: 1px solid #1f1f1f;
        }

        .leaderboard td {
            padding: 6px 10px;
            color: #ccc;
            font-size: .9rem;
            border-bottom: 1px solid #141414;
        }

        .leaderboard tr:last-child td {
            border-bottom: none;
        }

        .leaderboard .rank {
            color: #ff2d75;
            font-weight: 700;
            width: 40px;
        }

        .leaderboard .score {
            color: #ff6b9d;
            font-weight: 600;
        }

        .dept-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        @media(max-width:768px) {
            .dept-grid {
                grid-template-columns: 1fr;
            }
        }

        .dept-card {
            background: linear-gradient(145deg, #141414, #0d0d0d);
            border-radius: 18px;
            padding: 28px;
            border: 1px solid #2a2a2a;
            text-align: center;
            transition: .4s;
        }

        .dept-card:hover {
            border-color: #ff2d75;
            transform: translateY(-4px);
        }

        .dept-card .emoji {
            font-size: 3rem;
            display: block;
            margin-bottom: 10px;
        }

        .dept-card h3 {
            color: #ff6b9d;
            font-size: 1.3rem;
        }

        .dept-card p {
            color: #888;
            font-size: .9rem;
            margin: 8px 0;
            line-height: 1.5;
        }

        .dept-card .status {
            display: inline-block;
            background: #ff2d7520;
            color: #ff6b9d;
            padding: 4px 16px;
            border-radius: 20px;
            font-size: .75rem;
            margin-top: 8px;
        }

        .empty-state {
            text-align: center;
            padding: 40px 20px;
            color: #555;
        }

        .empty-state .big-icon {
            font-size: 3rem;
            display: block;
            margin-bottom: 12px;
        }

        .empty-state h3 {
            color: #888;
            font-size: 1.3rem;
        }

        .empty-state p {
            color: #444;
            margin-top: 6px;
        }

        footer {
            text-align: center;
            padding: 30px 0 10px;
            color: #333;
            font-size: .85rem;
            border-top: 1px solid #1a1a1a;
            margin-top: 20px;
        }

        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #0d0d0d;
        }
        ::-webkit-scrollbar-thumb {
            background: #ff2d75;
            border-radius: 10px;
        }

        .flex {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            align-items: center;
        }

        .mt-12 {
            margin-top: 12px;
        }
        .mb-8 {
            margin-bottom: 8px;
        }

        select {
            background: #0d0d0d;
            border: 1px solid #2a2a2a;
            color: #e0e0e0;
            padding: 10px 14px;
            border-radius: 10px;
            font-size: .95rem;
            width: 100%;
        }

        select:focus {
            outline: none;
            border-color: #ff2d75;
        }

        .quiz-fields {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            margin: 16px 0;
        }

        .quiz-fields label {
            color: #aaa;
            font-size: .9rem;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .quiz-fields input {
            background: #0d0d0d;
            border: 1px solid #2a2a2a;
            color: #e0e0e0;
            padding: 10px 14px;
            border-radius: 10px;
            font-size: .95rem;
        }

        .quiz-fields input:focus {
            outline: none;
            border-color: #ff2d75;
        }

        .btn-pink {
            background: #ff2d75;
            color: #fff;
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1rem;
            transition: .3s;
        }

        .btn-pink:hover {
            background: #ff6b9d;
            transform: scale(1.02);
        }

        .info-box {
            background: #0d0d0d;
            border: 1px solid #2a2a2a;
            border-radius: 12px;
            padding: 14px 18px;
            margin-top: 10px;
            color: #888;
            font-size: .85rem;
        }

        .info-box strong {
            color: #ff6b9d;
        }

        .quiz-qa-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin: 8px 0;
        }

        .quiz-qa-grid input {
            background: #0d0d0d;
            border: 1px solid #2a2a2a;
            color: #e0e0e0;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: .9rem;
            width: 100%;
        }

        .quiz-qa-grid input:focus {
            outline: none;
            border-color: #ff2d75;
        }

        .quiz-qa-grid .label {
            color: #555;
            font-size: .65rem;
            text-align: center;
            display: block;
        }

        .quiz-wrap {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
            align-items: start;
        }

        @media(max-width:768px) {
            .quiz-wrap {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
<div class="container">

    <header>
        <h1>📰 WEAZEL NEWS</h1>
        <p>HR Hub — вся база отделов в одном месте</p>
    </header>

    <input class="search" id="search" placeholder="🔍 Поиск по всем материалам...">

    <div class="tab-bar">
        <button class="tab-btn active" data-tab="hr"><span>📗</span> Human Resources <span class="label">• кадры</span></button>
        <button class="tab-btn" data-tab="event"><span>📕</span> Event <span class="label">• мероприятия</span></button>
        <button class="tab-btn" data-tab="pr"><span>📙</span> Public Relations <span class="label">• связи</span></button>
        <button class="tab-btn" data-tab="press"><span>📘</span> Press & Media <span class="label">• контент</span></button>
    </div>

    <!-- ==================== HR ==================== -->
    <div class="tab-content active" id="tab-hr">
        <div class="category-grid" id="hr-cats">
            <div class="category-btn active" data-cat="hr-promo"><span class="cat-icon">📈</span><span class="cat-label">Повышения</span></div>
            <div class="category-btn" data-cat="hr-interview"><span class="cat-icon">🎯</span><span class="cat-label">Собеседование</span></div>
            <div class="category-btn" data-cat="hr-texts"><span class="cat-icon">📢</span><span class="cat-label">Тексты</span></div>
            <div class="category-btn" data-cat="hr-tests"><span class="cat-icon">📝</span><span class="cat-label">Экзамены</span></div>
        </div>

        <div class="card hr-cat" id="hr-promo">
            <h2>📈 Повышения <span class="badge">5 уровней</span></h2>
            <div class="level"><strong>Оператор [5] → Репортёр [6]</strong> <span class="days">⏱ 5 дней</span>
                <ul>
                    <li>Провести 5 эфиров</li>
                    <li>Присутствовать на 1 открытом наборе</li>
                    <li>Присутствовать на 1 МП/ГМП</li>
                </ul>
            </div>
            <div class="level"><strong>Репортёр [6] → Журналист [7]</strong> <span class="days">⏱ 7 дней</span>
                <ul>
                    <li>Провести 7 эфиров</li>
                    <li>Присутствовать на 1 открытом наборе</li>
                    <li>Присутствовать на 1 МП/ГМП</li>
                    <li>Ознакомление с законом о СМИ</li>
                </ul>
            </div>
            <div class="level"><strong>Журналист [7] → Продюсер [8]</strong> <span class="days">⏱ 10 дней</span>
                <ul>
                    <li>Провести 5 эфиров</li>
                    <li>Провести 3 открытых набора</li>
                    <li>Присутствовать на 2 МП/ГМП</li>
                </ul>
            </div>
            <div class="level"><strong>Продюсер [8] → Копирайтер [9]</strong> <span class="days">⏱ 14 дней</span>
                <ul>
                    <li>Провести 6 эфиров</li>
                    <li>Провести 6 открытых наборов (ответственным)</li>
                    <li>Присутствовать на 2 МП/ГМП</li>
                </ul>
            </div>
            <div class="level"><strong>Копирайтер [9] → Менеджер [10]</strong> <span class="days">⏱ 19 дней</span>
                <ul>
                    <li>Провести 10 эфиров</li>
                    <li>Провести 10 открытых наборов (ответственным)</li>
                    <li>Присутствовать на 4 МП/ГМП</li>
                </ul>
            </div>
        </div>

        <div class="card hr-cat hidden" id="hr-interview">
            <h2>🎯 Собеседование</h2>
            <div class="accordion open">
                <div class="accordion-header">📋 Проверка документов <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
                <div class="accordion-body">
                    <ul style="color:#aaa;padding-left:20px;line-height:1.8;">
                        <li>Срок действия медицинской карты</li>
                        <li>Наличие в ВУ отметки о праве управления легковым транспортом</li>
                        <li>Проверка по каналу <strong style="color:#ff6b9d;">«нежелательные люди»</strong> — если есть, отказ</li>
                    </ul>
                </div>
            </div>
            <div class="accordion open">
                <div class="accordion-header">⏰ Время <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
                <div class="accordion-body">
                    <div class="time-inputs">
                        <label>Начало: <input type="number" id="startH" value="20" min="0" max="23"> : <input type="number" id="startM" value="20" min="0" max="59"></label>
                        <label>Конец: <input type="number" id="endH" value="20" min="0" max="23"> : <input type="number" id="endM" value="40" min="0" max="59"></label>
                        <button onclick="updateTime()" class="btn-pink" style="padding:8px 20px;font-size:.9rem;">🔄 Обновить</button>
                    </div>
                </div>
            </div>
            <div class="accordion open">
                <div class="accordion-header">📢 Начало набора <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
                <div class="accordion-body">
                    <div class="text-block" id="hr-start">
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые жители и гости нашего штата! ◻️◻️◽</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">✨ Редакция Weazel News объявляет о проведении открытого собеседования. ✨</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">От нас - дружный коллектив, офис в центре города и отличный заработок!✌️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">Вам необходимо иметь мед. карту с пометкой [A] и водительские права.✅</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text" id="time-line">⚠️ Собеседование пройдет с 20:20 до 20:40. ⚠️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">☎️ Ждём Вас в нашем офисе! ☎️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">◽◻️◻️ С уважением, редакция Weazel News. ◻️◻️◽</span></div>
                    </div>
                </div>
            </div>
            <div class="accordion open">
                <div class="accordion-header">📢 Конец набора <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
                <div class="accordion-body">
                    <div class="text-block" id="hr-end">
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Уважаемые жители и гости нашего штата! ◻️◻️◽</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">⚠️ Открытое собеседование в редакцию Weazel News окончено.⚠️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">✉️ Напоминаем, что на портале штата открыты..</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..электронные заявки на стажировку.✉️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">Оставляйте свою заявку и с вами обязательно свяжутся!☎️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">◽◻️◻️ С уважением, редакция Weazel News. ◻️◻️◽</span></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card hr-cat hidden" id="hr-texts">
            <h2>📢 Тексты</h2>
            <div class="accordion open">
                <div class="accordion-header">📌 Электронные заявки <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
                <div class="accordion-body">
                    <div class="text-block">
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые жители и гости нашего штата! ◻️◻️◽</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">⚠️ В редакцию Weazel News открыт прием электронных заявлений на стажировку.⚠️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">⭕ Мы ищем тех, кто:</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">✔️ Умеет или мечтает научиться писать статьи.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">✔️ Готов организовывать мероприятия: интеллектуальные или развлекательные.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">✔️ Хочет вкладывать знания в новичков и гордиться их работой.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">✔️ Желает освоить искусство продаж и помогать людям найти своих клиентов.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">✔️ Готов снимать развлекательные ролики для жителей штата.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">⚠️ Тогда эта возможность специально для Вас.⚠️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">☀️ Более подробно ознакомиться с критериями..</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">11</span><span class="line-text">..Вы можете на официальном портале штата.☘️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">12</span><span class="line-text">☎️ Ждем вас и ваши заявления.☎️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">13</span><span class="line-text">До скорых встреч!✌️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">14</span><span class="line-text">◽◻️◻️ С уважением, отдел кадров Weazel News. ◻️◻️◽</span></div>
                    </div>
                </div>
            </div>
            <div class="accordion open">
                <div class="accordion-header">📌 Ознакомление с отделами <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
                <div class="accordion-body">
                    <div class="text-block">
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые жители и гости нашего штата! ◻️◻️◽</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">✨ Сегодня редакция Weazel News расскажет Вам о своей деятельности. ✨</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">◻️ Отдел Press & Media - сердце редакции, тут наши сотрудники трудятся над созданием печатного,..</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..аудиовизуального и новостного контента,..</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">..снимают документальные репортажи, ведут экстренные эфиры с мест событий.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">А также присутствует на всех масштабных съемках и создает прочие медиа-материалы.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">Другими словами - освещают все самые важные события для жителей штата!</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">◻️ Отдел Event - самый активный отдел нашей редакции!</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">Сотрудники отдела отвечают за проведение развлекательных мероприятий и викторин.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">Именно они наше связующее звено с активными жителями штата.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">11</span><span class="line-text">◻️ Отдел Public Relations - строит мосты между рекламодателями и аудиторией.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">12</span><span class="line-text">Сотрудники отдела взаимодействуют с различными организациями, владельцами бизнесов..</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">13</span><span class="line-text">..и гражданскими лицами в штате за счет предоставления им платных услуг редакции.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">14</span><span class="line-text">◻️ Отдел Human Resources - лицо нашей редакции.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">15</span><span class="line-text">Именно с сотрудниками этого отдела стажер начинает свой путь в Weazel News,..</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">16</span><span class="line-text">..кроме того, сотрудники отдела следят за соблюдением внутреннего порядка..</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">17</span><span class="line-text">..и нормативно-правовой базы редакции WN.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">18</span><span class="line-text">⚠️ Хочешь попасть к нам в редакцию Weazel News? ⚠️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">19</span><span class="line-text">У нас открыт прием электронных заявлений на стажировку.</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">20</span><span class="line-text">☘️ Более подробно ознакомиться с критериями..</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">21</span><span class="line-text">..Вы можете на официальном портале штата.☘️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">22</span><span class="line-text">☎️ Ждем вас и ваши заявления.☎️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">23</span><span class="line-text">До скорых встреч!✌️</span></div>
                        <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">24</span><span class="line-text">◽◻️◻️ С уважением, отдел кадров Weazel News. ◻️◻️◽</span></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card hr-cat hidden" id="hr-tests">
            <h2>📝 Экзамены</h2>
            <div class="link-list">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRKzOlI-Eas7nfs22b91Xz-bab5e6oKXq8gqfyvsCpJKhMOA/viewform" target="_blank">📘 Устав</a>
                <a href="https://docs.google.com/forms/d/1TwWTN2v5qRvRHYiz4qCjRBTrTKyiy9vSyNxdjHqFipw/viewform?edit_requested=true" target="_blank">📗 ППО-ПРО №1</a>
                <a href="https://docs.google.com/forms/d/1Lyn0ILHTqjDG0800dxGCZVlyaJKmZ8IiJewhOgrCYqU/viewform?edit_requested=true" target="_blank">📙 ППО-ПРО №2</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9hEgpVXNm0mIMe-OgDCt4HBW4rbzKXSKLspmeYRLnuvhalQ/viewform" target="_blank">📕 ППЭ</a>
            </div>
        </div>
    </div>

    <!-- ==================== EVENT ==================== -->
    <div class="tab-content" id="tab-event">
        <div class="category-grid" id="event-cats">
            <div class="category-btn active" data-cat="event-promo"><span class="cat-icon">📈</span><span class="cat-label">Повышения</span></div>
            <div class="category-btn" data-cat="event-quiz"><span class="cat-icon">🎮</span><span class="cat-label">Викторины</span></div>
            <div class="category-btn" data-cat="event-interactive"><span class="cat-icon">🎯</span><span class="cat-label">Интерактивы</span></div>
        </div>

        <div class="card event-cat" id="event-promo">
            <h2>📈 Повышения <span class="badge">Event • 7 уровней</span></h2>
            <div class="level"><strong>Редактор [3] → Организатор [4]</strong> <span class="days">⏱ 3 дня</span>
                <ul>
                    <li>Помощь в проведении 1 интерактива</li>
                    <li>Составить текст для 1 викторины</li>
                </ul>
            </div>
            <div class="level"><strong>Организатор [4] → Оператор [5]</strong> <span class="days">⏱ 5 дней</span>
                <ul>
                    <li>Составить текст для 1 викторины</li>
                    <li>Помочь в проведении 2 интерактивов</li>
                    <li>Сдать <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9hEgpVXNm0mIMe-OgDCt4HBW4rbzKXSKLspmeYRLnuvhalQ/viewform?usp=sharing&ouid=105738173293135985995" target="_blank" style="color:#ff6b9d;">тест на знание правил эфиров</a></li>
                </ul>
            </div>
            <div class="level"><strong>Оператор [5] → Репортёр [6]</strong> <span class="days">⏱ 8 дней</span>
                <ul>
                    <li>Провести 2 викторины</li>
                    <li>Провести 1 интерактив</li>
                    <li>Посетить 1 МП/ГМП</li>
                </ul>
            </div>
            <div class="level"><strong>Репортёр [6] → Журналист [7]</strong> <span class="days">⏱ 11 дней</span>
                <ul>
                    <li>Провести 3 викторины</li>
                    <li>Провести 2 интерактива</li>
                    <li>Посетить 1 МП/ГМП</li>
                    <li>Ознакомиться с законом о СМИ</li>
                </ul>
            </div>
            <div class="level"><strong>Журналист [7] → Продюсер [8]</strong> <span class="days">⏱ 14 дней</span>
                <ul>
                    <li>Провести 4 викторины</li>
                    <li>Провести 2 интерактива</li>
                    <li>Посетить 2 МП/ГМП</li>
                </ul>
            </div>
            <div class="level"><strong>Продюсер [8] → Копирайтер [9]</strong> <span class="days">⏱ 17 дней</span>
                <ul>
                    <li>Провести 5 викторин</li>
                    <li>Провести 3 интерактива</li>
                    <li>Посетить 2 ГМП/МП</li>
                </ul>
            </div>
            <div class="level"><strong>Копирайтер [9] → Менеджер [10]</strong> <span class="days">⏱ 20 дней</span>
                <ul>
                    <li>Провести 6 викторин</li>
                    <li>Провести 4 интерактива</li>
                    <li>Посетить 4 ГМП/МП</li>
                </ul>
            </div>
        </div>

        <!-- ============ ВИКТОРИНА ============ -->
        <div class="card event-cat hidden" id="event-quiz">
            <h2>🎮 Викторины</h2>

            <div class="quiz-fields">
                <label>🏷️ Название: <input type="text" id="q-name" value="Викторина"></label>
                <label>📌 Тема: <input type="text" id="q-topic" value="разные темы"></label>
                <label>💵 Приз: <input type="text" id="q-prize" value="25.000$"></label>
                <label>🏢 Спонсор: <input type="text" id="q-sponsor" placeholder="Оставьте пустым"></label>
            </div>

            <button onclick="renderQuiz()" class="btn-pink" style="margin-bottom:16px;">🔄 Обновить текст викторины</button>

            <div class="quiz-wrap">
                <div>
                    <!-- ПОЛЯ ДЛЯ ВВОДА ВОПРОСОВ И ОТВЕТОВ -->
                    <div style="background:#0a0a0a;border-radius:12px;border:1px solid #1f1f1f;padding:14px;margin-bottom:14px;">
                        <p style="color:#666;font-size:.8rem;margin-bottom:8px;">📝 Введите вопросы и ответы (10 штук):</p>
                        <div id="qa-fields">
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 1</span><input class="q-val" data-idx="1" placeholder="Вопрос 1"></div><div><span class="label">Ответ 1</span><input class="a-val" data-idx="1" placeholder="Ответ 1"></div></div>
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 2</span><input class="q-val" data-idx="2" placeholder="Вопрос 2"></div><div><span class="label">Ответ 2</span><input class="a-val" data-idx="2" placeholder="Ответ 2"></div></div>
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 3</span><input class="q-val" data-idx="3" placeholder="Вопрос 3"></div><div><span class="label">Ответ 3</span><input class="a-val" data-idx="3" placeholder="Ответ 3"></div></div>
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 4</span><input class="q-val" data-idx="4" placeholder="Вопрос 4"></div><div><span class="label">Ответ 4</span><input class="a-val" data-idx="4" placeholder="Ответ 4"></div></div>
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 5</span><input class="q-val" data-idx="5" placeholder="Вопрос 5"></div><div><span class="label">Ответ 5</span><input class="a-val" data-idx="5" placeholder="Ответ 5"></div></div>
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 6</span><input class="q-val" data-idx="6" placeholder="Вопрос 6"></div><div><span class="label">Ответ 6</span><input class="a-val" data-idx="6" placeholder="Ответ 6"></div></div>
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 7</span><input class="q-val" data-idx="7" placeholder="Вопрос 7"></div><div><span class="label">Ответ 7</span><input class="a-val" data-idx="7" placeholder="Ответ 7"></div></div>
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 8</span><input class="q-val" data-idx="8" placeholder="Вопрос 8"></div><div><span class="label">Ответ 8</span><input class="a-val" data-idx="8" placeholder="Ответ 8"></div></div>
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 9</span><input class="q-val" data-idx="9" placeholder="Вопрос 9"></div><div><span class="label">Ответ 9</span><input class="a-val" data-idx="9" placeholder="Ответ 9"></div></div>
                            <div class="quiz-qa-grid"><div><span class="label">Вопрос 10</span><input class="q-val" data-idx="10" placeholder="Вопрос 10"></div><div><span class="label">Ответ 10</span><input class="a-val" data-idx="10" placeholder="Ответ 10"></div></div>
                        </div>
                    </div>

                    <!-- ТЕКСТ ВИКТОРИНЫ -->
                    <div class="text-block" id="quiz-text"></div>
                    <button onclick="copyFullQuiz()" class="btn-pink mt-12">📋 Копировать весь текст</button>
                </div>

                <div class="leaderboard">
                    <h4>🏆 Таблица лидеров</h4>
                    <table>
                        <thead><tr><th>#</th><th>Игрок</th><th>Очки</th></tr></thead>
                        <tbody id="lb-body"></tbody>
                    </table>
                    <p style="color:#555;font-size:.75rem;margin-top:10px;">✏️ Очки из полей "Первым прислал..."</p>
                </div>
            </div>
        </div>

        <div class="card event-cat hidden" id="event-interactive">
            <h2>🎯 Интерактивы</h2>
            <select id="interactive-select" onchange="showInteractive()" style="margin-bottom:16px;">
                <option value="">— Выберите интерактив —</option>
                <option value="find-car">🚗 Операция: найди машину</option>
                <option value="joke">😂 Я знаю анекдот</option>
                <option value="roulette">🔫 Русская рулетка</option>
                <option value="who-am-i">❓ Кто я</option>
                <option value="improvisation">🎭 Импровизация на букву</option>
                <option value="mirror">🪞 Зеркало</option>
                <option value="fake-taxi">🚕 Fake — Taxi</option>
                <option value="psychic">🔮 Битва экстрасенсов</option>
            </select>
            <div id="interactive-content">
                <div class="empty-state"><span class="big-icon">🎯</span><h3>Выберите интерактив</h3></div>
            </div>
        </div>
    </div>

    <!-- ==================== PR ==================== -->
    <div class="tab-content" id="tab-pr">
        <div class="dept-grid">
            <div class="dept-card"><span class="emoji">📙</span><h3>Public Relations</h3>
                <p>Отдел по связям с общественностью</p><span class="status">⏳ В разработке</span></div>
            <div class="dept-card" style="border-color:#2a2a2a;"><span class="emoji">🔜</span><h3 style="color:#888;">Скоро здесь появится</h3>
                <p style="color:#555;">Информация по PR-отделу</p></div>
        </div>
    </div>

    <!-- ==================== PRESS ==================== -->
    <div class="tab-content" id="tab-press">
        <div class="dept-grid">
            <div class="dept-card"><span class="emoji">📘</span><h3>Press & Media</h3>
                <p>Отдел контента и новостей</p><span class="status">⏳ В разработке</span></div>
            <div class="dept-card" style="border-color:#2a2a2a;"><span class="emoji">🔜</span><h3 style="color:#888;">Скоро здесь появится</h3>
                <p style="color:#555;">Информация по Press & Media</p></div>
        </div>
    </div>

    <footer>Weazel News • HR Hub • Обновлено 29.06.2026</footer>
</div>

<script>
    // ===== ВКЛАДКИ =====
    document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(x => x.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('tab-' + this.dataset.tab).classList.add('active');
    }));

    // ===== КАТЕГОРИИ =====
    document.querySelectorAll('.category-btn').forEach(b => b.addEventListener('click', function() {
        const p = this.closest('.tab-content');
        p.querySelectorAll('.category-btn').forEach(x => x.classList.remove('active'));
        this.classList.add('active');
        const cat = this.dataset.cat;
        p.querySelectorAll('.hr-cat, .event-cat').forEach(x => x.classList.add('hidden'));
        document.getElementById(cat).classList.remove('hidden');
        if (cat === 'event-quiz') renderQuiz();
    }));

    // ===== АККОРДЕОН =====
    function toggleAccordion(el) {
        el.closest('.accordion').classList.toggle('open');
    }

    // ===== КОПИРОВАНИЕ СТРОКИ =====
    function copyLine(btn) {
        const line = btn.closest('.text-line');
        const text = line.querySelector('.line-text').textContent.trim();
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
            const o = btn.textContent;
            btn.textContent = '✅';
            setTimeout(() => btn.textContent = o, 1000);
        }).catch(() => {
            const t = document.createElement('textarea');
            t.value = text;
            document.body.appendChild(t);
            t.select();
            document.execCommand('copy');
            document.body.removeChild(t);
            const o = btn.textContent;
            btn.textContent = '✅';
            setTimeout(() => btn.textContent = o, 1000);
        });
    }

    // ===== ВРЕМЯ =====
    function updateTime() {
        const h1 = document.getElementById('startH').value.padStart(2, '0'),
            m1 = document.getElementById('startM').value.padStart(2, '0');
        const h2 = document.getElementById('endH').value.padStart(2, '0'),
            m2 = document.getElementById('endM').value.padStart(2, '0');
        const l = document.querySelector('#hr-start .text-line:nth-child(5) .line-text');
        if (l) l.textContent = '⚠️ Собеседование пройдет с ' + h1 + ':' + m1 + ' до ' + h2 + ':' + m2 + '. ⚠️';
    }

    // ===== ВИКТОРИНА =====
    function renderQuiz() {
        const name = document.getElementById('q-name').value || 'Викторина';
        const topic = document.getElementById('q-topic').value || 'разные темы';
        const prize = document.getElementById('q-prize').value || '25.000$';
        const sponsor = document.getElementById('q-sponsor').value.trim();

        // Собираем вопросы и ответы
        const qs = {};
        const ans = {};
        document.querySelectorAll('.q-val').forEach(el => qs[el.dataset.idx] = el.value || 'xxx');
        document.querySelectorAll('.a-val').forEach(el => ans[el.dataset.idx] = el.value || 'xxx');

        // Собираем уже введённых победителей
        const winners = {};
        document.querySelectorAll('.winner-input').forEach(el => {
            winners[el.dataset.idx] = el.value || '';
        });

        // ===== ШАБЛОН (НЕ ТРОГАТЬ!) =====
        const lines = [
            '✨Доброго времени суток, дорогие жители и гости штата!✨',
            '☀️С Вами редакция Weazel News!',
            'И сегодня мы проведем для Вас мини-игру.☀️',
            '⚜️Под названием «' + name + '» с призовым фондом: ' + prize + '.⚜️',
            '⚠️Суть данной игры довольно проста: ',
            'Мы задаем вопросы связанные с ' + topic + '.',
            'А Вы отвечаете на них.',
            '⚪Пример: ' + qs[1] + '?',
            '✅Правильный ответ: ' + ans[1] + '.',
            'За каждый правильный ответ Вы получаете 1 балл.',
            'Кто даст больше правильных ответов — заберет главный приз.',
            '▶️Ответы отправлять на номер 995-105.',
            'Обязательно указывайте свое Имя и Фамилию!◀️'
        ];
        if (sponsor) lines.push('❤️️Спонсор сегодняшней игры - ' + sponsor + '.❤️️');
        else lines.push('');
        lines.push('Итак... Начнем!✍️');

        // Вопросы 1-5 (Первый + Следующий)
        for (let i = 1; i <= 5; i++) {
            const label = i === 1 ? 'Первый' : 'Следующий';
            const wVal = winners[i] || '';
            lines.push('⚪' + label + ' вопрос: ' + qs[i] + '?');
            lines.push('✅Правильный ответ: ' + ans[i] + '.');
            lines.push(
                'Первым прислал правильный ответ человек с именем – <input class="winner-input" data-idx="' + i + '" value="' + wVal + '" placeholder="имя" oninput="updateLeaderboard()" style="border-bottom:1px dashed #555;background:transparent;color:#ff6b9d;font-size:.92rem;width:auto;min-width:60px;padding:0 4px;font-family:inherit;">'
                );
            lines.push('Именно он получает 1 балл.');
        }

        lines.push('☄️Напоминаем, Ваша задача прислать правильный ответ в нашу студию.');
        lines.push('Обязательно указывайте свое имя и фамилию.');
        lines.push('СМС Вы сможете отправить по номеру — 995-105.☄️');
        if (sponsor) lines.push('❤️️Спонсор сегодняшней игры - ' + sponsor + '.❤️️');
        else lines.push('');

        // Вопросы 6-9 (все Следующий)
        for (let i = 6; i <= 9; i++) {
            const wVal = winners[i] || '';
            lines.push('⚪Следующий вопрос: ' + qs[i] + '?');
            lines.push('✅Правильный ответ: ' + ans[i] + '.');
            lines.push(
                'Первым прислал правильный ответ человек с именем – <input class="winner-input" data-idx="' + i + '" value="' + wVal + '" placeholder="имя" oninput="updateLeaderboard()" style="border-bottom:1px dashed #555;background:transparent;color:#ff6b9d;font-size:.92rem;width:auto;min-width:60px;padding:0 4px;font-family:inherit;">'
                );
            lines.push('Именно он получает 1 балл.');
        }

        // Последний вопрос (10-й)
        const w10 = winners[10] || '';
        lines.push('⚪Последний вопрос: ' + qs[10] + '?');
        lines.push('✅Правильный ответ: ' + ans[10] + '.');
        lines.push(
            'Первым прислал правильный ответ человек с именем – <input class="winner-input" data-idx="10" value="' + w10 + '" placeholder="имя" oninput="updateLeaderboard()" style="border-bottom:1px dashed #555;background:transparent;color:#ff6b9d;font-size:.92rem;width:auto;min-width:60px;padding:0 4px;font-family:inherit;">'
            );
        lines.push('Именно он получает 1 балл.');
        lines.push('');
        lines.push('✌️По итогам мини-игры «' + name + '».');

        const wFinal = winners['final'] || '';
        lines.push(
            'Победу одержал человек с именем – <input class="winner-input" data-idx="final" value="' + wFinal + '" placeholder="имя победителя" oninput="updateLeaderboard()" style="border-bottom:1px dashed #555;background:transparent;color:#ff6b9d;font-size:.92rem;width:auto;min-width:60px;padding:0 4px;font-family:inherit;">!✌️'
            );
        lines.push('✨Верно ответив на большинство вопросов.✨');
        lines.push('⚜️Именно он забирает главный приз в размере ' + prize + '!⚜️');
        lines.push('⚠️Победителя ждем в офисе Weazel News для получения выигрыша.⚠️');
        if (sponsor) lines.push('❤️️Спонсор сегодняшней игры - ' + sponsor + '.❤️️');
        else lines.push('');
        lines.push('❤️️С Уважением отдел мероприятий Weazel News!❤️️');

        // Рендерим
        let html = '';
        let n = 1;
        lines.forEach(text => {
            html += '<div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">' + n +
                '</span><span class="line-text">' + text + '</span></div>';
            n++;
        });
        document.getElementById('quiz-text').innerHTML = html;
        updateLeaderboard();
    }

    // ===== ТАБЛИЦА ЛИДЕРОВ =====
    function updateLeaderboard() {
        const inputs = document.querySelectorAll('.winner-input');
        const scores = {};
        inputs.forEach(el => {
            const name = el.value.trim();
            if (name && name !== 'имя победителя' && name !== 'имя') {
                if (!scores[name]) scores[name] = 0;
                scores[name] += 1;
            }
        });
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const tbody = document.getElementById('lb-body');
        let html = '';
        for (let i = 0; i < 10; i++) {
            const name = i < sorted.length ? sorted[i][0] : '';
            const score = i < sorted.length ? sorted[i][1] : 0;
            html += '<tr><td class="rank">' + (i + 1) + '</td><td>' + name + '</td><td class="score">' + score + '</td></tr>';
        }
        tbody.innerHTML = html;
    }

    // ===== КОПИРОВАТЬ ВСЮ ВИКТОРИНУ =====
    function copyFullQuiz() {
        const lines = document.querySelectorAll('#quiz-text .text-line .line-text');
        let text = '';
        lines.forEach(el => {
            let t = el.textContent.trim();
            if (t) text += t + '\n';
        });
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
            const b = document.querySelector('.btn-pink.mt-12');
            const o = b.textContent;
            b.textContent = '✅ Скопировано!';
            setTimeout(() => b.textContent = o, 1500);
        }).catch(() => {
            const t = document.createElement('textarea');
            t.value = text;
            document.body.appendChild(t);
            t.select();
            document.execCommand('copy');
            document.body.removeChild(t);
            const b = document.querySelector('.btn-pink.mt-12');
            const o = b.textContent;
            b.textContent = '✅ Скопировано!';
            setTimeout(() => b.textContent = o, 1500);
        });
    }

    // ===== ИНТЕРАКТИВЫ =====
    function showInteractive() {
        const sel = document.getElementById('interactive-select');
        const val = sel.value;
        const c = document.getElementById('interactive-content');
        if (!val) {
            c.innerHTML = '<div class="empty-state"><span class="big-icon">🎯</span><h3>Выберите интерактив</h3></div>';
            return;
        }

        const texts = {
            'find-car': `
            <div class="card"><h2>🚗 Операция: найди машину</h2>
            <div class="accordion open"><div class="accordion-header">📌 Начало <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
            <div class="accordion-body"><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">✨ Доброго времени суток, дорогие жители и гости штата! ✨</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☘️ И сегодня мы проведем для Вас мероприятие..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «Операция: найди машину». ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⚜️ Призовой фонд мероприятия - 60.000$. ⚜️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">⛰️ Вам необходимо найти три катающиеся машины в городе Лос-Сантос..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">..определённого цвета и номера. ⛰️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">☘️ И тот, кто первый сядет в машину, получит приз! ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">◻️ Итак, приступим! ◻️</span></div>
            </div></div></div>
            <div class="accordion open"><div class="accordion-header">⚠️ Поиск <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
            <div class="accordion-body"><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">⚠️ Первый автомобиль - ... цвета с номерным знаком ... . ⚠️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">⛔ Спешите оказаться первым, кто найдет машину! ⛔</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">⭐ Удачных поисков! ⭐</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">✅ Первый автомобиль найден! ✅</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⚠️ Второй автомобиль - ... цвета с номерным знаком ... . ⚠️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">⛔ Спешите оказаться первым, кто найдет машину! ⛔</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">⭐ Удачных поисков! ⭐</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">✅ Второй автомобиль найден! ✅</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">⚠️ Третий автомобиль - ... цвета с номерным знаком ... . ⚠️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">⛔ Спешите оказаться первым, кто найдет машину! ⛔</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">11</span><span class="line-text">⭐ Удачных поисков! ⭐</span></div>
            </div></div></div>
            <div class="accordion open"><div class="accordion-header">🏁 Конец <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
            <div class="accordion-body"><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">☘️ Все машины найдены и победители забрали свои призы! ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">⭐ Благодарим всех участников и желаем хорошего настроения! ⭐</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">❤️ С уважением, организация - Weazel News. ❤️</span></div>
            </div></div></div>
            <div class="accordion open"><div class="accordion-header">📌 Напоминалка <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
            <div class="accordion-body"><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">✨ Напоминаем, что прямо сейчас проходит мероприятие..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">..под названием «Операция: найди машину». ✨</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">⛰️ Вам необходимо найти три катающиеся машины в городе Лос-Сантос..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..определённого цвета и номера. ⛰️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">☘️ И тот, кто первый сядет в машину, получит приз! ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">◻️ Итак, приступим. ◻️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">⚠️ ... автомобиль - ... цвета с номерным знаком .... ⚠️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">⛔ Спешите оказаться первым, кто найдет машину! ⛔</span></div>
            </div></div></div></div>`,
            'joke': `
            <div class="card"><h2>😂 Я знаю анекдот</h2><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые гости и жители штата! ◻️◻️◽</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☄️ Наши сотрудники приглашают Вас на мероприятие..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «Я знаю анекдот». ☄️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⛹️ Мы хотим услышать ваши лучшие шутки! ⛹️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">☘️ Ждем Вас на GPS-меткe, в вашем навигаторе! ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">☝️ Нам не хватает именно тебя! ☝️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">✅ Присоединяйтесь к нам! ✅</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">⚡ Общий призовой фонд составляет 50.000$. ⚡</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">◾◼️◼️ С уважением, редакция Weazel News. ◼️◼️◾</span></div>
            </div></div>`,
            'roulette': `
            <div class="card"><h2>🔫 Русская рулетка</h2><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые гости и жители штата! ◻️◻️◽</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☄️ Наши сотрудники приглашают Вас на мероприятие..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «Русская рулетка». ☄️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⛹️ Это увлекательное соревнование, где каждому участнику предстоит испытать свою удачу.</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">✍️ Правила и суть мероприятия Вам расскажут на месте сбора. ✍️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">☝️ Место встречи отмечено на GPS-метке в Вашем навигаторе. ☝️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">✅ Присоединяйтесь к нам и испытайте свою удачу! ✅</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">⚡ Общий призовой фонд составляет 50.000$. ⚡</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">◾◼️◼️ С уважением, редакция Weazel News. ◼️◼️◾</span></div>
            </div>
            <div class="info-box"><strong>📌 Макрос организатора (не для эфира):</strong><br><span style="font-size:.75rem;word-break:break-all;">WyLQoNGD0LvQtdGC0LrQsCIsW3siaWQiOiJhbmltX3BsYXkiLCJwYXJhbXMiOlsi0KHQvtGG0LjQsNC70YzQvdGL0LUiLCLQktGL0YHRgtGA0LXQuyDQuNC3INC/0LDQu9GM0YbQsCJdfSx7ImlkIjoiY2hhdF9ycF9tZSIsInBhcmFtcyI6WyLQstGL0YHRgtGA0LXQu9C40Lsg0LjQtyDQv9C10LnQvdGC0LHQvtC70YzQvdC+0LPQviDQvNCw0YDQutC10YDQsCJdfSx7ImlkIjoiY2hhdF9ycF90cnkiLCJwYXJhbXMiOlsi0L/QvtGB0LvQtSDQstGL0YHRgtGA0LXQu9CwINC40YHQv9Cw0YfQutCw0Lsg0L7QtNC10LbQtNGDIEB0YXJnZXQiXX0seyJpZCI6ImFuaW1fc3RvcCIsInBhcmFtcyI6W119XV0=</span></div></div>`,
            'who-am-i': `
            <div class="card"><h2>❓ Кто я</h2><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые гости и жители штата! ◻️◻️◽</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☄️ Наши сотрудники приглашают Вас на мероприятие..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «Кто я?». ☄️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⛹️ Вас ждет увлекательный мир загадок, где нужно угадывать персонажей..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">..и двигаться к победе шаг за шагом! ⛹️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">☘️ Ждем Вас на GPS-меткe, в вашем навигаторе! ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">☝️ Нам не хватает именно тебя! ☝️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">✅ Присоединяйтесь к нам! ✅</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">⚡ Общий призовой фонд составляет XX.XXX$. ⚡</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">11</span><span class="line-text">◾◼️◼️ С уважением, редакция Weazel News. ◼️◼️◾</span></div>
            </div></div>`,
            'improvisation': `
            <div class="card"><h2>🎭 Импровизация на букву</h2><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые гости и жители штата! ◻️◻️◽</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☄️ Наши сотрудники приглашают Вас на мероприятие..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «Импровизация на букву». ☄️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">☝️ Умеете выпутываться из сложных ситуаций? ☝️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">⛹️ Хотите посмеяться и поднять себе настроение? ⛹️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">☘️ Тогда приезжайте скорее..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">..на GPS-метку, отображенную у вас в навигаторе! ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">✅ Участвовать могут все желающие. ✅</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">⚡ Призовой фонд мероприятия - 50.000$. ⚡</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">11</span><span class="line-text">◾◼️◼️ С уважением, редакция Weazel News. ◼️◼️◾</span></div>
            </div>
            <div class="info-box"><strong>📌 Суть интерактива (не для эфира):</strong><br>Все участники делятся на пары, ведущий подготавливает 5 рп ситуаций. Каждой паре даётся одна из ситуаций. Задача одного человека в паре пытаться вывести второго на диалог, а второй может отвечать словами только на одну определённую букву, заданную ведущим. Все участники получают призы.</div></div>`,
            'mirror': `
            <div class="card"><h2>🪞 Зеркало</h2><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые гости и жители штата! ◻️◻️◽</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☄️ Сотрудники Weazel News приглашают Вас на...</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..мероприятие под названием «Зеркало». ☄️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">☘️ Вы опытный танцор? Тогда приезжайте скорее..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">на GPS-метку, отображенную у вас в навигаторе! ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">✅ Участвовать могут все желающие. ✅</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">⚡ Призовой фонд мероприятия - 50.000$. ⚡</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">◾◼️◼️ С уважением, редакция Weazel News. ◼️◼️◾</span></div>
            </div>
            <div class="info-box"><strong>📌 Суть интерактива (не для эфира):</strong><br>Организатор ставит всех участников в ряд и делает любые движения (танцует, сидит и т.п.). Последний повторивший выбывает.</div></div>`,
            'fake-taxi': `
            <div class="card"><h2>🚕 Fake — Taxi</h2>
            <div class="accordion open"><div class="accordion-header">📌 Начало <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
            <div class="accordion-body"><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">✨Доброго времени суток, дорогие жители и гости штата!✨</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">⭐Хотим с радостью сообщить Вам, что в данный момент...</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">...будет проходить мероприятие «Fake — Taxi».⭐</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">☎️Суть данной игры довольно проста:</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">Вам нужно заказать такси, и если водителем окажется...</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">...сотрудник Weazel News, то согласиться на участие.☎️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">☄️Во время поездки сотрудник Weazel News задаст вам 10 вопросов.☄️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">⭕В случае правильного ответа на все 10 вопросов, начнется супер игра.⭕</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">⚜️За каждый верный ответ в банк выигрыша начисляется 1.000$.⚜️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">☘️За победу в супер игре в банк выигрыша начисляется 5.000$.☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">11</span><span class="line-text">✨Ждем Ваших вызовов и желаем удачи!✨</span></div>
            </div></div></div>
            <div class="accordion open"><div class="accordion-header">📌 Напоминание <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
            <div class="accordion-body"><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">✨Напоминаем, что прямо сейчас проходит мероприятие «Fake — Taxi»✨</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☎️Суть данной игры довольно проста:</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">Вам нужно заказать такси, и если водителем окажется...</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">...сотрудник Weazel News, то согласиться на участие.☎️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">☄️Во время поездки сотрудник Weazel News задаст вам 10 вопросов.☄️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">⭕В случае правильного ответа на все 10 вопросов, начнется супер игра.⭕</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">⚜️За каждый верный ответ в банк выигрыша начисляется 1.000$.⚜️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">☘️За победу в супер игре в банк выигрыша начисляется 5.000$.☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">⌚Ждем Ваших вызовов⌚</span></div>
            </div></div></div>
            <div class="accordion open"><div class="accordion-header">🏁 Конец <span class="arrow" onclick="toggleAccordion(this)">▼</span></div>
            <div class="accordion-body"><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">✨Доброго времени суток, дорогие жители и гости штата!✨</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☎️Наше мероприятие «Fake — Taxi» подошло к концу.☎️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☘️Победителем оказался человек с именем — *. Именно он выиграл xx.xxx$.☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">❤️️Всем огромное спасибо за участие!❤️️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">✨С уважением, отдел таксистов Weazel News.✨</span></div>
            </div></div></div></div>`,
            'psychic': `
            <div class="card"><h2>🔮 Битва экстрасенсов</h2><div class="text-block">
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">❤️️ Здравствуйте, уважаемые гости и жители штата! ❤️️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">⭐Сотрудники Weazel News приглашают Вас на...</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">..мероприятие под названием «Битва экстрасенсов». ⭐</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">☕ Хотите проверить свою интуицию? ☕</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">☘️ Или просто испытать удачу? ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">⭕ Тогда приезжайте на GPS-метку, установленную..</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">..в вашем навигаторе. ⭕</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">☄️Общий призовой фонд составляет 60.000$.☄️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">☘️ Желаем Вам удачи! ☘️</span></div>
                <div class="text-line"><button class="copy-btn" onclick="copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">❤️ С уважением, отдел экстрасенсов Weazel News. ❤️</span></div>
            </div></div>`
        };
        c.innerHTML = texts[val] || '<div class="empty-state"><span class="big-icon">❌</span><h3>Шаблон не найден</h3></div>';
    }

    // ===== ПОИСК =====
    document.getElementById('search').addEventListener('input', function() {
        const q = this.value.toLowerCase().trim();
        document.querySelectorAll('.tab-content').forEach(tab => {
            const cards = tab.querySelectorAll('.card');
            let has = false;
            cards.forEach(c => {
                const m = q === '' || c.textContent.toLowerCase().includes(q);
                c.style.display = m ? '' : 'none';
                if (m) has = true;
            });
            tab.style.display = has || q === '' ? '' : 'none';
        });
    });

    window.onload = function() {
        renderQuiz();
    };
</script>
</body>
</html>
