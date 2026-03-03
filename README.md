# plugins-accordion Плагин для аккордеона с плавным появлением элементов

## Инструкция:
### Структура HTML: Главное, чтобы были ***data***, плагин не привязывается к классам или id
```
<ul class="accordion" data-accordion="wrapper">
            <li class="accordion__item" data-accordion="item">
                <h3 class="accordion__title">Item 1</h3>
                <div class="accordion__content-wrap" data-accordion="content">
                    <p class="accordion__content">Content for Item#1</p>
                </div>
            </li>
            <li class="accordion__item" data-accordion="item">
                <h3 class="accordion__title">Item 2</h3>
                <div class="accordion__content-wrap" data-accordion="content">
                    <p class="accordion__content">Content for Item#2</p>
                </div>
            </li>
        </ul>
```
  

## Запуск:
```
initAccordion({
    alwaysOneItemActive: false,
    firstActiveItem: [0, 1, 2],
    animationSpeed: 1.5,
    activeClass: 'active'
});
```

### Объект с опциями:

* alwaysOneItemActive (Boolean) Всегда есть активный элемент --- DEFAULT: true
* firstActiveItem (Number[]) Если несколько аккордеонов в массиве по порядку указываются номера активных item у каждого аккордеона, отсчёт с 0 --- DEFAULT: [0] 
* animationSpeed (Number) скорость анимации в секундах --- DEFAULT: 0.3
* activeClass (String) имя активного класса, который ставится на активный item --- DEFAULT: '.accordion__item--active' Нужен например для кастомной анимации стрелок
