function initHR() {
    document.querySelectorAll('#hr-cats .category-btn').forEach(function(b) {
        b.addEventListener('click', function() {
            var p = this.closest('#hr-cats');
            p.querySelectorAll('.category-btn').forEach(function(x) { x.classList.remove('active'); });
            this.classList.add('active');
            var cat = this.dataset.cat;
            document.querySelectorAll('.hr-cat').forEach(function(x) { x.classList.add('hidden'); });
            document.getElementById(cat).classList.remove('hidden');
            localStorage.setItem('hrSubTab', cat);
        });
    });
    
    // Обработка кнопок копирования
    document.querySelectorAll('.copy-btn').forEach(function(b) {
        b.addEventListener('click', function() {
            window.copyLine(this);
        });
    });
    
    var startH = document.getElementById('startH');
    var startM = document.getElementById('startM');
    var endH = document.getElementById('endH');
    var endM = document.getElementById('endM');
    
    // Восстанавливаем сохраненное время
    var savedStartH = localStorage.getItem('hrStartH');
    var savedStartM = localStorage.getItem('hrStartM');
    var savedEndH = localStorage.getItem('hrEndH');
    var savedEndM = localStorage.getItem('hrEndM');
    
    if (savedStartH && startH) startH.value = parseInt(savedStartH);
    if (savedStartM && startM) startM.value = parseInt(savedStartM);
    if (savedEndH && endH) endH.value = parseInt(savedEndH);
    if (savedEndM && endM) endM.value = parseInt(savedEndM);
    
    if(startH) startH.addEventListener('change', window.updateTime);
    if(startM) startM.addEventListener('change', window.updateTime);
    if(endH) endH.addEventListener('change', window.updateTime);
    if(endM) endM.addEventListener('change', window.updateTime);
    if (typeof window.updateTime === 'function') window.updateTime();
    
    var savedSub = localStorage.getItem('hrSubTab');
    if (savedSub) {
        var btn = document.querySelector('#hr-cats .category-btn[data-cat="' + savedSub + '"]');
        if (btn) btn.click();
    }
}

window.updateTime = function() {
    var h1 = document.getElementById('startH')?.value.padStart(2,'0') || '20';
    var m1 = document.getElementById('startM')?.value.padStart(2,'0') || '20';
    var h2 = document.getElementById('endH')?.value.padStart(2,'0') || '20';
    var m2 = document.getElementById('endM')?.value.padStart(2,'0') || '40';
    
    // Сохраняем время в localStorage
    localStorage.setItem('hrStartH', h1);
    localStorage.setItem('hrStartM', m1);
    localStorage.setItem('hrEndH', h2);
    localStorage.setItem('hrEndM', m2);
    
    var lines = document.querySelectorAll('#hr-start .text-line');
    if (lines.length >= 5) {
        var l = lines[4].querySelector('.line-text');
        if (l) l.textContent = '⚠️ Собеседование пройдет с ' + h1 + ':' + m1 + ' до ' + h2 + ':' + m2 + '. ⚠️';
    }
};
