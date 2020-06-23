"use strict";$(document).ready(function(){$(".menu__list a").on("click",function(){$("html, body").stop().animate({scrollTop:+$($(this).attr("href")).offset().top},600)}),$(".icon-menu").click(function(e){$(".menu__body").toggleClass("active"),$(this).toggleClass("active"),$("body").toggleClass("lock")}),$(".menu__list").on("click",function(){$(".menu__body").removeClass("active"),$(".icon-menu").removeClass("active"),$("body").removeClass("lock")}),$(window).scroll(function(){300<$(this).scrollTop()?$("#scroll").fadeIn():$("#scroll").fadeOut()}),$("#scroll").click(function(){return $("html, body").animate({scrollTop:0},600),!1}),$(".tab").on("click",function(e){e.preventDefault(),$(this).toggleClass("active");var t=this.getAttribute("data-toggle-target");$(".product__items").removeClass("active").filter(t).addClass("active")});new Swiper(".swiper-container-main",{loop:!1,slidesPerView:2,pagination:{el:".swiper-pagination-main"},navigation:{nextEl:".swiper-button-next-main",prevEl:".swiper-button-prev-main"}}),new Swiper(".swiper-container-1",{loop:!1,slidesPerView:3,spaceBetween:30,observer:!0,observeParents:!0,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1},740:{slidesPerView:2},960:{slidesPerView:3}},scrollbar:{el:".swiper-scrollbar"},navigation:{nextEl:".swiper-button-next-1",prevEl:".swiper-button-prev-1"}}),new Swiper(".swiper-container-2",{loop:!1,slidesPerView:3,spaceBetween:30,observer:!0,observeParents:!0,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1},740:{slidesPerView:2},960:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next-2",prevEl:".swiper-button-prev-2"}}),new Swiper(".swiper-container-3",{loop:!1,slidesPerView:3,spaceBetween:30,observer:!0,observeParents:!0,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1},740:{slidesPerView:2},960:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next-3",prevEl:".swiper-button-prev-3"}}),new Swiper(".swiper-container-4",{loop:!1,slidesPerView:3,spaceBetween:30,observer:!0,observeParents:!0,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1},740:{slidesPerView:2},960:{slidesPerView:3}},navigation:{nextEl:".swiper-button-next-4",prevEl:".swiper-button-prev-4"}});new Swiper(".swiper-container-reviews",{init:!1,loop:!0,speed:800,slidesPerView:2,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},grabCursor:!0,parallax:!0,pagination:{el:".swiper-pagination-reviews",clickable:!0},navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews"},breakpoints:{1023:{slidesPerView:1,spaceBetween:0}},on:{imagesReady:function(){this.el.classList.remove("loading")}}}).init()}),$(document).ready(function(t){t(".btn-callback").on("click",function(e){e.preventDefault(),t(".form-container").removeClass("hidden").html('<div class="form-block">\n        <h3>Заполните форму,</h3>\n        <p>и наш менеджер перезвонит Вам в течение 15 мин, чтобы ответить на все вопросы</p>\n        <form method="post" id="callback" action="mail.php">\n            <input type="hidden" name="whatform" value="Форма - Перезвоните мне"/>\n            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n            <button class="button btn-red" type="submit">Перезвоните мне</button>\n        </form>\n        <button type="button" class="btn-close">×</button>\n    </div>'),t("body").toggleClass("lock")}),t(".btn-stockDetails").click(function(){t(".form-container").removeClass("hidden").html('<div class="form-block">\n        <h3>Заполните форму,</h3>\n        <p>чтобы узнать детали акции в течение 15 минут</p>\n        <form method="post" id="stockDetails" action="mail.php">\n            <input type="hidden" name="whatform" value="Форма - Узнать детали акции"/>\n            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n            <button class="button btn-red" type="submit">Узнать подробнее</button>\n        </form>\n        <button type="button" class="btn-close">×</button>\n    </div>'),t("body").toggleClass("lock")}),t(".btn-getCatalog").click(function(){t(".form-container").removeClass("hidden").html('<div class="form-block">\n        <h3>Заполните форму,</h3>\n        <p>чтобы получить фотокаталог в течение 15 минут</p>\n        <form method="post" id="getCatalog" action="mail.php">\n            <input type="hidden" name="whatform" value="Форма - Получить фотокаталог продукции"/>\n            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n            <button class="button btn-red" type="submit">Получить фотокаталог</button>\n        </form>\n        <button type="button" class="btn-close">×</button>\n    </div>'),t("body").toggleClass("lock")}),t(".btn-getConsult").click(function(){t(".form-container").removeClass("hidden").html('<div class="form-block">\n        <h3>Заполните форму,</h3>\n        <p>чтобы получить консультацию, и наш менеджер свяжется с Вами в течение 15 мин</p>\n        <form method="post" id="getConsult" action="mail.php">\n            <input type="hidden" name="whatform" value="Форма - Получить консультацию"/>\n            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n            <button class="button btn-red" type="submit">Получить консультацию</button>\n        </form>\n        <button type="button" class="btn-close">×</button>\n    </div>'),t("body").toggleClass("lock")}),t(".btn-cost").click(function(){t(".form-container").removeClass("hidden").html('<div class="form-block">\n        <h3>Заполните форму,</h3>\n        <p>чтобы узнать стоимость, и наш менеджер свяжется с Вами в течение 15 мин</p>\n        <form method="post" id="jeans" action="mail.php">\n            <input type="hidden" name="whatform" value="Форма - Джинсы обычные"/>\n            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n            <button class="button btn-red" type="submit">Узнать стоимость</button>\n        </form>\n        <button type="button" class="btn-close">×</button>\n    </div>'),t("body").toggleClass("lock")}),t(".btn-stockForm").click(function(){t(".form-container").removeClass("hidden").html('<div class="form-block">\n        <h3>Заполните форму,</h3>\n        <p>чтобы получить фотокаталог продукции со скидкой до -50% в течение 15 минут</p>\n        <form method="post" id="stockForm" action="mail.php">\n            <input type="hidden" name="whatform" value="Форма - Скидки на актуальные модели до - 50%"/>\n            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n            <button class="button btn-red" type="submit">Получить фотокаталог</button>\n        </form>\n        <button type="button" class="btn-close">×</button>\n    </div>'),t("body").toggleClass("lock")}),t(".btn-orderForm").click(function(){t(".form-container").removeClass("hidden").html('<div class="form-block">\n        <h3>Заполните форму,</h3>\n        <p>чтобы оставить заявку, и наш менеджер свяжется с Вами в течение 15 минут</p>\n        <form method="post" id="orderForm" action="mail.php">\n            <input type="hidden" name="whatform" value="Форма - Сделать у нас заказ очень просто"/>\n            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n            <button class="button btn-red" type="submit">Оставить заявку</button>\n        </form>\n        <button type="button" class="btn-close">×</button>\n    </div>'),t("body").toggleClass("lock")}),t(".btn-questions").click(function(){t(".form-container").removeClass("hidden").html('<div class="form-block">\n        <h3>Заполните форму,</h3>\n        <p>и наш менеджер перезвонит Вам в течение 15 минут,чтобы ответить на все вопросы</p>\n        <form method="post" id="orderForm" action="mail.php">\n            <input type="hidden" name="whatform" value="Форма - Задать вопрос"/>\n            <input name="name" type="text" placeholder="Ваше имя" size="25" required="">\n            <input name="phone" type="tel" placeholder="Ваш телефон" required="">\n            <button class="button btn-red" type="submit">Задать вопрос</button>\n        </form>\n        <button type="button" class="btn-close">×</button>\n    </div>'),t("body").toggleClass("lock")}),t(".btn-politics").click(function(){t(".form-container").removeClass("hidden").html('<div class="politics">\n        <div class="politics__text"> Ваша конфіденційність дуже важлива для нас. Ми хочемо, щоб Ваша робота в\n            Інтернет по можливості була максимально приємною і корисною, і Ви абсолютно спокійно використовували\n            найширший спектр інформації, інструментів і можливостей, які пропонує Інтернет.\n        </div>\n\n        <div class="politics__text">Особиста інформація Членів, зібрана при реєстрації (або в будь-який інший\n            час) переважно використовується для підготовки Продуктів або Послуг відповідно до Ваших потреб. Ваша\n            інформація не буде передана або продана третім сторонам. Однак ми можемо частково розкривати особисту\n            інформацію в особливих випадках, описаних в «Згоду з розсилкою»\n        </div>\n\n        <div class="politics__text"><span>Які дані збираються на сайті </span> <br> При добровільної реєстрації\n            на отримання розсилки «Інсайдер інтернет підприємця» ви відправляєте своє Ім\'я та E-mail через форму\n            реєстрації.\n        </div>\n\n        <div class="politics__text"><span>З якою метою збираються ці дані </span> <br> Ім\'я використовується для\n            звернення особисто до вас, а ваш e-mail для відправки вам листів розсилок, новин тренінгу, корисних\n            матеріалів, комерційних пропозицій. Ваші ім\'я та e-mail не передаються третім особам, ні за яких умов крім\n            випадків, пов\'язаних з виконанням вимог законодавства. Ваше ім & # 39; я і e-mail на захищених серверах\n            сервісу getresponse.com і використовуються відповідно до його політикою конфіденційності.\n        </div>\n\n        <div class="politics__text">Ви можете відмовитися від отримання листів розсилки і видалити з бази даних\n            свої контактні дані в будь-який момент, клікнувши на посилання для відписки, присутню в кожному листі.\n        </div>\n\n        <div class="politics__text"><span>Як ці дані використовуються </span> <br> На сайті використовуються куки\n            (Cookies) і дані про відвідувачів сервісу Google Analytics.\n        </div>\n\n        <div class="politics__text">За допомогою цих даних збирається інформація про дії відвідувачів на сайті з\n            метою поліпшення його змісту, поліпшення функціональних можливостей сайту і, як наслідок, створення якісного\n            контенту і сервісів для відвідувачів.\n        </div>\n\n        <div class="politics__text">Ви можете в будь-який момент змінити налаштування свого браузера так, щоб\n            браузер блокував всі файли cookie або оповіщає про відправку цих файлів. Врахуйте при цьому, що деякі\n            функції і сервіси не зможуть працювати належним чином.\n        </div>\n\n        <div class="politics__text"><span>Як ці дані захищаються </span><br> Для захисту Вашої особистої інформації\n            ми використовуємо різноманітні адміністративні, управлінські та технічні заходи безпеки. Наша Компанія\n            дотримується різних міжнародних стандартів контролю, спрямованих на операції з особистою інформацією, які\n            включають певні заходи контролю щодо захисту інформації, зібраної в Інтернет.\n        </div>\n\n        <div class="politics__text">Наших співробітників навчають розуміти і виконувати ці заходи контролю, вони\n            ознайомлені з нашим Повідомленням про конфіденційність, норм та інструкцій.\n        </div>\n\n        <div class="politics__text">Проте, не дивлячись на те, що ми прагнемо убезпечити Вашу особисту\n            інформацію, Ви теж повинні вживати заходів, щоб захистити її.\n        </div>\n\n        <div class="politics__text">Ми настійно рекомендуємо Вам вживати всіх можливих заходів обережності під\n            час перебування в Інтернеті. Організовані нами послуги і веб-сайти передбачають заходи щодо захисту від\n            витоку, несанкціонованого використання і зміни інформації, яку ми контролюємо. Незважаючи на те, що ми\n            робимо все можливе, щоб забезпечити цілісність і безпеку своєї мережі і систем, ми не можемо гарантувати, що\n            наші заходи безпеки допоможуть запобігти незаконний доступ до цієї інформації хакерів сторонніх організацій.\n        </div>\n\n        <div class="politics__text">У разі зміни цієї політики конфіденційності ви зможете прочитати про ці зміни\n            на цій сторінці або, в особливих випадках, отримати повідомлення на свій e-mail.\n        </div>\n\n        <div class="politics__text">Для зв\'язку з адміністратором сайту з будь-яких питань ви можете написати\n            лист на e-mail: <a class="" href="mailto:email@gmail.com">email@gmail.com</a>\n        </div>\n        <button type="button" class="btn-close">×</button>\n    </div>'),t("body").toggleClass("lock")}),t(".form-container").on("click",function(e){(t(e.target).is(".btn-close")||t(e.target).is(".form-container"))&&(e.preventDefault(),t(this).addClass("hidden"),t("body").removeClass("lock"))}),t(document).keyup(function(e){"27"==e.which&&(t(".form-container").addClass("hidden"),t("body").removeClass("lock"))})});var n=36e5,o=new Date("Jul 30, 2020 00:00:00").getTime();setInterval(function(){var e=(new Date).getTime(),t=o-e;document.getElementById("days").innerText=Math.floor(t/864e5),document.getElementById("hours").innerText=Math.floor(t%864e5/n),document.getElementById("minutes").innerText=Math.floor(t%n/6e4),document.getElementById("seconds").innerText=Math.floor(t%6e4/1e3)},1e3);