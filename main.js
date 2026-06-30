function initMain() {
    document.querySelectorAll('#main-cats .category-btn').forEach(function(b) {
        b.addEventListener('click', function() {
            var p = this.closest('#main-cats');
            p.querySelectorAll('.category-btn').forEach(function(x) { x.classList.remove('active'); });
            this.classList.add('active');
            var cat = this.dataset.cat;
            document.querySelectorAll('.main-cat').forEach(function(x) { x.classList.add('hidden'); });
            document.getElementById(cat).classList.remove('hidden');
            localStorage.setItem('mainSubTab', cat);
        });
    });
    
    document.querySelectorAll('.accordion .arrow').forEach(function(arrow) {
        arrow.addEventListener('click', function(e) {
            e.stopPropagation();
            window.toggleAccordion(this);
        });
    });
    
    document.querySelectorAll('.copy-btn').forEach(function(b) {
        b.addEventListener('click', function() {
            window.copyLine(this);
        });
    });
    
    var savedSub = localStorage.getItem('mainSubTab');
    if (savedSub) {
        var btn = document.querySelector('#main-cats .category-btn[data-cat="' + savedSub + '"]');
        if (btn) btn.click();
    }
}
