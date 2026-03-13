const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach(container => {
    const tabButtons = container.querySelectorAll('.tab');
    const tabContents = container.querySelectorAll('.tab__content');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => {
                btn.classList.remove('tab_active');
            });

            tabContents.forEach(content => {
                content.classList.remove('tab__content_active');
            });

            button.classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        });
    });
});