export default class Section {
    constructor({ renderer }, container) {
        this._renderer = renderer;
        this._container = container;
    }

    renderItems(cards) {
        cards.forEach(item => {
            this.addItem(item)
        });
    }

    addItem(item) {
        const card = this._renderer(item)
        this._container.append(card);
    }
}