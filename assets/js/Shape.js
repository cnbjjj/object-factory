'use strict';
class Shape {
    #id;
    #name;
    #color;

    constructor(id, name, color) {
        this.#id = id;
        this.#name = name;
        this.#color = color;
    }

    set id(id) { this.#id = id; }
    get id() { return this.#id; }
    set name(name) { this.#name = name; }
    get name() { return this.#name; }
    set color(color) { this.#color = color; }
    get color() { return this.#color; }

    getInfo() {
        return `#${this.#id} : ${this.#color.name} ${this.#name}`;
    }
}

export default Shape;