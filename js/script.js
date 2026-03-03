"use strict";
function initAccordion({
    alwaysOneItemActive = true,
    activeClass = "accordion__item--active",
    firstActiveItem = [],
    animationSpeed = 0.3,
} = {}) {
    const accordionEls = document.querySelectorAll('[data-accordion="wrapper"');
    const accordionItemsEls = document.querySelectorAll(
        '[data-accordion="item"]',
    );

    function clickOnAccordion(evt) {
        const target = evt.target;
        const targetItem = target.closest('[data-accordion="item"]');
        const targetAccordion = target.closest('[data-accordion="wrapper"]');
        const currentAccordionItemsEls = targetAccordion.querySelectorAll(
            '[data-accordion="item"]',
        );

        if (alwaysOneItemActive) {
            currentAccordionItemsEls.forEach((item) => {
                item.classList.remove(activeClass);
                item.querySelector('[data-accordion="content"]').style.height =
                    0;
            });
        }

        if (targetItem) {
            targetItem.classList.toggle(activeClass);
            const targetContent = targetItem.querySelector(
                '[data-accordion="content"]',
            );

            if (targetItem.classList.contains(activeClass)) {
                targetContent.style.height = targetContent.scrollHeight + "px";
            } else {
                targetContent.style.height = 0;
            }
        }
    }

    accordionEls.forEach((accordion) =>
        accordion.addEventListener("click", clickOnAccordion),
    );

    accordionItemsEls.forEach((item) => {
        const content = item.querySelector('[data-accordion="content"]');
        content.style.cssText = `
        height: 0;
        overflow: hidden;
        transition: height ${animationSpeed}s ease;
    `;
    });

    firstActiveItem.forEach((item, index) => {
        if (item >= 0 && item < accordionItemsEls.length) {
            const startActiveItem = accordionEls[index].querySelectorAll(
                '[data-accordion="item"]',
            )[item];

            const startContent = startActiveItem.querySelector(
                '[data-accordion="content"]',
            );

            startActiveItem.classList.add(activeClass);
            startContent.style.height = startContent.scrollHeight + "px";
        }
    });
}

initAccordion({
    alwaysOneItemActive: false,
    firstActiveItem: [0, 1, 2],
    animationSpeed: 1.5,
});
