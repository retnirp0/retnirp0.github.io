// ============================================================
//  ДАННЫЕ КОДОВЫХ СЛОВ (все вариации, как в списке)
// ============================================================
var codesData = [
    { word: "автопарк", template: "☄️ Твой стиль — твоя визитная карточка. Мой  5️⃣VITO создаст его для тебя. ☄️", expires: "2026-07-22" },
    { word: "емска100", template: "☹️ Кошелёк опять на диете? В EMS кормят деньгами! Вступайте! ❣️", expires: "2026-07-30" },
    { word: "емска100", template: "☀️ Деньги сами себя не заработают. А вот в EMS — вполне! Присоединяйся к нашей команде. ❣️", expires: "2026-07-30" },
    { word: "Лицензия", template: "⚖️ Прямо сейчас можно получить любую лицензию и квалифицированную юридическую помощь в мэрии! ⚖️", expires: "2026-09-30" },
    { word: "лотерея1", template: "☘️ Прямо сейчас у Вас есть возможность купить лотерейный билет в холле Weazel News. ☘️", expires: "9999-12-31" },
    { word: "лотерея2", template: "☘️ Сегодня последний день, когда Вы можете купить билет лотереи. Не упустите свой шанс! ☘️", expires: "9999-12-31" },
    { word: "лотерея2", template: "⭐ Последний день продаж, а ты все ещё не купил лотерейный билет? Ждем тебя в холле Weazel News! ⭐", expires: "9999-12-31" },
    { word: "мото1000", template: "⚡ Приглашаем всех байкеров на общий мотопробег в 17:00 и 22:00. Сбор на деревне байкеров. ☠️", expires: "2026-09-07" },
    { word: "мото2000", template: "☠️ Мы выбрали свободу на крыльях смерти. Сделай свой выбор. Мотоклуб Angels of Death. ⛓️", expires: "2026-09-22" },
    { word: "мото2000", template: "☠️ Смерть — крылья, свобода — цель. Какой путь выберешь ты? Мотоклуб Angels of Death. ⛓️", expires: "2026-09-22" },
    { word: "мото3000", template: "☠️ Angels of Death приглашает всех Байкеров на мотопробег! Стартуем каждый день в 17:05 и 22:05! От деревни байкеров. ☠️", expires: "2026-10-08" },
    { word: "отрицание", template: "Ищешь надежных спутников для своих приключений? Семья Otricanie распахивает свои двери для храбрых героев!", expires: "2026-07-01" },
    { word: "отрицание", template: "Топ-семья Otricanie открывает набор активных бойцов! Ждём именно тебя.", expires: "2026-07-01" },
    { word: "пельмени", template: "♨️ Быстро, вкусно и недорого — заходите в Магазин 24/7 №11 на Чумаше, где товары без наценки! ✌️", expires: "2026-07-15" },
    { word: "пельмени", template: "☕ Заехал в Чумаш? Не забудь посетить магазин 24/7 №11, где наценка навсегда равна нулю! ✨", expires: "2026-07-15" },
    { word: "пиар1212", template: "⭕Weazel News никогда не приглашает вас в офис, если вы не принимали участия в каких-либо событиях!⭕", expires: "9999-12-31" },
    { word: "пиар1212", template: "⭐ 8 символов могут сэкономить тебе состояние. Кодовое слово - твой новый must-have! ⭐", expires: "9999-12-31" },
    { word: "пиар1212", template: "⭐ Умный не тот, кто много пишет, а тот, кто экономит. Кодовое слово спасает бюджет! ⭐", expires: "9999-12-31" },
    { word: "пивопиво", template: "⚜️Ищете возможности для интересных встреч и приключений? Присоединяйтесь к нашей дружной семье! ⚜️", expires: "2026-07-17" },
    { word: "пивопиво", template: "⚔️Семья Мортон — это источник поддержки для каждого! Присоединяйтесь к нам и получите премии за достижения! ⚔️", expires: "2026-07-17" },
    { word: "пивопиво", template: "✨У нас нет обязательств — только уникальные возможности для вашего роста и развития в Семье Мортон! ✨", expires: "2026-07-17" },
    { word: "хертлесс", template: "⛓️ Нужен контент, деньги и узнаваемость? Ждём в H E A R T L E S S - семья, в которой открыты все двери. ⛓️", expires: "2026-07-04" },
    { word: "хулиганы", template: "⭐ С нами — мощь, стиль и верные братья. Семья Хулиганы ждёт тебя! ⭐", expires: "2026-07-30" },
    { word: "этерналс", template: "⚜️E T E R N A L S — вместе развиваемся, достигаем целей и идём только вперёд. site:eternal.famq:⚜️", expires: "2026-07-13" },
    { word: "ARMY1000", template: "⚔️ Один штат - одна армия - одна цель. Будь с нами! ⚔️", expires: "2026-07-01" },
    { word: "bacardi1", template: "⭐ Заглянув в мой профиль 5️⃣vito, ты обязательно найдёшь то, что тебе нужно по низкой цене! ⭐", expires: "2026-08-27" },
    { word: "bane1000", template: "⚜️ Bane: мы не просим, мы берем. Если в жилах амбиция, а не вода — ты достоин стать одним из нас. ⚜️", expires: "2026-07-07" },
    { word: "barzini1", template: "❤️️BlackWork — тёмная эстетика без лишних границ. Тату-Салон №1️⃣ в гетто. Забери свой стиль на лучших условиях! ✒️", expires: "2026-07-15" },
    { word: "conrad62", template: "Магазин 24/7 No 9 ждет своих клиентов, лучший товар и минимальная наценка, приходите ждем всех!", expires: "2026-08-27" },
    { word: "DARKSIDE", template: "⚠️Нужна машина в аренду за честные деньги? Заходи ко мне на сайт site:dark.auto: и на мой 5VITO.↖️", expires: "2026-07-20" },
    { word: "DARKSIDE", template: "⚠️Захотел взять авто в аренду? Заходи ко мне на сайт site:dark.auto: и на мой 5VITO.↖️", expires: "2026-07-20" },
    { word: "Destroyed", template: "✨Ищешь уютный уголок и надежное плечо в игре? Наша семья Destroyed с радостью откроет для тебя двери!✨", expires: "2026-07-26" },
    { word: "Destroyed", template: "⚡Мы строим уютную семью Destroyed и будем рады видеть тебя в нашем теплом кругу!❣️", expires: "2026-07-26" },
    { word: "DEVIS154", template: "Самое качественное топливо в штате на АЗС №5, приезжай не пожалеешь!", expires: "2026-07-16" },
    { word: "extaz777", template: "☝️ Extazzy — это семья, в которой твой потенциал перестаёт быть пределом. ❤️", expires: "2026-07-23" },
    { word: "extaz777", template: "❤️ Твоя сила раскрывается в правильном окружении. Выбирай Extazzy. ⛏️", expires: "2026-07-13" },
    { word: "furryfox", template: "☢️ В агентстве недвижимости есть дома D-класса. ☢️", expires: "2026-07-11" },
    { word: "infesttt", template: "⚡ Мы не спрашиваем, кто ты был. Нам интересно, кем ты станешь рядом с нами. ⚡", expires: "2026-07-14" },
    { word: "kamenev2", template: "✊ Ищешь надёжный и быстрый мотоцикл? Тогда тебе в Мотосалон №2! ⛩️", expires: "2026-07-01" },
    { word: "Lost6666", template: "☠️LOST — это мотоклуб для свободных духом людей. Cвобода и независимость по тебе? Тогда тебе к нам!☠️", expires: "2026-07-07" },
    { word: "lucas100", template: "⭐Одежда, которая притягивает взгляды. Мой 5VITO к твоим услугам.⭐", expires: "2026-07-20" },
    { word: "masterok", template: "⚒️ Прибыльный заработок - это не мечта, а реальность в семье Мастера, набор открыт - присоединяйся! ⚒️", expires: "2026-07-03" },
    { word: "masterok", template: "⭐ В семье Мастера тебя ждёт стабильный заработок и помощь от своих, семья Мастера ждёт тебя! ⭐", expires: "2026-07-03" },
    { word: "masterok", template: "⚡ Устал тянуть всё один, приходи туда, где поддержат — в семью Мастера! ⚡", expires: "2026-07-03" },
    { word: "meowmeow", template: "☘️ Прокачай свой гардероб до максимума. Мой 5️⃣VITO — твой главный апгрейд. ㊙️", expires: "2026-07-24" },
    { word: "nexus111", template: "⭐Ведется активный набор в организацию NEXUS. Ждем именно тебя!⭐", expires: "2026-07-01" },
    { word: "nexus111", template: "⭐ NEXUS ищет новых участников! Присоединяйся, развивайся и меняй мир вместе с нами! ✨", expires: "2026-07-01" },
    { word: "reid1000", template: "❤️ Alfredo дарит кэшбэк за каждую тату в салоне №4️⃣! Лучшие мастера — твоя гарантия стиля! ❤️", expires: "2026-07-02" },
    { word: "reid1000", template: "☠️В тату-салоне №3️⃣ от Alfredo — кэшбэк за каждую тату! Style это все, опасные и стильные это искусство ! ☣️", expires: "2026-07-02" },
    { word: "rols1000", template: "Организация семьи Rols ищет рабочих в свои ряды. Вступай - не пожалеешь!", expires: "2026-07-12" },
    { word: "shmotki4", template: "В магазине спортивной одежды №4 наценка на все 0%. Заходи дорогой!", expires: "2026-07-12" },
    { word: "tess1000", template: "⛩️ Твой идеальный гардероб начинается здесь. Мой 5️⃣VITO к твоим услугам. ⛩️", expires: "2026-08-06" },
    { word: "tess1000", template: "⭐ Одежда, которая говорит за тебя. Мой 5VITO к твоим услугам. ⭐", expires: "2026-08-06" },
    { word: "Tumanov1", template: "⚖️ Хочешь зарабатывать? «Туманов» ищет целеустремленных. Присоединяйся: site:tumanov.com: ⭐", expires: "2026-09-01" },
    { word: "Tumanov1", template: "♨️ Хочешь роскошные машины? Стань частью команды «Туманов»! site:tumanov.com: ✍️", expires: "2026-09-01" },
    { word: "Tumanov1", template: "⛵ Брось скучную жизнь. Мечтаешь о деньгах и стиле? Стань частью «Туманов»! site:tumanov.com: ⏳", expires: "2026-09-01" },
    { word: "weazel26", template: "❣️ Собеседование на работу в Weazel News! Присоединяйся к нашей команде! ❣️", expires: "2999-07-01" },
    { word: "winstons", template: "⚖️Winston — сообщество, где стремление к росту превращается в реальные достижения.⚖️️", expires: "2026-07-11" },
    { word: "winstons", template: "❣️Winston объединяет людей, которые выбирают прогресс, а не застой.✨", expires: "2026-07-11" },
    { word: "армян100", template: "✨ Армянская строительная компания имени ETERNAL ищет разнорабочих.✨", expires: "2026-08-22" }
];

// ============================================================
//  ДАННЫЕ СПРАВОЧНИКА
// ============================================================
var refData = {
    cars: [
        "авто Albany", "авто Albany Emperor", "авто Albany Emperor №2", "авто Albany Brigham",
        "авто Albany Buccaneer", "авто Albany Buccaneer Custom", "авто Albany Cavalcade",
        "авто Albany Cavalcade №2", "авто Albany Cavalcade XL", "авто Albany CS5Y 2022",
        "авто Albany CST Y", "авто Albany ECTO-1 Ghostbusters", "авто Albany Excalibur",
        "авто Albany Excalibur 2025", "авто Albany Franken Stange", "авто Albany Hermes",
        "авто Albany Lurcher", "авто Albany Manana", "авто Albany Manana Custom",
        "авто Albany Primo", "авто Albany Roosvelt", "авто Albany Roosvelt Valor",
        "авто Albany V-STR", "авто Albany Virgo", "авто Albany Virgo Classic",
        "авто Albany Virgo Classic Custom", "авто Albany Washington", "авто AMC Gremlin",
        "авто AMC Hornet", "авто Annis 240x", "авто Annis 300XZ 1994", "авто Annis 350x",
        "авто Annis 400x", "авто Annis Cosmos", "авто Annis Elegy Retro Custom",
        "авто Annis Elegy RH8", "авто Annis GS-R M32", "авто Annis GS-R M33",
        "авто Annis GS-R M34", "авто Annis GS-R M35", "авто Annis GS-R M36",
        "авто Annis GS-R2000", "авто Annis Hellion", "авто Annis LX5 2021",
        "авто Annis Myata 1990", "авто Annis Pulse 1992", "авто Annis PX7",
        "авто Annis PX8 2012", "авто Annis Savestra", "авто Annis Slidefine R31",
        "авто Annis Slivia 1994", "авто Annis Slivia S13", "авто Annis Slivia S15",
        "авто Annis Stage PS 4 V 1997", "авто Annis Jook Nizmo RS 2013",
        "авто Annis 180CX 1996", "авто Banana Buggy", "авто Benefactor 500E M124 1990",
        "авто Benefactor A-series 45 W176", "авто Benefactor ASG GD63 2025",
        "авто Benefactor ASG P-One", "авто Benefactor C-series 32 ASG W203",
        "авто Benefactor C-series 63 W204", "авто Benefactor C-series 63s ASG W205",
        "авто Benefactor C-series 63S ASG W206", "авто Benefactor C-series 63S Coupe C205",
        "авто Benefactor CL280 W113", "авто Benefactor CL300 W198",
        "авто Benefactor CL63 ASG 2024", "авто Benefactor CL65 Black Series R230 2009",
        "авто Benefactor CLC ASG C197", "авто Benefactor CLR Progen C199",
        "авто Benefactor Dubsta", "авто Benefactor Dubsta 6x6", "авто Benefactor Dubsta №2",
        "авто Benefactor E-series 53 M214 2025", "авто Benefactor E-series 55 W210",
        "авто Benefactor E-series 63 M211 ASG 2006", "авто Benefactor E-series 63 W213",
        "авто Benefactor E-series 63S ASG W213", "авто Benefactor E-series 63S W213",
        "авто Benefactor Feltzer", "авто Benefactor G-series 63 ASG 6x6",
        "авто Benefactor G-series 63 W463", "авто Benefactor G-series 65 2015",
        "авто Benefactor GD 63S X290", "авто Benefactor GD-R ASG C190",
        "авто Benefactor Glendale", "авто Benefactor Glendale Custom",
        "авто Benefactor Illusion Avatar", "авто Benefactor IQ G-series",
        "авто Benefactor IQ S-series", "авто Benefactor IQ S-series SUV 2024",
        "авто Benefactor JLE 63 Hayman C292", "авто Benefactor JLS 63 X166",
        "авто Benefactor Krieger", "авто Benefactor M-Bach Illusion 6",
        "авто Benefactor M-Bach S-series 560 W222", "авто Benefactor M124 H Coupe 1988",
        "авто Benefactor MI63 2010", "авто Benefactor Panto",
        "авто Benefactor S-series 600 Pushman X222",
        "авто Benefactor S-series 63 ASG Coupe",
        "авто Benefactor S-series 65 ASG M222 2019", "авто Benefactor S-series W140",
        "авто Benefactor S-series W221", "авто Benefactor S-series W223",
        "авто Benefactor Schafter", "авто Benefactor Schlagen GT",
        "авто Benefactor Schwarzer", "авто Benefactor Serrano", "авто Benefactor SM722",
        "авто Benefactor Stirling GT", "авто Benefactor Surano",
        "авто Benefactor V-series W447", "авто Benefactor X-series M470 2019",
        "авто Benefactor XLS", "авто Benefactor ZLS C218", "авто Benefactor ZLS C219",
        "авто BF Beatles 1965", "авто BF Bifta", "авто BF Bigfoot 2014",
        "авто BF Club", "авто BF Injection", "авто BF Karman",
        "авто BF Olivia A7 2017", "авто BF Olivia A7 RS 2017", "авто BF Twareg",
        "авто BF Weevil", "авто BF Weevil Custom", "авто BF Wolf MK1",
        "авто BF Wolf R 8 2020", "авто BF Wolf R32 2003", "авто BF Wolf R7",
        "авто Bollokan Elancier M-Line 2022", "авто Bollokan IV6 GT 2023",
        "авто Bollokan M Vision 74 2022", "авто Bollokan Prairie", "авто Bollokan Speed",
        "авто Bollokan Sprinter", "авто Bravado Banshee", "авто Bravado Banshee 900R",
        "авто Bravado Bison", "авто Bravado Buffalo", "авто Bravado Buffalo EVX",
        "авто Bravado Buffalo S", "авто Bravado Buffalo STX", "авто Bravado Changer 1968",
        "авто Bravado Changer Daytora SP 2025", "авто Bravado Changer SPT",
        "авто Bravado Contender SPT Demon", "авто Bravado Dorado",
        "авто Bravado Duravo 2018", "авто Bravado Gauntlet",
        "авто Bravado Gauntlet Classic", "авто Bravado Gauntlet Classic Custom",
        "авто Bravado Gauntlet Hellfire", "авто Bravado Greenwood",
        "авто Bravado Gresley", "авто Bravado RUM TPX", "авто Caddy",
        "авто Canis Bodhi", "авто Canis Freecrawler", "авто Canis Glad 2019",
        "авто Canis Gladiator Apocalypse 6x6", "авто Canis Great Cherokee",
        "авто Canis Seminole", "авто Canis Seminole Frontier", "авто Canis Terminus",
        "авто Car meet Cheburek Drift", "авто Car meet Euros Drift",
        "авто Car meet Nebula Drift", "авто Car meet Sentinel Drift",
        "авто Car meet Vorschlaghammer Drift", "авто Car meet Yosemite Drift",
        "авто Car meet ZR350 Drift", "авто Cheval Fugitive", "авто Cheval Picador",
        "авто Cheval Surge", "авто Christ", "авто Coil 001", "авто Coil 009",
        "авто Coil Air 2021", "авто Coil Brawler", "авто Coil CU7 2024",
        "авто Coil CU7 Max 2024", "авто Coil Cyclone", "авто Coil Electruck",
        "авто Coil L9", "авто Coil Line S", "авто Coil Line X", "авто Coil R1T",
        "авто Coil Raiden", "авто Coil Reverand R 2025", "авто Coil Roadster",
        "авто Coil Sapphire 2021", "авто Coil Truck", "авто Coil Voltic",
        "авто Coil Z", "авто Declasse Asea", "авто Declasse Chavelle SS 396 1967",
        "авто Declasse COE Suburban 1950", "авто Declasse Covetto 2009",
        "авто Declasse Covetto Wingray C8 2020", "авто Declasse Drift Tampa",
        "авто Declasse Drift Yosemite", "авто Declasse Gamaro",
        "авто Declasse Impaler", "авто Declasse Impaler LX",
        "авто Declasse Impaler SZ", "авто Declasse Implata 67",
        "авто Declasse Implata SS 1996", "авто Declasse Nightmate Brutus",
        "авто Declasse Premier", "авто Declasse Rancher XL", "авто Declasse Rhapsody",
        "авто Declasse Sabre Turbo", "авто Declasse Sabre Turbo Custom",
        "авто Declasse Stallion", "авто Declasse Takho",
        "авто Declasse Takho Suburban", "авто Declasse Tampa",
        "авто Declasse Tornado Custom", "авто Declasse Tornado №2",
        "авто Declasse Tornado №3", "авто Declasse Tornado №4",
        "авто Declasse Tulip", "авто Declasse Vamos", "авто Declasse Vigero",
        "авто Declasse Vigero ZX", "авто Declasse Vigero ZX Convertible",
        "авто Declasse Voodoo Custom", "авто Declasse Voodoo №2",
        "авто Declasse Walton L35", "авто Declasse Yosemite Rancher",
        "авто Dewbauchee Champion", "авто Dewbauchee D311",
        "авто Dewbauchee D312 Violante 2024", "авто Dewbauchee D3S Superleggera",
        "авто Dewbauchee D3X 2024", "авто Dewbauchee Exemplar",
        "авто Dewbauchee JB 700W", "авто Dewbauchee Massacro №2",
        "авто Dewbauchee Rapid GT", "авто Dewbauchee Rapid GT Classic",
        "авто Dewbauchee Seven-70", "авто Dewbauchee Specter Custom",
        "авто Dewbauchee Tuscan", "авто Dewbauchee Vagner",
        "авто Dewbauchee Vanguard Arachna 2022", "авто Dewbauchee Vico",
        "авто Dewbauchee Voyage", "авто Dewbauchee Vulcore", "авто Dinka Blista",
        "авто Dinka Blista Compact", "авто Dinka Blista Kanjo", "авто Dinka BSX",
        "авто Dinka C2000", "авто Dinka Civil 2019", "авто Dinka Civil Type R 2023",
        "авто Dinka Civil Type-R 1999", "авто Dinka Civil Type-R 2001",
        "авто Dinka Entegra Type R 1998", "авто Dinka Go Go Monkey Blista",
        "авто Dinka Jester", "авто Dinka Jester Classic", "авто Dinka Jester №2",
        "авто Dinka Kanjo SJ", "авто Dinka NSY 1995", "авто Dinka NSY 2018",
        "авто Dinka Postlude", "авто Dinka Sugoi", "авто Dinka Veto Classic",
        "авто Dundreary Kontinental MK3 1968", "авто Dundreary Landstalker",
        "авто Dundreary Landstalker XL", "авто Dundreary Navigation",
        "авто Dundreary Regina", "авто Eli", "авто Emperor CS300 2000",
        "авто Emperor ETR1", "авто Emperor GC", "авто Emperor Habanero",
        "авто Emperor IC-F 2012", "авто Emperor MC500 2018", "авто Emperor MFA",
        "авто Emperor MX570", "авто Emperor PSF", "авто Enus Benteygo",
        "авто Enus Callinon", "авто Enus Coattail", "авто Enus Cognoscenti",
        "авто Enus Cognoscenti Cabrio", "авто Enus Deity", "авто Enus EPX 100",
        "авто Enus Flying Scott 2020", "авто Enus Huntley S", "авто Enus Jubilee",
        "авто Enus Mainland GT", "авто Enus Paragon R", "авто Enus Phantasm 2018",
        "авто Enus Senate 2024", "авто Enus Shade", "авто Enus Sleektail 2024",
        "авто Enus Spectrum", "авто Enus Stafford", "авто Enus Super Diamond",
        "авто Enus Veil", "авто Enus Windsor", "авто Enus Windsor Drop",
        "авто Faction Custom Donk", "авто Fathom FQ2", "авто Fathom FR36",
        "авто Fathom O60 2017", "авто Fathom XF50 S", "авто Gallivanter Baller",
        "авто Gallivanter Baller LE", "авто Gallivanter Baller LE LWB",
        "авто Gallivanter Baller №2", "авто Gallivanter Baller ST-D",
        "авто Gallivanter Range Rider", "авто Gallivanter Range Rider Guard",
        "авто Gallivanter Range Rider Revogue",
        "авто Gallivanter Range Rider Vouge 2023",
        "авто Gallivanter Range Rider Vox", "авто Grotti 12Cil 2025",
        "авто Grotti 166MM 1948", "авто Grotti 250 GTO", "авто Grotti 269 GTB 2022",
        "авто Grotti 695 Bipost 2016", "авто Grotti 821 SP 2017",
        "авто Grotti 854 Italy", "авто Grotti Andreas 2013", "авто Grotti Ascenda",
        "авто Grotti Bestia GTS", "авто Grotti Brioso 300", "авто Grotti Brioso R/A",
        "авто Grotti Carbonizzare", "авто Grotti Cheetah",
        "авто Grotti Cheetah Classic", "авто Grotti Delora", "авто Grotti Furia",
        "авто Grotti GT500", "авто Grotti GTC4 Luxo 2017",
        "авто Grotti Itali GTO", "авто Grotti Itali GTO Stinger TT",
        "авто Grotti Itali RSX", "авто Grotti P12 Verleenetta", "авто Grotti P40",
        "авто Grotti Purorace 2022", "авто Grotti Roman", "авто Grotti SP90 Strata",
        "авто Grotti Stinger", "авто Grotti Stinger GT", "авто Grotti Turismo Classic",
        "авто Grotti Turismo Omaggio", "авто Grotti Turismo R",
        "авто Grotti Visione", "авто Grotti Wonza SP2", "авто Grotti X1/9",
        "авто Highheel", "авто Hijak Khamelion", "авто Imponte Dukes",
        "авто Imponte Firefly", "авто Imponte Firely", "авто Imponte Lorean-12 1983",
        "авто Imponte Nightshade", "авто Imponte Phoenix", "авто Imponte Ruiner",
        "авто Imponte Ruiner ZZ-8", "авто International 9900i",
        "авто International Harvester Loadstar", "авто Invetero Coguette",
        "авто Invetero Coguette Classic", "авто Invetero Coguette D10",
        "авто JoBuilt Hauler", "авто JoBuilt Hauler X", "авто JoBuilt Phantom",
        "авто JoBuilt Phantom X", "авто Karin AE86 Brueno", "авто Karin Alfa",
        "авто Karin Altura 2001", "авто Karin Asterope", "авто Karin Asterope GZ",
        "авто Karin BeeJay XL", "авто Karin Camria V40", "авто Karin Camria V55",
        "авто Karin Camria V70", "авто Karin CR86 2022", "авто Karin Dilettante",
        "авто Karin Futo", "авто Karin GR Superia A90",
        "авто Karin Grand Cruiser 100", "авто Karin Grand Cruiser 200",
        "авто Karin Grand Cruiser 300 2022", "авто Karin Imperia MRX STE 2010",
        "авто Karin Imperia MRX STE 3", "авто Karin Imperia MRX STE 4",
        "авто Karin Imperia MRX STI 1", "авто Karin Imperia MRX Wagon 2001",
        "авто Karin Intruder", "авто Karin Kuruma", "авто Karin Legend RS 1990",
        "авто Karin Marco 2", "авто Karin Marco 2 JZX100 1998",
        "авто Karin Marco 2 JZX90 1995", "авто Karin MR-2 1995",
        "авто Karin MRX 2025", "авто Karin Racer 1994", "авто Karin Racer 81 1991",
        "авто Karin Rebel", "авто Karin Rebel Technical Aqua",
        "авто Karin Silica 2003", "авто Karin Silica GT-Four 1994",
        "авто Karin Sultan", "авто Karin Sultan Classic", "авто Karin Sultan RS",
        "авто Karin Superia A80", "авто Karin Thunder 2021", "авто Karin Vivanite",
        "авто Karin Waris GR 2021", "авто Karin ZBR St 2020",
        "авто Lampadati Cinquemila", "авто Lampadati Corsita", "авто Lampadati Felon",
        "авто Lampadati Felon GT", "авто Lampadati Granturismo",
        "авто Lampadati Julia", "авто Lampadati Julia GTAW 2021",
        "авто Lampadati Komoda", "авто Lampadati MS20 2020", "авто Lampadati Novak",
        "авто Lampadati Stevia Quadri 2018", "авто Lampadati Tropos Rallye",
        "авто Lampadati TZ", "авто Lucis Regalia", "авто Maibatsu Ellipse GSX 1999",
        "авто Maibatsu Garant RV4 1990", "авто Maibatsu Lance Revolution 10",
        "авто Maibatsu Lance Revolution 6", "авто Maibatsu Lance Revolution 9",
        "авто Maibatsu MonstroCiti", "авто Maibatsu Montero Revolution 1997",
        "авто Maibatsu Mule", "авто Maibatsu Penumbra", "авто Maibatsu Penumbra FF",
        "авто Maibatsu Star", "авто Mammoth Hammer EV 2022",
        "авто Mammoth N1 2001", "авто Mammoth N2 Limo", "авто Mammoth Patriot",
        "авто Mammoth Vantura G-1500 1983", "авто Maxwell Asbo", "авто MG MGB",
        "авто Minibug", "авто Minicar", "авто MiniGrotti", "авто MTL Packer",
        "авто MTL Pounder", "авто Nagasaki Wolverine RMAX4",
        "авто Nash Metropolitan", "авто Obey 10F", "авто Obey 80 B4 1996",
        "авто Obey 8F Drafter", "авто Obey 9F", "авто Obey 9F Cabrio",
        "авто Obey 9F Omnis", "авто Obey DD PS 2017", "авто Obey I-Wagen",
        "авто Obey O7 V12 2007", "авто Obey O8 2022", "авто Obey Omnis e-GT",
        "авто Obey P8 2015", "авто Obey P8 2020", "авто Obey PS I-tron GT",
        "авто Obey PS2 B4", "авто Obey PS3 2023", "авто Obey PS4 Awand 2017",
        "авто Obey PS5 2020", "авто Obey PS6 2002", "авто Obey PS6 2020",
        "авто Obey PS6 Awand", "авто Obey PS7", "авто Obey PS7 2020",
        "авто Obey PSO6 I-tron 2025", "авто Obey PSO8 2022",
        "авто Obey Quadro 1991", "авто Obey Rocoto", "авто Obey Tailgater",
        "авто Obey V6 Awand 2026", "авто Ocelot E-Model",
        "авто Ocelot Elvira 2022", "авто Ocelot Evia", "авто Ocelot EX S 2019",
        "авто Ocelot F-Model", "авто Ocelot F620", "авто Ocelot I-Model",
        "авто Ocelot Jackal", "авто Ocelot Jugular", "авто Ocelot Locust",
        "авто Ocelot Lynx", "авто Ocelot Mk II Saloon 1964", "авто Ocelot Pariah",
        "авто Ocelot Penetrator", "авто Ocelot XA-21",
        "авто Oldsmobile Tornado 1966", "авто Overflod Ahera",
        "авто Overflod Entity XF", "авто Overflod Genera", "авто Overflod Gesko",
        "авто Overflod GGX 2006", "авто Overflod Imorgon",
        "авто Overflod Intenza Emotiva", "авто Overflod Rejera",
        "авто Overflod Zeno", "авто Overflod SC850 2022",
        "авто Pegassi Avendore LP700 2011", "авто Pegassi Avendore SJW 2019",
        "авто Pegassi Bellista 2022", "авто Pegassi Centario 2017",
        "авто Pegassi Cian", "авто Pegassi Coutron 1990",
        "авто Pegassi Coutron 2022", "авто Pegassi Devil 2001",
        "авто Pegassi Estro Elemento", "авто Pegassi Evantora 2009",
        "авто Pegassi Ezpado", "авто Pegassi Hayra Roadster",
        "авто Pegassi Hurricane", "авто Pegassi Hurricane Sterra 2023",
        "авто Pegassi Hurricane Technical 2023", "авто Pegassi Ignus",
        "авто Pegassi Infernus", "авто Pegassi Infernus Classic",
        "авто Pegassi Lancelot", "авто Pegassi Leonardo", "авто Pegassi Monroe",
        "авто Pegassi Osiris", "авто Pegassi Purcielago VS 2009",
        "авто Pegassi Reaper", "авто Pegassi Rewuelto", "авто Pegassi SS18",
        "авто Pegassi Temario 2025", "авто Pegassi Tempesta",
        "авто Pegassi Tezeract", "авто Pegassi Torero XO", "авто Pegassi Toros",
        "авто Pegassi Torrero", "авто Pegassi Ursus", "авто Pegassi Ursus 2024",
        "авто Pegassi Ursus 6x6", "авто Pegassi Vacca", "авто Pegassi Verano",
        "авто Pegassi Zentorno", "авто Pegassi Zorrusso",
        "авто Penaud La Coureuse", "авто Penaud TechTruck", "авто Pfister 356",
        "авто Pfister 718 Rayman GT4RS 2022", "авто Pfister 811",
        "авто Pfister 811 Carvera", "авто Pfister 811 Carvera RS 1973",
        "авто Pfister 811 GT3 2021", "авто Pfister 811 GT3RS 2023",
        "авто Pfister 811 Turbo S 2021", "авто Pfister 819 Spyro",
        "авто Pfister Astron", "авто Pfister Carvera GT", "авто Pfister Comet",
        "авто Pfister Comet Retro Custom", "авто Pfister Comet S2 Cabrio",
        "авто Pfister Comet Safari", "авто Pfister Comet SR",
        "авто Pfister Dacar 2023", "авто Pfister Growler", "авто Pfister Mascan 2024",
        "авто Pfister Neon", "авто Pfister Paramena",
        "авто Pfister Paramena Turbo S-E 2025", "авто Pfister Rayenne",
        "авто Pfister Rayenne Coupe Turbo GT 2022", "авто Pfister Teycan",
        "авто Pfister Teycan Cross Turismo 2022", "авто Plymouth Bubbletop 1959",
        "авто Progen 720c", "авто Progen E1 2014", "авто Progen Emerus",
        "авто Progen GP №1", "авто Progen GT 2020", "авто Progen Itali GTB",
        "авто Progen PR4", "авто Progen Serena", "авто Progen SpeedT",
        "авто Progen T20", "авто Penaud Mega RS 2010",
        "авто Quadra Turbo-R V-Tech", "авто RUNE B1 2010", "авто RUNE Cheburek",
        "авто School Bus", "авто Schyster Deviant", "авто Schyster Fusilade",
        "авто Schyster Piranha", "авто Shitzu Carry", "авто Shuttle Bus",
        "авто Studebaker Golden Hawk", "авто Toundra A101 2024", "авто Tractor",
        "авто Truffade Adder", "авто Truffade Aero GT", "авто Truffade Billion 2026",
        "авто Truffade EB110 1992", "авто Truffade Fake Taxi",
        "авто Truffade Formula", "авто Truffade Le Voyage Noire 2021",
        "авто Truffade Nero", "авто Truffade Nero Custom", "авто Truffade Pacific",
        "авто Truffade Shiron", "авто Truffade Thrax", "авто Truffade Vivo 2020",
        "авто Truffade Weyron Witesse", "авто Truffade Wistral 2024",
        "авто Truffade Z-Type", "авто Ubermacht 1W E82", "авто Ubermacht 2002 1973",
        "авто Ubermacht 3-line E36", "авто Ubermacht 3-line E90",
        "авто Ubermacht 323ti Sport 2000", "авто Ubermacht 330I J20 2021",
        "авто Ubermacht 5-line E34", "авто Ubermacht 7-line E38",
        "авто Ubermacht 760I J70 2022", "авто Ubermacht I4 N50 4D 2021",
        "авто Ubermacht I8", "авто Ubermacht IY 2022", "авто Ubermacht Oracle",
        "авто Ubermacht Oracle XS", "авто Ubermacht Rebla GTS",
        "авто Ubermacht Revolter", "авто Ubermacht Rhinehart",
        "авто Ubermacht S4 E86", "авто Ubermacht S40 N40I J29 2019",
        "авто Ubermacht SC1", "авто Ubermacht Sentinel №2",
        "авто Ubermacht Sentinel №3", "авто Ubermacht Sentinel XS",
        "авто Ubermacht W2 F82", "авто Ubermacht W2 G87",
        "авто Ubermacht W3 A92 2013", "авто Ubermacht W3 E30 1990",
        "авто Ubermacht W3 E36 Coupe 1992", "авто Ubermacht W3 E46",
        "авто Ubermacht W3 G81 Touring", "авто Ubermacht W3 J80 2024",
        "авто Ubermacht W4 CSL J82 2023", "авто Ubermacht W4 F82",
        "авто Ubermacht W4 G82", "авто Ubermacht W5 E28",
        "авто Ubermacht W5 E39", "авто Ubermacht W5 E60",
        "авто Ubermacht W5 F90", "авто Ubermacht W5 F90 CS 2020",
        "авто Ubermacht W5 H10 2016", "авто Ubermacht W5 H90 LCI 2021",
        "авто Ubermacht W5 J90 2025", "авто Ubermacht W5 J99 Touring 2025",
        "авто Ubermacht W6 F13", "авто Ubermacht W70 J70 2022",
        "авто Ubermacht W760LE G11", "авто Ubermacht W8",
        "авто Ubermacht Y5 E53", "авто Ubermacht Y5 E70",
        "авто Ubermacht Y5 G05", "авто Ubermacht Y6W F86",
        "авто Ubermacht Y6W F96", "авто Ubermacht Y7W G07",
        "авто Ubermacht YW J09 2023", "авто Ubermacht Zion",
        "авто Ubermacht Zion Cabrio", "авто Ubermacht Zion Classic",
        "авто Vapid Aleutian", "авто Vapid Benson", "авто Vapid Blade",
        "авто Vapid Bobcat XL", "авто Vapid Bronzo Predator 2022",
        "авто Vapid Bull", "авто Vapid Bullet", "авто Vapid Capricorn II 1974",
        "авто Vapid Caracara 4x4", "авто Vapid Cargo 2011", "авто Vapid Chino",
        "авто Vapid Chino Custom", "авто Vapid Cligue", "авто Vapid Clique Wagon",
        "авто Vapid Clown Van", "авто Vapid Cobra", "авто Vapid Contender",
        "авто Vapid Dominator", "авто Vapid Dominator GT",
        "авто Vapid Dominator GTX", "авто Vapid Ellie", "авто Vapid Endurance",
        "авто Vapid Export 1992", "авто Vapid Expromt RS1986 x2",
        "авто Vapid FMJ", "авто Vapid GS 1969", "авто Vapid GT",
        "авто Vapid Hot Wheels 1949", "авто Vapid Minivan",
        "авто Vapid Minivan Custom", "авто Vapid P-150 Lightning 2022",
        "авто Vapid Peyote", "авто Vapid Peyote Custom", "авто Vapid Pocus Rs 2003",
        "авто Vapid Predator", "авто Vapid Radius", "авто Vapid Retinue",
        "авто Vapid Riata", "авто Vapid Sadler", "авто Vapid Sandking XL",
        "авто Vapid Siesta 2020", "авто Vapid Slamvan", "авто Vapid Speedo Custom",
        "авто Vapid Stanier", "авто Vapid Steel Cougar Extinguisher",
        "авто Vapid Stud 1965", "авто Vapid Stud 2019", "авто Vapid Stud 2024",
        "авто Vapid Stud Boss 1970", "авто Vapid Stud SVT Cobra 1993",
        "авто Vapid Stud Zelby GS500 2012", "авто Vapid The Liberator",
        "авто Vapid Veloci 6x6 2018", "авто Veto", "авто Vulcar 850R 1997",
        "авто Vulcar CX90 2018", "авто Vulcar Ingot", "авто Vulcar Nebula Turbo",
        "авто Vulcar Warrener", "авто Vysser Neo", "авто Weeny Copper S",
        "авто Weeny Dynasty", "авто Weeny Issi", "авто Weeny Maxiz 2005",
        "авто Willard Regal GNX", "авто Y Motors Lycan HS",
        "авто Zyrconium Stratum", "авто Школьный автобус", "авто Brute Camper",
        "авто Benefactor Arctos", "авто BF Scany S", "авто BF Multi T6.1 2020"
    ],
    bikes: [
        "мото Cruiser", "мото Dinka Akuma", "мото Dinka Bro 2009",
        "мото Dinka Double-T", "мото Dinka Enduro", "мото Dinka PS213V-S",
        "мото Dinka SBP 1000RR Flameblade 2017", "мото Dinka SBP 1000RR Flameblade 2020",
        "мото Dinka Thrust", "мото Dinka Verus", "мото Dinka Vindicator",
        "мото Endurex Race Bike", "мото Fixter", "мото LCC Avarus",
        "мото LCC Hexer", "мото Maibatsu Manchez", "мото Maibatsu Manchez Scout",
        "мото Maibatsu Sanchez", "мото Nagasaki BF400", "мото Nagasaki Blazer",
        "мото Nagasaki Carbon RS", "мото Nagasaki Hot Rod Blazer",
        "мото Nagasaki P1", "мото Nagasaki P6 2008", "мото Nagasaki P6 2010",
        "мото Nagasaki Shinobi", "мото Nagasaki Shinobi H2R",
        "мото Nagasaki Shinobi ZX-10RR", "мото Nagasaki Shotaro",
        "мото Nagasaki Street Blaze", "мото Nagasaki ZYF-R1M",
        "мото Pegassi Bati 801", "мото Pegassi Bati 801RR", "мото Pegassi Esskey",
        "мото Pegassi Ruffian", "мото Principe 900SS", "мото Principe Diabolus",
        "мото Principe Diabolus Custom", "мото Principe Lectro",
        "мото Principe Nemesis", "мото Principe RC 390",
        "мото Principe Ranigale V4 R", "мото Principe W4S 2021",
        "мото Principe 125 2006", "мото Principe 450 2020",
        "мото Principe 690 2017", "мото Rampant Rocket", "мото Ratbike",
        "мото Sanctus", "мото Shitzu CSX-R1000",
        "мото Shitzu CSX1300R Haribusa", "мото Shitzu Defiler",
        "мото Shitzu Hakuchou", "мото Shitzu PCJ 600", "мото Shitzu Vader",
        "мото Tri-Cycles Race Bike", "мото Ubermacht R75",
        "мото Ubermacht S1000GG", "мото Western Apocalypse Deathbike",
        "мото Western Bagger", "мото Western Cargoyle", "мото Western Cliffhanger",
        "мото Western Deamon", "мото Western Deamon №2", "мото Western Nightblade",
        "мото Western Powersurge", "мото Western Rat Bike", "мото Western Reever",
        "мото Western Sovereign", "мото Western Wolfsbane",
        "мото Western Zombie Bobber", "мото Western Zombie Chopper",
        "мото Whippet Race Bike", "мото WMC Chief Dark Steed",
        "мото WMC Copper 883", "мото WMC Country Glide", "мото WMC F Boy",
        "мото WMC Caferacer Sidecar", "мото WMC Chief 2",
        "мото WMC Spring Softtail"
    ],
    boats: [
        "лодку Dinka Marquis", "лодку Lampadati Toro", "лодку Lampadati Toro №2",
        "лодку Nagasaki Dinghy", "лодку Nagasaki Dinghy №2",
        "лодку Nagasaki Dinghy №3", "лодку Nagasaki Dinghy №4",
        "лодку Pegassi Speeder", "лодку Pegassi Speeder №2",
        "лодку Pegassi Tentacle 63", "лодку Seashark", "лодку Seashark №3",
        "лодку Shitzu Jetmax", "лодку Shitzu Longfin", "лодку Shitzu Squalo",
        "лодку Shitzu Suntrap", "лодку Shitzu Tropic", "лодку Shitzu Tropic №2",
        "лодку Truffade Teniette 66", "яхту Yacht", "яхту Dinka Marquis 660 Sport"
    ],
    shop: [
        "Аптечку первой помощи", "Бургер", "Баллончик", "Бинты",
        "Боди-камеру", "Гаечный ключ", "Записку", "Зонтик",
        "Канистру с бензином", "Колу", "Ключницу", "Лед", "Лом",
        "Молоток", "Молоко", "Муку", "Овощи", "Пиццу",
        "Полуфабрикат", "Ремонтный набор", "Рисовую крупу", "Сахар",
        "Сигареты", "Сим-карту", "Фонарик", "Фрукты", "Чипсы",
        "Шоколадку", "Яйца"
    ],
    food: [
        "борщ", "бульон", "бургер", "буррито", "вареный рис",
        "жареное мясо на масле с овощами", "жареную рыбу на масле с овощами",
        "Карамель", "карамельное мороженое", "карамельный молочный коктейль",
        "карамельный чизкейк", "картофельное пюре", "компот",
        "котлету с рисом", "Крем-брюле", "лазанью", "макароны",
        "макароны с мясной котлетой", "макароны с рыбной котлетой",
        "макароны с сыром", "мальму в сливочном соусе", "масло",
        "молочный коктейль", "мороженое", "мясной фарш", "мясную котлету",
        "мясную котлету с пюре", "мясо по-французски", "мясо с овощами",
        "овощной омлет", "овощной ролл", "овощной салат", "овощной смузи",
        "овощной суп", "оладьи", "омлет", "пасту болоньезе",
        "пасту карбонара", "пельмени", "пиццу", "поке", "рагу",
        "рамен", "ризотто", "ролл с лососем", "ролл с тунцом",
        "Рыбу с овощами", "Рыбу с рисом", "Рыбу с фруктовым соусом",
        "Рыбу с фруктовым соусом и пюре", "Рыбу с фруктовым соусом и рисом",
        "Рыбную котлету", "Рыбную котлету с пюре", "Рыбную котлету с рисом",
        "Рыбный фарш", "Салат Капрезе", "Сашими из фугу", "Стейк",
        "Стейк с макаронами", "Стейк с рисом", "Стейк с салатом",
        "Стейк с фруктовым соусом", "Стейк с фруктовым соусом и пюре",
        "Стейк с фруктовым соусом и рисом", "Суфле", "Сухую мясную котлету",
        "Сухую рыбную котлету", "Сыр", "Сэндвич с сыром", "тако с мясом",
        "тако с рыбой", "тесто", "фруктовый лёд", "фруктовый салат",
        "фруктовый салат с карамелью", "фруктовый смузи", "фруктовый чизкейк",
        "хлеб", "чизкейк", "яблоко в карамели", "яичницу",
        "яичницу с беконом"
    ],
    fish: [
        "рыбу Радужная форель", "рыбу Бурая форель", "рыбу Калифорнийская золотая форель",
        "рыбу Красногорлая форель", "рыбу Краснополосая форель",
        "рыбу Озёрная форель", "рыбу Ручьевая форель", "рыбу Форель бычья",
        "рыбу Форель Каттрот Лахонтанская", "рыбу Леопардовая акула",
        "рыбу Акула суповая", "рыбу Акула рогатая", "рыбу Акула вздутая",
        "рыбу Акула ангельская тихоокеанская", "рыбу Чернопёрая рифовая акула",
        "рыбу Рыба-ангел королевская", "рыбу Рыба-ангел французская",
        "рыбу Канальный сом", "рыбу Вайткэтфиш (белый сом)",
        "рыбу Жёлтый сомик", "рыбу Плоскоголовый сом", "рыбу Дамсел синяя",
        "рыбу Дамсел трёхполосая", "рыбу Жёлтый хирург", "рыбу Хирург голубой",
        "рыбу Хирург полосатый", "рыбу Хирург-ахиллес", "рыбу Крокер жёлтопёрый",
        "рыбу Крокер пятнистопёрый", "рыбу Полосатый тунец",
        "рыбу Тунец длиннопёрый", "рыбу Рыба-бабочка длиннокрылая",
        "рыбу Рыба-бабочка енотовая", "рыбу Рыба-бабочка полосатая",
        "рыбу Рыба-бабочка четырёхполосая", "рыбу Сакраменто пайкминноу",
        "рыбу Северный пайкминноу", "рыбу Снэппер красный",
        "рыбу Снэппер серый", "рыбу Аляскинский минтай",
        "рыбу Американская палия", "рыбу Американский терпуг",
        "рыбу Американский шэд", "рыбу Ангел императорский",
        "рыбу Анфия лировидная", "рыбу Арктический хариус",
        "рыбу Белый каппи", "рыбу Белый сибас", "рыбу Бонито тихоокеанский",
        "рыбу Ваху", "рыбу Гамбузия обыкновенная", "рыбу Голубой чаб",
        "рыбу Гольян обыкновенный западный", "рыбу Горбуша",
        "рыбу Дорадо (махимахи)", "рыбу Иглобрюх пятнистый",
        "рыбу Идол-мавр", "рыбу Кабесон", "рыбу Калифорнийская корбина",
        "рыбу Калифорнийский палтус", "рыбу Каранкс гигантский",
        "рыбу Кета", "рыбу Кефаль полосатая", "рыбу Кижуч",
        "рыбу Клылатка-зебра", "рыбу Кокани", "рыбу Колюшка трёхиглая",
        "рыбу Корюшка прибрежная", "рыбу Краснобокий елец",
        "рыбу Кузовок жёлтый", "рыбу Сакраменто окунь",
        "рыбу Большеротый окунь", "рыбу Малоротый окунь",
        "рыбу Пятнистый окунь", "рыбу Канарееный морской окунь",
        "рыбу Вермилионовый морской окунь", "рыбу Желтоглазый сорской окунь",
        "рыбу Белый окунь", "рыбу Полосатый окунь", "рыбу Окунь жёлтый",
        "рыбу Морской окунь бокаччо", "рыбу Морской окунь вдовий",
        "рыбу Морской окунь желтохвостый", "рыбу Морской окунь чилипер",
        "рыбу Морской окунь медный", "рыбу Морской окунь чёрный",
        "рыбу Морской окунь келповый", "рыбу Морской окунь оливковый",
        "рыбу Морской окунь гофер", "рыбу Морской окунь травяной",
        "рыбу Морской окунь китайский", "рыбу Морской окунь бурый",
        "рыбу Тихоокеанский морской окунь", "рыбу Каменный окунь",
        "рыбу Окунь-кельп", "рыбу Песчаный окунь полосатый",
        "рыбу Песчаный окунь пятнистый", "рыбу Окунь-овечка калифорнийский",
        "рыбу Морской окунь смарида", "рыбу Губан радужный",
        "рыбу Губан-уборщик обыкновенный", "рыбу Западная ручьевая минога",
        "рыбу Речная минога", "рыбу Тихоокеанская минога",
        "рыбу Круглохвостый скат-хвостокол", "рыбу Скат большой",
        "рыбу Скат длинноносый", "рыбу Скат-нетопырь",
        "рыбу Скат-хвостокол голубопятнистый", "рыбу Рыба-камень бородавчатая",
        "рыбу Рыба-клоун оцеллярис", "рыбу Рыба-клоун перкула",
        "рыбу Рыба-попугай горбатолобая", "рыбу Рыба-попугай зелёная",
        "рыбу Рыба-попугай синеголовая", "рыбу Тернистоголов длинношипый",
        "рыбу Тернистоголов короткошипый", "рыбу Лингкод",
        "рыбу Масляная рыба тихоокеанская", "рыбу Молочная рыба",
        "рыбу Морской конёк жёлтый", "рыбу Нерка", "рыбу Обыкновенный карп",
        "рыбу Океаническая сайда (океанический уайтфиш)", "рыбу Опалай",
        "рыбу Парусник", "рыбу Песчанка тихоокеанская",
        "рыбу Радужный бегун", "рыбу Рекс-соль", "рыбу Рыба-единорог обыкновенная",
        "рыбу Рыба-ёж длинноиглая", "рыбу Рыба-игла рифовая",
        "рыбу Рыба-летучая обыкновенная", "рыбу Рыба-прилипала",
        "рыбу Сакраменто сукер", "рыбу Бриджлип-сукер", "рыбу Тахо-сукер",
        "рыбу Кламатский сукер крупночешуйный", "рыбу Барракуда большая",
        "рыбу Барракуда чёрнополосая", "рыбу Стрелозубая камбала",
        "рыбу Английская камбала", "рыбу Дувровая камбала",
        "рыбу Звездчатая камбала", "рыбу Камбала каменная",
        "рыбу Камбала песчаная тихоокеанская", "рыбу Петралевая камбала",
        "рыбу Арктический голец", "рыбу Голец Долли Варден",
        "рыбу Орегонский голец", "рыбу Умпква-голец",
        "рыбу Белопятнистый групер", "рыбу Групер краснопятнистый",
        "рыбу Павлиний групер", "рыбу Горный сиг", "рыбу Карликовый сиг",
        "рыбу Зелёный солнечник", "рыбу Красноухий солнечник",
        "рыбу Синежаберный солнечник", "рыбу Луциан красногубый",
        "рыбу Луциан синий (блюлайн-снэппер)", "рыбу Мурена гигантская",
        "рыбу Мурена снежинка", "рыбу Пёрч бархатистый (барред сёрфпёрч)",
        "рыбу Пёрч уоллай (уоллай-сёрфпёрч)", "рыбу Шайнер-пёрч",
        "рыбу Рыба-коза жёлтая", "рыбу Рыба-коза красная",
        "рыбу Спинорог клоуновый", "рыбу Спинорог рифовый",
        "рыбу Спинорог-пикассо", "рыбу Тихоокеанская треска",
        "рыбу Угольная треска", "рыбу Рыба-сержант-майор",
        "рыбу Рыба-тромпетта", "рыбу Северная плотва",
        "рыбу Северный анчоус", "рыбу Скульпин прибрежный пресноводный",
        "рыбу Солдатская рыба красная", "рыбу Ставрида тихоокеанская",
        "рыбу Судак канадский", "рыбу Такифугу", "рыбу Тилапия мозамбикская",
        "рыбу Тихоокеанская сайра", "рыбу Тихоокеанская сардина",
        "рыбу Тихоокеанская сельдь", "рыбу Тихоокеанская скумбрия",
        "рыбу Тихоокеанский сэнддаб", "рыбу Тихоокеанский талеихт",
        "рыбу Тихоокеанский хек", "рыбу Хромис голубой", "рыбу Чавыча",
        "рыбу Чёрный краппи", "рыбу Чизелмаут"
    ],
    clothes: [
        "анорак Adibas", "анорак Nice", "анорак Sup/The South Face",
        "анорак Каллиграфия", "балахон привидения", "безрукавку пляжную",
        "безрукавку с капюшоном Huracan", "бейсбольную футболку Amori Player",
        "бейсбольную футболку C&D", "бейсбольную футболку Dodgers",
        "бомбер All-White", "бомбер All-White с принтами", "бомбер Cayo Perico",
        "бомбер Chameleon", "бомбер Fape", "бомбер Guggi",
        "бомбер Guggi с рефлектором", "бомбер Huw", "бомбер Jfp",
        "бомбер Joy", "бомбер Kifflom", "бомбер Moo Moo", "бомбер Nice",
        "бомбер Nice Jordanie", "бомбер Place", "бомбер Rose",
        "бомбер TOKYO", "бомбер ULSA", "бомбер Veezy 77", "бомбер Vursati",
        "бомбер Wings", "бомбер Wonderland", "бомбер модника",
        "бомбер с тигром", "бомбер с футболкой BN",
        "бомбер с футболкой Guggi/Chanette", "бомбер с футболкой LW",
        "бомбер с футболкой Nice", "бомбер с футболкой Sup",
        "бомбер с футболкой гонщика Benefactor", "бомбер с футболкой гонщика Bravado",
        "бомбер с футболкой гонщика Grotti", "бомбер со звездой",
        "вельветовую рубашку Purberry", "верх кимоно Vursati",
        "верх кимоно Кегава", "верх пижамы Eepy", "верх пижамы-комбинезона",
        "ветровку Adibas", "ветровку Nice с капюшоном", "ветровку Stone Islet",
        "ветровку автолюбителя", "ветровку гонщика Ocelot",
        "водолазку копателя", "готический джемпер с воротником",
        "деловое пальто с верхом костюма", "джемпер All-White",
        "джемпер C&D", "джемпер Guggi", "джемпер Jacoste",
        "джемпер Nice Pro", "джемпер Pendi", "джемпер Spooky Xmas",
        "джемпер Stone Islet Dark Project", "джемпер Stone Islet Thermo Sensitive",
        "джемпер Vitimints Sparkle", "джемпер Vursati Tie-Dye",
        "джемпер брендировыный", "джемпер в полосочку", "джемпер в рубчик",
        "джемпер гонщика Truffade", "джемпер гонщика Ubermacht",
        "джемпер жилетка с рубашкой Lucky", "джемпер на молнии Stone Islet",
        "джемпер на молнии со скелетом", "джемпер на молнии текстурный",
        "джемпер на молнии шерстяной", "джемпер с вырезом F Off Skelet",
        "джемпер с галстуком и рубашкой", "джемпер с ромашкой",
        "джемпер с рубашкой Epsilon", "джемпер с рубашкой Stone Islet",
        "джемпер с рубашкой The South Face", "джемпер с руками скелета",
        "Джемпер со смешными принтами", "джемпер Трио",
        "джинсовую куртку All-White", "джинсовую куртку Guggi",
        "джинсовую куртку Lewis", "джинсовую куртку Plum Angels",
        "джинсовую куртку Sup", "джинсовую куртку Sup/LW",
        "джинсову куртку из лоскутов", "джинсову куртку с мехом",
        "джинсовку брендовую", "джинсовку камо", "меховую дубленку",
        "дубленку Frost Couture", "дубленку кожаную с мехом Frosty Date",
        "дубленку с мехом", "жакет Boutique Mosqino", "купальник Борат",
        "жилет USA", "жилет Wild West", "жилет на молнии брендированный",
        "жилет обычный", "жилет с принтами", "жилет с цепочкой",
        "жилетку Epsilon", "жилетку Hell Fire", "жилетку Ken",
        "жилетку LW", "жилетку дутую перламутровую", "жилетку пуховую",
        "жилетку с ромбами и рубашкой", "жилетку с рубашкой Guggi",
        "жилетку с рубашкой ISL", "жилетку с рубашкой Кашемир",
        "жилетку-пуховик Dion", "защитный комплект Ken",
        "зип-худи Alien", "зип-худи AVVC", "зип-худи Dark Mood",
        "зип-худи Pixel Skeleton", "зип-худи Soft Heart",
        "зип-худи в рубчик", "кардиган брендовый",
        "кардиган вязаный с водолазкой", "кардиган камо",
        "кардиган с майкой", "кардиган с майкой с принтом",
        "кардиган с сердечками", "кигуруми Дракоша", "кимоно с принтами",
        "кожаную жилетку LW", "кожаную куртку C&D Hearts",
        "кожаную куртку Crossed", "кожаную куртку гонщика Fathom",
        "кожаную куртку гонщика Pfister", "кожаную куртку гонщика Progen",
        "кожаную куртку гонщика Ubermacht", "кожаную куртку приталенную",
        "кожаную куртку с рубашкой и майкой", "кожаную куртку с футболкой",
        "кожаную разноцветную куртку", "кожанку блестящую",
        "кожанку глянцевую", "кожанку на молнии",
        "кожанку с длинным рукавом блестящую", "кожаный пиджак",
        "пиджак After Hours", "комбинезон AU", "комплект Моряка",
        "комплект Пирата", "костюм Санта-Клауса", "кофту Flash",
        "кофту Pretty Skeleton", "кофту Speedster", "кофту Techfusion",
        "кофту Модника", "кофту на молнии Adibas", "кофту с ремнями",
        "кофту с футболкой Nice", "кроп-свитшот Valentine",
        "куртку Broker", "куртку Raiders NFL", "куртку Adibas Valentines Day",
        "куртку Satoru Gojo", "куртку Social Distance Expert",
        "куртку Sweatbox", "куртку автолюбителя", "куртку гонщика Ubermacht",
        "куртку гонщика Vapid", "куртку дутую брендированную",
        "куртку Модника открытую", "куртку на меху", "куртку с застежками",
        "курткуус мехом", "куртку с мехом MonclAiry", "куртку с рубашкой Epsilon",
        "куртку с толстовкой Guggi", "куртку с футболкой LO-VE",
        "куртку с футболкой Pendi", "куртку спортивную с принтами",
        "куртку текстурную Balenciara Textured", "Лонгслив Adibas Summer",
        "лонгслив BearAngels", "лонгслив C&D", "лонгслив Maximus",
        "лонгслив Pendi", "лонгслив VrTetryx", "лонгслив ZenTech",
        "лонгслив Авангард", "лонгслив с карманами на ремешках",
        "лонгслив с рубашкой жираф", "лонгслив с удлиненными рукавами Adibas",
        "майку Walk", "майку баскетбольного фаната",
        "майку с толстовкой басткетбольного фаната", "мантию Guggi",
        "мантию LW", "мантию MGM", "мантию Sup/LW",
        "мантию волшебника", "меховую куртку Stone Islet",
        "меховую шубу со свитером", "новогодний cвитер с оленями",
        "олимпийку Gang дуохром", "охотничью рубашку",
        "пальто Guggi с водолазкой", "пальто Strike", "пальто WOS",
        "пальто Бушлат", "пальто закрытое", "пальто Кромби удлинненное",
        "пальто Редингот", "пальто строгое", "пальто строгое разноцветное",
        "парку Arctic Seal", "парку модника", "парку модника с капюшоном",
        "пиджак хозяина", "пиджак Chanette", "пиджак Epsilon",
        "пиджак Guggi", "пиджак Guggi Floral", "пиджак Hearts",
        "пиджак Блейзер открытый", "пиджак Блейзер с принтами",
        "пиджак готический", "пиджак двубортный",
        "пиджак двубортный праздничный", "пиджак для встреч открытый",
        "пиджак жениха", "пиджак Металлик", "пиджак Модника",
        "пиджак однобортный", "пиджак праздничный",
        "пиджак с джемпером Nameless", "пиджак с короткими рукавами",
        "пиджак с открытой грудью экстравагантный", "пиджак с рубашкой Модерн",
        "пиджак с узорами", "пиджак строгий", "пиджак с рубашкой элегантные",
        "пижамную зимнюю рубашку", "пижамный свитер с сердечками",
        "плащ XMas", "плащ графа", "поло Archive", "поло Dion",
        "поло Epsilon", "поло Jacoste", "поло Wings", "пуховик Dion",
        "пуховик Extra Comfy", "пуховик Graffiti",
        "пуховик Sup The South Face Statue of Liberty",
        "пуховик The South Face", "пуховик The South Face классический",
        "пуховик The South Face с водолазкой на молнии", "пуховик жемчужный",
        "пуховик лакированный", "пуховик модника", "регби брендированную",
        "резанный топ Skeleton Jeans", "рождественскую футболку",
        "рождественский бомбер", "рождественский бомбер с рефлектором",
        "рождественский мерч-свитер", "рождественский свитер",
        "рождественский свитер модника", "рождественский свитер с принтами",
        "рубашку Wave Summer", "рубашку Amori Player", "рубашку BERLUCCI",
        "рубашку Brada", "рубашку Brada o/s", "рубашку C&D",
        "рубашку C&D L", "рубашку Geo", "рубашку Jeansum",
        "рубашку LW Valentines Day матовую", "рубашку LW Valentines Day глянец",
        "рубашку Paul Pharell", "рубашку Pins", "рубашку Purberry",
        "рубашку Purberry o/s", "рубашку Sup/Chameleon", "рубашку ULSA",
        "рубашку Vice", "рубашку Vursati", "рубашку Арт-Губка",
        "рубашку Бриз", "рубашку в полоску с жилетом LW",
        "рубашку гавайскую", "рубашку Гранж", "рубашку клетчатую",
        "рубашку ММ Kisses", "рубашку на выпуск с принтами",
        "рубашку недозаправленную", "рубашку оверсайз брендовую",
        "рубашку оверсайз камо", "рубашку пейсли",
        "рубашку под жилетку", "рубашку приталенную",
        "рубашку расстегнутую в жилете", "рубашку с водолазкой",
        "рубашку с галстуком и пиджаком неряшливую",
        "рубашку с жилеткой Викторианскую", "рубашку с кожаной накидкой Brada",
        "рубашку с майкой в сетку Hot", "рубашку с ремешком",
        "рубашку с рукавами", "рубашку с футболкой Couture",
        "рубашку с футболкой Epsilon", "рубашку с футболкой Purberry Casual",
        "рубашку с футболкой Vacation", "рубашку священника",
        "рубашку солидную с принтами", "рубашку укороченную",
        "свадебный пиджак", "cвадебный пиджак Дон Жуан",
        "свадебный пиджак из рогожки", "свадебный смокинг",
        "свадебный смокинг с цветком"
    ],
    bags: [
    "портфель кожаный",
    "портфель Cinnamoroll",
    "портфель Kuromi",
    "рюкзак Нокиа",
    "рюкзак CashCarry",
    "рюкзак со стрелой меховой",
    "рюкзак сердце на цепи",
    "рюкзак Lovemeter",
    "рюкзак Grunge Valentine",
    "рюкзак сердце со стрелой",
    "рюкзак Авангард",
    "рюкзак Гроб",
    "рюкзак Гроб с крылышками",
    "рюкзак Жираф",
    "рюкзак Зайка",
    "рюкзак Зайка-гранж",
    "рюкзак Кит",
    "рюкзак кожаный",
    "рюкзак Кот-банан",
    "рюкзак Котик",
    "рюкзак Котик-скелет",
    "рюкзак Кролик в рубчик",
    "рюкзак Летучая мышь",
    "рюкзак Летучий котик",
    "рюкзак Лоскутный Зайка",
    "рюкзак Лягушка",
    "рюкзак Новогоднее печенье",
    "рюкзак Новогодний Беззубик",
    "рюкзак Новогодний олень",
    "рюкзак Новогодний пингвин",
    "рюкзак Новогодний Шиба",
    "рюкзак Пёсик-очкарик",
    "рюкзак Подарок",
    "рюкзак Почита",
    "рюкзак Пушистый песик",
    "рюкзак Ракета",
    "рюкзак рождественский",
    "рюкзак с карманами",
    "рюкзак с крыльями",
    "рюкзак с шипами",
    "рюкзак Скуби Ду",
    "рюкзак такт. с нашивками",
    "рюкзак тактический",
    "рюкзак Тачки",
    "рюкзак Трицератопс",
    "рюкзак Тыква",
    "рюкзак Утка",
    "рюкзак Хагги Вагги",
    "рюкзак Хомяк",
    "рюкзак Хомяк-бургер",
    "рюкзак Чертик с крыльями",
    "рюкзак Adibas",
    "рюкзак All-White",
    "рюкзак All-White Urban",
    "рюкзак Alohamora",
    "рюкзак Baby Dragon",
    "рюкзак Balenciara",
    "рюкзак Brada",
    "рюкзак Brada Camo",
    "рюкзак Crevis",
    "рюкзак Daddy",
    "рюкзак Danger",
    "рюкзак Dino",
    "рюкзак Dion",
    "рюкзак Dion Casual",
    "рюкзак Dion Forrest",
    "рюкзак FF Going",
    "рюкзак FF One Magic",
    "рюкзак Fire",
    "рюкзак Fluffy Bat",
    "рюкзак Fluffy Heart",
    "рюкзак Frost Couture",
    "рюкзак Geo",
    "рюкзак Ghost Face",
    "рюкзак Guggi",
    "рюкзак Guggi Cartoon",
    "рюкзак Guggi NY",
    "рюкзак Guggi Snake Tech",
    "рюкзак Guggi Sport",
    "рюкзак Guggi Tech",
    "рюкзак Guggi Urban",
    "рюкзак Halloween",
    "рюкзак Hearts",
    "рюкзак Jivenchy",
    "рюкзак Jivenchy Paris",
    "рюкзак Jivenchy Star",
    "рюкзак LW",
    "рюкзак LW Damier Tech",
    "рюкзак LW Monogram Tech",
    "рюкзак LW Monogram Urban",
    "рюкзак LW Rubens",
    "рюкзак LW Upside Down",
    "рюкзак LW Valentines Day",
    "рюкзак LW Van Gogh",
    "рюкзак Nameless",
    "рюкзак Nice",
    "рюкзак Purberry",
    "рюкзак Purberry Casual",
    "рюкзак Sharp Teddy",
    "рюкзак Skeleton Bat",
    "рюкзак Skeleton Jeans",
    "рюкзак Spider Man",
    "рюкзак Sprayland",
    "рюкзак Sup Urban",
    "рюкзак Tачки",
    "рюкзак Totally Spies",
    "рюкзак Warcore Tech",
    "рюкзак X3 DESIGN",
    "рюкзак Xmas BY",
    "рюкзак Y-8",
    "рюкзак Ladudu",
    "рюкзак Balenciara Be kind",
    "рюкзак The South Face",
    "винтажный рюкзак Guggi",
    "рюкзак LW Plum Strings",
    "рюкзак Китти Чаки",
    "рюкзак Pika Skeleton",
    "рюкзак Sup Полотенчик",
    "рюкзак Dion Forrest",
    "рюкзак TSF",
    "рюкзак Stone Islet Nylon",
    "рюкзак Karol Kristian Pael",
    "рюкзак Gojard",
    "Рюкзак Paul Pharell Summer",
    "сумка Пузо",
    "сумку Mosqino TP",
    "сумку радиатор",
    "сумку Eva Eastwool Heart",
    "сумку Balenciara Chips",
    "сумку Bear Hugs",
    "сумку Mosqino Heart",
    "сумку Mosqino GlossHeart",
    "большую сумку LW",
    "большую сумку",
    "малую сумку",
    "мини-сумку на ногу",
    "сумку для рыбы",
    "среднюю сумку",
    "сумку слинг",
    "сумку Звезда",
    "сумку Archive",
    "сумку Balenciara",
    "сумку Balenciara Heart",
    "сумку Brada",
    "сумку Chanette",
    "сумку Chloe",
    "сумку Cortney",
    "сумку Dion",
    "сумку-чемоданчик Dion",
    "сумку Dion Saddle",
    "сумку Eepy",
    "сумку Extra Comfy",
    "сумку Enfants Rich Deprime",
    "сумку Guggi",
    "сумку Jivenchy",
    "сумку LW",
    "сумку-мессенджер LW",
    "сумку MK",
    "сумку SPICYBEARS",
    "сумку SPICYBEARS c рефлектором",
    "сумку Tommy Fort",
    "сумку Vursati",
    "сумку Walk",
    "большую сумку Guggi",
    "сумку нагрудную CK",
    "сумку Nice Airy Plus T",
    "сумку LW LDD без брелков",
    "сумку Gojard",
    "сумку Compressed",
    "сумку Stone Islet",
    "сумку портфель Mua Mua",
    "сумку Nermes Kirkin",
    "сумку Сердце в костях",
    "сумку Masackre Stressed",
    "сумку-трубу Tegfar",
    "сумку Decided Fame",
    "сумку Mua Mua",
    "сумку Крокодил",
    "сумку-утку LW",
    "торбу 9INE",
    "сумку-обезьяну Fape",
    "сумку круглую Tegfar",
    "сумку Pendy",
    "сумку El Hardy",
    "сумку-рюкзак Guggi",
    "сумку поясную All-White",
    "сумку поясную Graffiti",
    "сумку поясную Guggi",
    "сумку поясную LW",
    "сумку поясную TSF/SUP",
    "Торбу Adibas Summer",
    "Сумку LW NeoSummer",
    "Сумку Rik Ovens Gemini",
    "Кросс сумку SportBunny",
    "Рюкзак Cyber Nomad",
    "Рюкзак Balenciara La Cite",
    "Сумку чемодан Lui Wuitton"
    ]
};

// ============================================================
//  ЛОГИКА EDITOR
// ============================================================
window.getStatus = function(expires) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var expDate = new Date(expires);
    expDate.setHours(0, 0, 0, 0);
    if (expDate < today) return 'expired';
    if (expDate.getTime() === today.getTime()) return 'today';
    return 'active';
};

window.formatDate = function(dateStr) {
    if (dateStr === '9999-12-31') return '∞';
    var parts = dateStr.split('-');
    return parts[2] + '.' + parts[1] + '.' + parts[0];
};

window.renderCodesMatrix = function() {
    var container = document.getElementById('codes-matrix');
    if (!container) return;
    
    var searchInput = document.getElementById('codes-search');
    var search = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    var filtered = codesData;
    if (search) {
        filtered = codesData.filter(function(item) {
            return item.word.toLowerCase().includes(search) || item.template.toLowerCase().includes(search);
        });
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#555;">🔍 Ничего не найдено</div>';
        return;
    }
    
    var html = '';
    filtered.forEach(function(item, index) {
        var status = window.getStatus(item.expires);
        var formattedDate = window.formatDate(item.expires);
        var statusClass = status;
        var statusLabel = status === 'expired' ? '❌ Просрочено' : status === 'today' ? '⚠️ Сегодня' : '✅ Активно';
        
        var escapedTemplate = window.escapeJs(item.template);
        var wordDisplay = window.escapeHtml(item.word);
        var templateDisplay = window.escapeHtml(item.template);
        
        var isExpired = status === 'expired';
        var cardStyle = isExpired ? 'style="opacity:0.6;border-color:#ff444440;"' : '';
        
        // Карточки по умолчанию открыты (добавляем класс open)
        html += '<div class="code-card open" ' + cardStyle + '>' +
            '<div class="code-card-header" onclick="this.closest(\'.code-card\').classList.toggle(\'open\')">' +
                '<div class="code-word">' +
                    '<span>' + wordDisplay + '</span>' +
                '</div>' +
                '<div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">' +
                    '<span class="code-status ' + statusClass + '">' + statusLabel + '</span>' +
                    '<span class="code-arrow">▼</span>' +
                '</div>' +
            '</div>' +
            '<div class="code-card-body">' +
                '<div class="code-template">' + templateDisplay + '</div>' +
                '<div class="code-expires">' +
                    '<span class="date">📅 Действует до: <strong style="color:' + (status === 'expired' ? '#ff4444' : status === 'today' ? '#ffd93d' : '#66bb6a') + ';">' + formattedDate + '</strong></span>' +
                    '<button class="btn-copy-code" onclick="window.copyCodeTemplate(this, \'' + escapedTemplate + '\')">📋 Копировать шаблон</button>' +
                '</div>' +
            '</div>' +
        '</div>';
    });
    
    container.innerHTML = html;
    
    var countEl = document.getElementById('codes-count');
    if (countEl) {
        countEl.textContent = '(' + filtered.length + ' из ' + codesData.length + ')';
    }
};

window.copyCodeTemplate = function(btn, template) {
    navigator.clipboard.writeText(template).then(function() {
        btn.textContent = '✅ Скопировано!';
        btn.classList.add('copied');
        setTimeout(function() { 
            btn.textContent = '📋 Копировать шаблон';
            btn.classList.remove('copied');
        }, 1500);
    }).catch(function() {
        var t = document.createElement('textarea');
        t.value = template;
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        btn.textContent = '✅ Скопировано!';
        btn.classList.add('copied');
        setTimeout(function() { 
            btn.textContent = '📋 Копировать шаблон';
            btn.classList.remove('copied');
        }, 1500);
    });
};

window.filterCodes = function() {
    window.renderCodesMatrix();
};

window.renderRefData = function() {
    var categories = {
        'ref-cars': { data: refData.cars, icon: '🚗' },
        'ref-bikes': { data: refData.bikes, icon: '🏍️' },
        'ref-boats': { data: refData.boats, icon: '🚤' },
        'ref-shop': { data: refData.shop, icon: '🛒' },
        'ref-food': { data: refData.food, icon: '🍰' },
        'ref-fish': { data: refData.fish, icon: '🐡' },
        'ref-clothes': { data: refData.clothes, icon: '👕' },
        'ref-bags': { data: refData.bags, icon: '🎒' }
    };
    
    for (var id in categories) {
        var container = document.getElementById(id);
        if (!container) continue;
        var data = categories[id].data;
        var icon = categories[id].icon;
        
        var section = container.closest('.ref-section');
        var searchInput = section ? section.querySelector('.ref-search') : null;
        var search = searchInput ? searchInput.value.toLowerCase().trim() : '';
        
        var filtered = data;
        if (search) {
            filtered = data.filter(function(item) {
                return item.toLowerCase().includes(search);
            });
        }
        
        var html = '';
        if (filtered.length === 0) {
            html = '<div style="color:#555;padding:10px;text-align:center;font-size:.85rem;">🔍 Ничего не найдено</div>';
        } else {
            filtered.forEach(function(item) {
                var escaped = window.escapeJs(item);
                html += '<div class="ref-item"><span>' + icon + ' ' + window.escapeHtml(item) + '</span><button class="copy-btn-sm" onclick="window.copyRefItem(\'' + escaped + '\', this)">📋</button></div>';
            });
        }
        container.innerHTML = html;
    }
};

window.setupRefSearch = function() {
    document.querySelectorAll('.ref-search').forEach(function(input) {
        input.removeEventListener('input', window.renderRefData);
        input.addEventListener('input', function() {
            window.renderRefData();
        });
    });
};

function initEditor() {
    window.renderCodesMatrix();
    window.renderRefData();
    window.setupRefSearch();
    
    var searchInput = document.getElementById('codes-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            window.filterCodes();
        });
    }
    
    document.querySelectorAll('#editor-cats .category-btn').forEach(function(b) {
        b.addEventListener('click', function() {
            var p = this.closest('#editor-cats');
            p.querySelectorAll('.category-btn').forEach(function(x) { x.classList.remove('active'); });
            this.classList.add('active');
            var cat = this.dataset.cat;
            document.querySelectorAll('.editor-cat').forEach(function(x) { x.classList.add('hidden'); });
            document.getElementById(cat).classList.remove('hidden');
            if (cat === 'editor-codes') window.renderCodesMatrix();
            if (cat === 'editor-ref') {
                window.renderRefData();
                window.setupRefSearch();
            }
            localStorage.setItem('editorSubTab', cat);
        });
    });
    
    var savedSub = localStorage.getItem('editorSubTab');
    if (savedSub) {
        var btn = document.querySelector('#editor-cats .category-btn[data-cat="' + savedSub + '"]');
        if (btn) btn.click();
    }
}
