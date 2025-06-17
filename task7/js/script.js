"use strict";
const bodyTag = document.body;
let x = 0;
let y = 0;
const parentDiv = document.createElement('div');
parentDiv.className = "parent-div";
bodyTag.appendChild(parentDiv);
const childDiv = document.createElement('div');
parentDiv.appendChild(childDiv);
childDiv.className = "child-div";
const resizeDiv = () => {
    // document.body.style.height= `${window.innerHeight}px`;
    // document.body.style.width= `${window.innerWidth}px`;
    x = Math.min(parentDiv.offsetWidth - childDiv.offsetWidth, Math.max(x, 0));
    y = Math.min(parentDiv.offsetHeight - childDiv.offsetHeight, Math.max(y, 0));
    childDiv.style.top = `${y}px`;
    childDiv.style.left = `${x}px`;
};
resizeDiv();
window.addEventListener('resize', resizeDiv);
let dragActive = false;
let diffY = 0;
let diffX = 0;
childDiv.addEventListener('pointerdown', (event) => {
    console.log("active state of pointer");
    diffY = event.offsetY;
    diffX = event.offsetX;
    dragActive = true;
});
document.addEventListener('pointerup', (event) => {
    console.log("not active state of pointer");
    dragActive = false;
});
document.addEventListener('pointermove', (event) => {
    if (dragActive) {
        const parentRect = parentDiv.getBoundingClientRect();
        x = event.clientX - parentRect.left - diffX;
        y = event.clientY - parentRect.top - diffY;
        x = Math.min(parentDiv.offsetWidth - childDiv.clientWidth, Math.max(x, 0));
        y = Math.min(parentDiv.offsetHeight - childDiv.offsetHeight, Math.max(y, 0));
        childDiv.style.top = `${y}px`;
        childDiv.style.left = `${x}px`;
    }
});
