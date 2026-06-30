// ============================================================
//  ДАННЫЕ ИНТЕРАКТИВОВ
// ============================================================
var interactiveNames = {
    'mirror': '🪞 Зеркало', 'fake-taxi': '🚕 Fake — Taxi', 'psychic': '🔮 Битва экстрасенсов',
    'truth-lie': '❓ Правда или ложь', 'pickup': '❤️ Подкаты', 'beach': '🏖️ Пляжная вечеринка',
    'poetry': '📝 Вечер поэзии', 'mystic': '🌙 Мистические истории', 'car-search': '🚘 Поиск автомобиля',
    'simon': '🎯 Саймон говорит', 'joke': '😂 Я знаю анекдот'
};

function getInteractiveBase(name) {
    return '<div class="card"><h2>' + name + '</h2><div class="text-block">' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые гости и жители штата! ◻️◻️◽</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☄️ Наши сотрудники приглашают Вас на мероприятие..</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «' + name + '». ☄️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⛹️ Приходите, будет интересно и весело! ⛹️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">☘️ Ждем Вас на GPS-меткe, в вашем навигаторе! ☘️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">✅ Присоединяйтесь к нам! ✅</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">⚡ Призовой фонд - XX.XXX$. ⚡</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">◾◼️◼️ С уважением, редакция Weazel News. ◼️◼️◾</span></div>' +
    '</div></div>';
}

var interactiveTexts = {};

interactiveTexts['find-car'] = '<div class="card"><h2>🚗 Операция: найди машину</h2>' +
    '<div class="accordion open"><div class="accordion-header"><span class="title">📌 Начало</span><span class="arrow" onclick="window.toggleAccordion(this)">▼</span></div>' +
    '<div class="accordion-body"><div class="text-block">' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">✨ Доброго времени суток, дорогие жители и гости штата! ✨</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☘️ И сегодня мы проведем для Вас мероприятие..</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «Операция: найди машину». ☘️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⚜️ Призовой фонд мероприятия - 60.000$. ⚜️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">⛰️ Вам необходимо найти три катающиеся машины в городе Лос-Сантос..</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">..определённого цвета и номера. ⛰️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">☘️ И тот, кто первый сядет в машину, получит приз! ☘️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">◻️ Итак, приступим! ◻️</span></div>' +
    '</div></div></div>' +
    '<div class="accordion open"><div class="accordion-header"><span class="title">⚠️ Поиск</span><span class="arrow" onclick="window.toggleAccordion(this)">▼</span></div>' +
    '<div class="accordion-body"><div class="text-block">' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">⚠️ Первый автомобиль - ... цвета с номерным знаком ... . ⚠️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">⛔ Спешите оказаться первым, кто найдет машину! ⛔</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">⭐ Удачных поисков! ⭐</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">✅ Первый автомобиль найден! ✅</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⚠️ Второй автомобиль - ... цвета с номерным знаком ... . ⚠️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">⛔ Спешите оказаться первым, кто найдет машину! ⛔</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">⭐ Удачных поисков! ⭐</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">✅ Второй автомобиль найден! ✅</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">⚠️ Третий автомобиль - ... цвета с номерным знаком ... . ⚠️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">⛔ Спешите оказаться первым, кто найдет машину! ⛔</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">11</span><span class="line-text">⭐ Удачных поисков! ⭐</span></div>' +
    '</div></div></div>' +
    '<div class="accordion open"><div class="accordion-header"><span class="title">🏁 Конец</span><span class="arrow" onclick="window.toggleAccordion(this)">▼</span></div>' +
    '<div class="accordion-body"><div class="text-block">' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">☘️ Все машины найдены и победители забрали свои призы! ☘️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">⭐ Благодарим всех участников и желаем хорошего настроения! ⭐</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">❤️ С уважением, организация - Weazel News. ❤️</span></div>' +
    '</div></div></div>' +
    '<div class="accordion open"><div class="accordion-header"><span class="title">📌 Напоминалка</span><span class="arrow" onclick="window.toggleAccordion(this)">▼</span></div>' +
    '<div class="accordion-body"><div class="text-block">' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">✨ Напоминаем, что прямо сейчас проходит мероприятие..</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">..под названием «Операция: найди машину». ✨</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">⛰️ Вам необходимо найти три катающиеся машины в городе Лос-Сантос..</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..определённого цвета и номера. ⛰️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">☘️ И тот, кто первый сядет в машину, получит приз! ☘️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">◻️ Итак, приступим. ◻️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">⚠️ ... автомобиль - ... цвета с номерным знаком .... ⚠️</span></div>' +
        '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">⛔ Спешите оказаться первым, кто найдет машину! ⛔</span></div>' +
    '</div></div></div></div>';

interactiveTexts['roulette'] = '<div class="card"><h2>🔫 Русская рулетка</h2><div class="text-block"><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые гости и жители штата! ◻️◻️◽</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☄️ Наши сотрудники приглашают Вас на мероприятие..</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «Русская рулетка». ☄️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⛹️ Это увлекательное соревнование, где каждому участнику предстоит испытать свою удачу.</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">✍️ Правила и суть мероприятия Вам расскажут на месте сбора. ✍️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">☝️ Место встречи отмечено на GPS-метке в Вашем навигаторе. ☝️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">✅ Присоединяйтесь к нам и испытайте свою удачу! ✅</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">⚡ Общий призовой фонд составляет 50.000$. ⚡</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">◾◼️◼️ С уважением, редакция Weazel News. ◼️◼️◾</span></div></div></div>';

interactiveTexts['who-am-i'] = '<div class="card"><h2>❓ Кто я</h2><div class="text-block"><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые гости и жители штата! ◻️◻️◽</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☄️ Наши сотрудники приглашают Вас на мероприятие..</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «Кто я?». ☄️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">⛹️ Вас ждет увлекательный мир загадок, где нужно угадывать персонажей..</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">..и двигаться к победе шаг за шагом! ⛹️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">☘️ Ждем Вас на GPS-меткe, в вашем навигаторе! ☘️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">☝️ Нам не хватает именно тебя! ☝️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">✅ Присоединяйтесь к нам! ✅</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">⚡ Общий призовой фонд составляет XX.XXX$. ⚡</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">11</span><span class="line-text">◾◼️◼️ С уважением, редакция Weazel News. ◼️◼️◾</span></div></div></div>';

interactiveTexts['improvisation'] = '<div class="card"><h2>🎭 Импровизация на букву</h2><div class="text-block"><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">1</span><span class="line-text">◽◻️◻️ Здравствуйте, уважаемые гости и жители штата! ◻️◻️◽</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">2</span><span class="line-text">☀️ С Вами редакция Weazel News! ☀️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">3</span><span class="line-text">☄️ Наши сотрудники приглашают Вас на мероприятие..</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">4</span><span class="line-text">..под названием «Импровизация на букву». ☄️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">5</span><span class="line-text">☝️ Умеете выпутываться из сложных ситуаций? ☝️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">6</span><span class="line-text">⛹️ Хотите посмеяться и поднять себе настроение? ⛹️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">7</span><span class="line-text">☘️ Тогда приезжайте скорее..</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">8</span><span class="line-text">..на GPS-метку, отображенную у вас в навигаторе! ☘️</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">9</span><span class="line-text">✅ Участвовать могут все желающие. ✅</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">10</span><span class="line-text">⚡ Призовой фонд мероприятия - 50.000$. ⚡</span></div><div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">11</span><span class="line-text">◾◼️◼️ С уважением, редакция Weazel News. ◼️◼️◾</span></div></div></div>';

var interactiveList = ['mirror', 'fake-taxi', 'psychic', 'truth-lie', 'pickup', 'beach', 'poetry', 'mystic', 'car-search', 'simon', 'joke'];
interactiveList.forEach(function(key) {
    interactiveTexts[key] = getInteractiveBase(interactiveNames[key] || key);
});

window.showInteractive = function() {
    var sel = document.getElementById('interactive-select');
    var val = sel ? sel.value : '';
    var c = document.getElementById('interactive-content');
    if(!c) return;
    if(!val){ c.innerHTML = '<div class="empty-state"><span class="big-icon">🎯</span><h3>Выберите интерактив</h3></div>'; return; }
    c.innerHTML = interactiveTexts[val] || '<div class="empty-state"><span class="big-icon">❌</span><h3>Шаблон не найден</h3></div>';
    setTimeout(function() {
        document.querySelectorAll('#interactive-content .copy-btn').forEach(function(b) {
            b.addEventListener('click', function() { window.copyLine(this); });
        });
        document.querySelectorAll('#interactive-content .accordion .arrow').forEach(function(arrow) {
            arrow.addEventListener('click', function(e) {
                e.stopPropagation();
                window.toggleAccordion(this);
            });
        });
        // Восстанавливаем состояние кнопок после рендера
        restoreCopiedState();
    }, 50);
};

// ============================================================
//  СОХРАНЕНИЕ СОСТОЯНИЯ КОПИРОВАНИЯ
// ============================================================
var COPIED_STATE_KEY = 'weazel_copied_lines';

// Сохраняем состояние скопированных строк
function saveCopiedState(lineIndex) {
    var copied = JSON.parse(localStorage.getItem(COPIED_STATE_KEY) || '[]');
    if (!copied.includes(lineIndex)) {
        copied.push(lineIndex);
        localStorage.setItem(COPIED_STATE_KEY, JSON.stringify(copied));
    }
}

// Проверяем, скопирована ли строка
function isLineCopied(lineIndex) {
    var copied = JSON.parse(localStorage.getItem(COPIED_STATE_KEY) || '[]');
    return copied.includes(lineIndex);
}

// Восстанавливаем состояние кнопок после рендера
function restoreCopiedState() {
    document.querySelectorAll('.text-line .copy-btn').forEach(function(btn) {
        var line = btn.closest('.text-line');
        var numEl = line.querySelector('.line-num');
        if (numEl) {
            var index = numEl.textContent.trim();
            if (isLineCopied(index)) {
                btn.textContent = '✅';
                btn.style.color = '#66bb6a';
            }
        }
    });
}

// Очищаем состояние при перезагрузке (только при загрузке страницы)
function clearCopiedStateOnLoad() {
    // Очищаем только если это новый сеанс (не навигация внутри)
    if (!sessionStorage.getItem('weazel_session_active')) {
        localStorage.removeItem(COPIED_STATE_KEY);
        sessionStorage.setItem('weazel_session_active', 'true');
    }
}

// ============================================================
//  ВИКТОРИНА
// ============================================================
var QUIZ_STORAGE_KEY = 'weazel_quiz_data';

window.saveQuizData = function() {
    var data = {
        name: document.getElementById('q-name')?.value || 'Викторина',
        topic: document.getElementById('q-topic')?.value || 'разные темы',
        prize: document.getElementById('q-prize')?.value || '25.000$',
        sponsor: document.getElementById('q-sponsor')?.value || '',
        questions: {},
        answers: {},
        winners: {}
    };
    document.querySelectorAll('.q-val').forEach(function(el) {
        data.questions[el.dataset.idx] = el.value || '';
    });
    document.querySelectorAll('.a-val').forEach(function(el) {
        data.answers[el.dataset.idx] = el.value || '';
    });
    document.querySelectorAll('.winner-input').forEach(function(el) {
        data.winners[el.dataset.idx] = el.value || '';
    });
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(data));
};

window.loadSavedQuizData = function() {
    try {
        var saved = localStorage.getItem(QUIZ_STORAGE_KEY);
        if (!saved) return;
        var data = JSON.parse(saved);
        if (data.name) { var el = document.getElementById('q-name'); if (el) el.value = data.name; }
        if (data.topic) { var el = document.getElementById('q-topic'); if (el) el.value = data.topic; }
        if (data.prize) { var el = document.getElementById('q-prize'); if (el) el.value = data.prize; }
        if (data.sponsor) { var el = document.getElementById('q-sponsor'); if (el) el.value = data.sponsor; }
        if (data.questions) {
            document.querySelectorAll('.q-val').forEach(function(el) {
                if (data.questions[el.dataset.idx] !== undefined) el.value = data.questions[el.dataset.idx];
            });
        }
        if (data.answers) {
            document.querySelectorAll('.a-val').forEach(function(el) {
                if (data.answers[el.dataset.idx] !== undefined) el.value = data.answers[el.dataset.idx];
            });
        }
    } catch(e) {}
};

window.clearQuizData = function() {
    if (!confirm('⚠️ Очистить все вопросы и ответы викторины?')) return;
    localStorage.removeItem(QUIZ_STORAGE_KEY);
    document.querySelectorAll('.q-val, .a-val, .winner-input').forEach(function(el) { el.value = ''; });
    document.getElementById('q-name').value = 'Викторина';
    document.getElementById('q-topic').value = 'разные темы';
    document.getElementById('q-prize').value = '25.000$';
    document.getElementById('q-sponsor').value = '';
    window.renderQuiz();
};

window.getLeaderboardWinner = function() {
    var inputs = document.querySelectorAll('.winner-input');
    var scores = {};
    inputs.forEach(function(el) {
        var name = el.value.trim();
        if(name && name !== 'имя победителя' && name !== 'имя') {
            if(!scores[name]) scores[name] = 0;
            scores[name] += 1;
        }
    });
    var sorted = Object.entries(scores).sort(function(a, b) { return b[1] - a[1]; });
    return sorted.length > 0 ? sorted[0][0] : '[ИМЯ ПОБЕДИТЕЛЯ]';
};

window.updateLeaderboard = function() {
    var inputs = document.querySelectorAll('.winner-input');
    var scores = {};
    inputs.forEach(function(el) {
        var name = el.value.trim();
        if(name && name !== 'имя победителя' && name !== 'имя') {
            if(!scores[name]) scores[name] = 0;
            scores[name] += 1;
        }
    });
    var sorted = Object.entries(scores).sort(function(a, b) { return b[1] - a[1]; });
    var tbody = document.getElementById('lb-body');
    if(!tbody) return;
    var html = '';
    for(var i = 0; i < 10; i++) {
        var name = i < sorted.length ? sorted[i][0] : '—';
        var score = i < sorted.length ? sorted[i][1] : 0;
        html += '<tr><td class="rank">' + (i + 1) + '</td><td>' + name + '</td><td class="score">' + score + '</td></tr>';
    }
    tbody.innerHTML = html;
    var winner = window.getLeaderboardWinner();
    var display = document.getElementById('winner-name-display');
    if(display) display.textContent = winner;
};

window.renderQuiz = function() {
    var name = document.getElementById('q-name')?.value || 'Викторина';
    var topic = document.getElementById('q-topic')?.value || 'разные темы';
    var prize = document.getElementById('q-prize')?.value || '25.000$';
    var sponsor = document.getElementById('q-sponsor')?.value.trim() || '';

    var qs = {};
    var ans = {};
    document.querySelectorAll('.q-val').forEach(function(el) { qs[el.dataset.idx] = el.value || '???'; });
    document.querySelectorAll('.a-val').forEach(function(el) { ans[el.dataset.idx] = el.value || '???'; });

    var savedWinners = {};
    try {
        var saved = localStorage.getItem(QUIZ_STORAGE_KEY);
        if (saved) {
            var data = JSON.parse(saved);
            if (data.winners) savedWinners = data.winners;
        }
    } catch(e) {}

    var exampleQ = 'На какой планете мы живем?';
    var exampleA = 'Земля.';

    var lines = [
        '✨Доброго времени суток, дорогие жители и гости штата!✨',
        '☀️С Вами редакция Weazel News!',
        'И сегодня мы проведем для Вас мини-игру.☀️',
        '⚜️Под названием «' + name + '» с призовым фондом: ' + prize + '.⚜️',
        '⚠️Суть данной игры довольно проста: ',
        'Мы задаем вопросы связанные с ' + topic + '.',
        'А Вы отвечаете на них.',
        '⚪Пример: ' + exampleQ,
        '✅Правильный ответ: ' + exampleA,
        'За каждый правильный ответ Вы получаете 1 балл.',
        'Кто даст больше правильных ответов — заберет главный приз.',
        '▶️Ответы отправлять на номер 995-105.',
        'Обязательно указывайте свое Имя и Фамилию!◀️'
    ];
    if(sponsor) lines.push('❤️️Спонсор сегодняшней игры - ' + sponsor + '.❤️️');
    else lines.push('');
    lines.push('Итак... Начнем!✍️');

    for(var i = 1; i <= 5; i++) {
        var label = i === 1 ? 'Первый' : 'Следующий';
        var wVal = savedWinners[i] || '';
        lines.push('⚪' + label + ' вопрос: ' + qs[i] + '?');
        lines.push('✅Правильный ответ: ' + ans[i] + '.');
        lines.push('Первым прислал правильный ответ человек с именем – <input class="winner-input" data-idx="' + i + '" value="' + wVal + '" placeholder="имя" style="border-bottom:1px dashed #555;background:transparent;color:#ff6b9d;font-size:.92rem;width:auto;min-width:60px;padding:0 4px;font-family:inherit;">');
        lines.push('Именно он получает 1 балл.');
    }

    lines.push('☄️Напоминаем, Ваша задача прислать правильный ответ в нашу студию.');
    lines.push('Обязательно указывайте свое имя и фамилию.');
    lines.push('СМС Вы сможете отправить по номеру — 995-105.☄️');
    if(sponsor) lines.push('❤️️Спонсор сегодняшней игры - ' + sponsor + '.❤️️');
    else lines.push('');

    for(var i = 6; i <= 9; i++) {
        var wVal = savedWinners[i] || '';
        lines.push('⚪Следующий вопрос: ' + qs[i] + '?');
        lines.push('✅Правильный ответ: ' + ans[i] + '.');
        lines.push('Первым прислал правильный ответ человек с именем – <input class="winner-input" data-idx="' + i + '" value="' + wVal + '" placeholder="имя" style="border-bottom:1px dashed #555;background:transparent;color:#ff6b9d;font-size:.92rem;width:auto;min-width:60px;padding:0 4px;font-family:inherit;">');
        lines.push('Именно он получает 1 балл.');
    }

    var w10 = savedWinners[10] || '';
    lines.push('⚪Последний вопрос: ' + qs[10] + '?');
    lines.push('✅Правильный ответ: ' + ans[10] + '.');
    lines.push('Первым прислал правильный ответ человек с именем – <input class="winner-input" data-idx="10" value="' + w10 + '" placeholder="имя" style="border-bottom:1px dashed #555;background:transparent;color:#ff6b9d;font-size:.92rem;width:auto;min-width:60px;padding:0 4px;font-family:inherit;">');
    lines.push('Именно он получает 1 балл.');
    lines.push('');
    lines.push('✌️По итогам мини-игры «' + name + '».');

    var currentWinner = window.getLeaderboardWinner();
    lines.push('Победу одержал человек с именем – <span id="winner-name-display">' + currentWinner + '</span>!✌️');
    lines.push('✨Верно ответив на большинство вопросов.✨');
    lines.push('⚜️Именно он забирает главный приз в размере ' + prize + '!⚜️');
    lines.push('⚠️Победителя ждем в офисе Weazel News для получения выигрыша.⚠️');
    if(sponsor) lines.push('❤️️Спонсор сегодняшней игры - ' + sponsor + '.❤️️');
    else lines.push('');
    lines.push('❤️️С Уважением отдел мероприятий Weazel News!❤️️');

    var html = '';
    var n = 1;
    lines.forEach(function(text) {
        html += '<div class="text-line"><button class="copy-btn" onclick="window.copyLine(this)">📋</button><span class="line-num">' + n + '</span><span class="line-text">' + text + '</span></div>';
        n++;
    });
    var container = document.getElementById('quiz-text');
    if(container) {
        container.innerHTML = html;
        container.querySelectorAll('.winner-input').forEach(function(el) {
            el.addEventListener('input', function() {
                window.saveQuizData();
                window.updateLeaderboard();
            });
        });
        // Восстанавливаем состояние кнопок
        restoreCopiedState();
        // Добавляем обработчики для новых кнопок
        container.querySelectorAll('.copy-btn').forEach(function(btn) {
            // Удаляем старые обработчики чтобы не дублировать
            btn.replaceWith(btn.cloneNode(true));
        });
        // Заново назначаем обработчики
        container.querySelectorAll('.copy-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                window.copyLine(this);
            });
        });
    }
    window.updateLeaderboard();
    window.saveQuizData();
};

// ПЕРЕОПРЕДЕЛЯЕМ ФУНКЦИЮ copyLine для сохранения состояния
var originalCopyLine = window.copyLine;
window.copyLine = function(btn) {
    var line = btn.closest('.text-line');
    var textElement = line.querySelector('.line-text');
    var text = textElement.textContent.trim();
    var input = textElement.querySelector('input');
    if (input) {
        var inputValue = input.value.trim() || input.placeholder || 'имя';
        var childNodes = textElement.childNodes;
        var beforeInput = '', afterInput = '';
        var foundInput = false;
        for (var i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeType === 3) {
                if (!foundInput) beforeInput += childNodes[i].textContent;
                else afterInput += childNodes[i].textContent;
            } else if (childNodes[i].nodeType === 1 && childNodes[i].tagName === 'INPUT') {
                foundInput = true;
            } else if (childNodes[i].nodeType === 1) {
                if (!foundInput) beforeInput += childNodes[i].textContent;
                else afterInput += childNodes[i].textContent;
            }
        }
        text = (beforeInput + inputValue + afterInput).trim();
    }
    if (!text) return;
    
    // Получаем номер строки для сохранения состояния
    var numEl = line.querySelector('.line-num');
    var lineIndex = numEl ? numEl.textContent.trim() : '0';
    
    navigator.clipboard.writeText(text).then(function() {
        btn.textContent = '✅';
        btn.style.color = '#66bb6a';
        // Сохраняем состояние
        saveCopiedState(lineIndex);
    }).catch(function() {
        var t = document.createElement('textarea');
        t.value = text;
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        btn.textContent = '✅';
        btn.style.color = '#66bb6a';
        // Сохраняем состояние
        saveCopiedState(lineIndex);
    });
};

window.copyFullQuiz = function() {
    var lines = document.querySelectorAll('#quiz-text .text-line .line-text');
    var text = '';
    lines.forEach(function(el) { 
        var input = el.querySelector('input');
        if (input) {
            var fullText = el.textContent.trim();
            var beforeInput = '';
            var afterInput = '';
            var childNodes = el.childNodes;
            var foundInput = false;
            for (var i = 0; i < childNodes.length; i++) {
                if (childNodes[i].nodeType === 3) {
                    if (!foundInput) beforeInput += childNodes[i].textContent;
                    else afterInput += childNodes[i].textContent;
                } else if (childNodes[i].nodeType === 1 && childNodes[i].tagName === 'INPUT') {
                    foundInput = true;
                } else if (childNodes[i].nodeType === 1) {
                    if (!foundInput) beforeInput += childNodes[i].textContent;
                    else afterInput += childNodes[i].textContent;
                }
            }
            var inputValue = input.value.trim() || input.placeholder || 'имя';
            text += (beforeInput + inputValue + afterInput).trim() + '\n';
        } else {
            text += el.textContent.trim() + '\n';
        }
    });
    if(!text) return;
    navigator.clipboard.writeText(text).then(function() {
        var b = document.querySelector('.btn-pink.mt-12');
        if(b){ var o = b.textContent; b.textContent = '✅ Скопировано!'; b.style.color = '#66bb6a'; setTimeout(function() { b.textContent = o; b.style.color = '#fff'; }, 1500); }
    }).catch(function() {
        var t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t);
        var b = document.querySelector('.btn-pink.mt-12');
        if(b){ var o = b.textContent; b.textContent = '✅ Скопировано!'; b.style.color = '#66bb6a'; setTimeout(function() { b.textContent = o; b.style.color = '#fff'; }, 1500); }
    });
};

// ============================================================
//  ИНИЦИАЛИЗАЦИЯ EVENT
// ============================================================
function initEvent() {
    // Очищаем состояние копирования при загрузке
    clearCopiedStateOnLoad();
    
    document.querySelectorAll('#event-cats .category-btn').forEach(function(b) {
        b.addEventListener('click', function() {
            var p = this.closest('#event-cats');
            p.querySelectorAll('.category-btn').forEach(function(x) { x.classList.remove('active'); });
            this.classList.add('active');
            var cat = this.dataset.cat;
            document.querySelectorAll('.event-cat').forEach(function(x) { x.classList.add('hidden'); });
            document.getElementById(cat).classList.remove('hidden');
            if (cat === 'event-quiz') window.renderQuiz();
            if (cat === 'event-interactive') window.showInteractive();
            localStorage.setItem('eventSubTab', cat);
        });
    });
    
    document.querySelectorAll('.accordion .arrow').forEach(function(arrow) {
        arrow.addEventListener('click', function(e) {
            e.stopPropagation();
            window.toggleAccordion(this);
        });
    });
    
    // Для обычных копи-кнопок (не в викторине) тоже сохраняем состояние
    document.querySelectorAll('.copy-btn').forEach(function(b) {
        b.addEventListener('click', function() {
            window.copyLine(this);
        });
    });
    
    var select = document.getElementById('interactive-select');
    if(select) select.addEventListener('change', window.showInteractive);
    
    var qName = document.getElementById('q-name');
    var qTopic = document.getElementById('q-topic');
    var qPrize = document.getElementById('q-prize');
    var qSponsor = document.getElementById('q-sponsor');
    
    window.loadSavedQuizData();
    
    if(qName) qName.addEventListener('input', function() { window.saveQuizData(); window.renderQuiz(); });
    if(qTopic) qTopic.addEventListener('input', function() { window.saveQuizData(); window.renderQuiz(); });
    if(qPrize) qPrize.addEventListener('input', function() { window.saveQuizData(); window.renderQuiz(); });
    if(qSponsor) qSponsor.addEventListener('input', function() { window.saveQuizData(); window.renderQuiz(); });
    
    document.querySelectorAll('.q-val, .a-val').forEach(function(el) {
        el.addEventListener('input', function() { window.saveQuizData(); });
    });
    
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('winner-input')) {
            window.saveQuizData();
            window.updateLeaderboard();
        }
    });
    
    var quizText = document.getElementById('quiz-text');
    if (quizText) {
        quizText.addEventListener('input', function(e) {
            if (e.target.classList.contains('winner-input')) {
                window.saveQuizData();
                window.updateLeaderboard();
            }
        });
    }
    
    window.renderQuiz();
    if(select && select.value) window.showInteractive();
    
    var savedSub = localStorage.getItem('eventSubTab');
    if (savedSub) {
        var btn = document.querySelector('#event-cats .category-btn[data-cat="' + savedSub + '"]');
        if (btn) btn.click();
    }
}
