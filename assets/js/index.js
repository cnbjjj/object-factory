'use strict';
import * as utils from './utils.js';
import Shape from './Shape.js';

function createShape() {
    if (shapesArray.length >= ROWS * COLS)
        return shapeInfo.innerHTML = '<span class="warning">Container is full.</span>';
    if (shapes.selectedIndex === 0 || colors.selectedIndex === 0)
        return shapeInfo.innerHTML = '<span class="warning">Please select a shape and a color to create a shape.</span>';
    const id = shapesArray.length + 1;
    const shapeClass = shapes.value;
    const shapeColor = { name: colors[colors.selectedIndex].text, value: colors.value };
    const shapeInst = new Shape(id, shapeClass, shapeColor);
    const shapeDiv = document.createElement('div');
    const rs = ROWS - (Math.ceil(id / COLS) - 1);
    shapeDiv.classList.add('shape', shapeClass, shapeColor.name.toLowerCase(), `rs-${rs}`);
    utils.event(shapeDiv, 'click', () => shapeInfo.innerHTML = `Info ${shapeInst.getInfo()}`);
    shapeDivs.appendChild(shapeDiv);
    shapeInfo.innerHTML = `Created ${shapeInst.getInfo()}`;
    shapesArray.push(shapeInst);
    return shapeInst;
}

const style = getComputedStyle(document.documentElement);
const ROWS = style.getPropertyValue("--rows");
const COLS = style.getPropertyValue("--cols");
const shapesArray = new Array();
const colors = utils.select('.colors');
const shapes = utils.select('.shapes');
const shapeDivs = utils.select('.shape-container');
const shapeInfo = utils.select('.shape-info');
const createButton = utils.select('input[type="button"]');
utils.event(createButton, 'click', () => createShape());