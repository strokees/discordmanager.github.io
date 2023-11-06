// Получаем ссылку на элемент с классом "animated-element"
const animatedElement = document.querySelector('.animated-element');

// Добавляем обработчик события при наведении курсора на элемент
animatedElement.addEventListener('mouseover', function() {
    // Изменяем цвет и размер элемента при наведении
    animatedElement.style.backgroundColor = '#e74c3c';
    animatedElement.style.transform = 'scale(1.2)';
});

// Добавляем обработчик события при уходе курсора с элемента
animatedElement.addEventListener('mouseout', function() {
    // Возвращаем исходный цвет и размер элемента при уходе курсора
    animatedElement.style.backgroundColor = '#3498db';
    animatedElement.style.transform = 'scale(1)';
});
