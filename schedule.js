function initSchedule() {
    console.log('initSchedule вызван');
    
    var buttons = document.querySelectorAll('.tab-switcher button');
    var iframe = document.getElementById('schedule-iframe');
    var baseUrl = 'https://docs.google.com/spreadsheets/d/18N55IEwSovGITt2w2-6-TSPNELQCnVtq9CuDxy15y8g/edit?gid=';
    
    if (!buttons.length || !iframe) {
        console.warn('Не найдены кнопки или iframe');
        return;
    }
    
    // Функция переключения вкладки
    window.switchScheduleTab = function(gid, btn) {
        iframe.src = baseUrl + gid;
        buttons.forEach(function(b) {
            b.classList.remove('active');
        });
        if (btn) {
            btn.classList.add('active');
        } else {
            var found = document.querySelector('.tab-switcher button[data-gid="' + gid + '"]');
            if (found) found.classList.add('active');
        }
        localStorage.setItem('schedule_active_gid', gid);
    };
    
    // Навешиваем обработчики на кнопки
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var gid = this.getAttribute('data-gid');
            if (gid) {
                window.switchScheduleTab(gid, this);
            }
        });
    });
    
    // --- ДОБАВЛЯЕМ ПОМЕТКУ "(сегодня)" ---
    function markToday() {
        var days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        var today = new Date().getDay(); // 0=воскресенье
        var todayLabel = days[today];
        
        buttons.forEach(function(btn) {
            // Убираем старую пометку, если была
            var text = btn.textContent.replace(/\s*\(сегодня\)\s*/, '');
            btn.textContent = text;
            
            var dayAttr = btn.getAttribute('data-day');
            if (dayAttr !== null && dayAttr !== undefined && dayAttr !== '') {
                var dayNum = parseInt(dayAttr);
                if (dayNum === today) {
                    btn.textContent = text + ' (сегодня)';
                }
            }
        });
    }
    
    // Восстанавливаем сохраненную вкладку
    var savedGid = localStorage.getItem('schedule_active_gid');
    if (savedGid) {
        var activeBtn = document.querySelector('.tab-switcher button[data-gid="' + savedGid + '"]');
        if (activeBtn) {
            window.switchScheduleTab(savedGid, activeBtn);
            // После переключения добавляем пометку
            markToday();
            return;
        }
    }
    
    // По умолчанию — ПН (первая кнопка)
    var firstBtn = buttons[0];
    if (firstBtn) {
        var firstGid = firstBtn.getAttribute('data-gid');
        window.switchScheduleTab(firstGid, firstBtn);
    }
    
    // Добавляем пометку в любом случае
    markToday();
}