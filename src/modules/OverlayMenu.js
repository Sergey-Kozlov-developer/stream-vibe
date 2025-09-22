class OverlayMenu {
    // css селекторы к нужным элементам разметки
    //  данном случае это data трибуты
    selectors = {
        root: '[data-js-overlay-menu]',
        dialog: '[data-js-overlay-menu-dialog]',
        burgerButton: '[data-js-overlay-menu-burger-button]',
    }
    // css состояние isActive IsLock
    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }
    // выполняется первым при инициализации класса
    // находим элементы в DOM
    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.dialogElement = this.rootElement.querySelector(this.selectors.dialog);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
        this.bindEvents();
    }

    onBurgerButtonClick = () => {
        // добавляем и удаляем активный класс при нажатии
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        // меняем open for dialog // для открытия и закрытия при клике
        this.dialogElement.open = !this.dialogElement.open;
        document.documentElement.classList.toggle(this.stateClasses.isLock);

    }

    // привязываем слушатели к DOM лементам
    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }

}

export default OverlayMenu;