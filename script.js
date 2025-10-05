// Кнопка "Вниз", плавный скролл
document.querySelector(".scrool a").addEventListener("click", function (e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth",
  });
});

// Функционал раздела "Профиль акции"
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.actions__desc-chapters h3');
    const infoBlock = document.querySelector('.actions__desc-info');
    const positions = [270, 0, -365, -615, -780];
    const infoTexts = [
        "Информация для раздела Избранное: здесь будут отображаться ваши избранные акции и предложения.",
        "Вы всегда получите полную информацию об акции: подробное описание, бренд, магазины и торговые центры, где проходит акция.\nТакже доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции.",
        "Информация для раздела Подписки: управляйте вашими подписками на акции и уведомления.",
        "Информация для раздела Карта: просматривайте акции на интерактивной карте вашего города.",
        "Информация для раздела Моя лента: персонализированная лента акций и предложений."
    ];

    function setInitialState() {
        const profileIndex = 1; // Индекс "Профиль акции"
        headings.forEach(h => h.classList.remove('active'));
        headings[profileIndex].classList.add('active');

        const initialPosition = positions[profileIndex];
        headings.forEach(h => {
            h.style.transform = `translateX(${initialPosition}px)`;
        });

        infoBlock.textContent = infoTexts[profileIndex];
    }

    setInitialState();

    headings.forEach((heading, index) => {
        heading.addEventListener('click', function() {
            const currentActive = document.querySelector('.actions__desc-chapters h3.active');
            const currentIndex = Array.from(headings).indexOf(currentActive);

            if (index === currentIndex) return;

            headings.forEach(h => h.classList.remove('active'));
            this.classList.add('active');

            const targetPosition = positions[index];

            headings.forEach((h, i) => {
                h.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                h.style.transform = `translateX(${targetPosition}px)`;
            });

            infoBlock.style.opacity = '0';
            setTimeout(() => {
                infoBlock.textContent = infoTexts[index];
                infoBlock.style.opacity = '1';
            }, 150);
        });
    });
});

