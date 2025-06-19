"use strict";
class ParentDiv {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'parent-div';
        document.body.appendChild(this.element);
    }
    get size() {
        return {
            width: this.element.offsetWidth,
            height: this.element.offsetHeight,
        };
    }
}
class ChildDiv {
    constructor(parent) {
        this.x = 0;
        this.y = 0;
        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.parent = parent;
        this.element = document.createElement('div');
        this.element.className = 'child-div';
        this.parent.element.appendChild(this.element);
        // Bind event listeners
        this.onPointerMoveBound = this.onPointerMove.bind(this);
        this.onPointerUpBound = this.onPointerUp.bind(this);
        this.onPointerCancelBound = this.onPointerCancel.bind(this);
        // Listen for pointerdown to initiate drag
        this.element.addEventListener('pointerdown', this.onPointerDown.bind(this));
        // Re-clamp on window resize
        window.addEventListener('resize', this.clampPosition.bind(this));
        // Initial clamping
        this.clampPosition();
    }
    onPointerDown(event) {
        event.preventDefault();
        this.isDragging = true;
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
        // Capture the pointer
        this.element.setPointerCapture(event.pointerId);
        // Add event listeners for move and release/cancel
        window.addEventListener('pointermove', this.onPointerMoveBound);
        window.addEventListener('pointerup', this.onPointerUpBound);
        window.addEventListener('pointercancel', this.onPointerCancelBound);
    }
    onPointerUp(event) {
        this.cleanupPointer(event.pointerId);
    }
    onPointerCancel(event) {
        console.log("pointer released");
        this.cleanupPointer(event.pointerId);
    }
    cleanupPointer(pointerId) {
        this.isDragging = false;
        this.element.releasePointerCapture(pointerId);
        window.removeEventListener('pointermove', this.onPointerMoveBound);
        window.removeEventListener('pointerup', this.onPointerUpBound);
        window.removeEventListener('pointercancel', this.onPointerCancelBound);
    }
    onPointerMove(event) {
        if (!this.isDragging)
            return;
        const rect = this.parent.element.getBoundingClientRect();
        this.x = event.clientX - rect.left - this.offsetX;
        this.y = event.clientY - rect.top - this.offsetY;
        this.clampPosition();
    }
    clampPosition() {
        const { width, height } = this.parent.size;
        this.x = Math.max(0, Math.min(this.x, width - this.element.offsetWidth));
        this.y = Math.max(0, Math.min(this.y, height - this.element.offsetHeight));
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}
// Instantiate parent/child sets
// const parent1 = new ParentDiv();
// const child1 = new ChildDiv(parent1);
// const child2 = new ChildDiv(parent1);
// const child3 = new ChildDiv(parent1);
// const parent2 = new ParentDiv();
// const child4 = new ChildDiv(parent2);
// const parent3 = new ParentDiv();
// const child5 = new ChildDiv(parent3);
for (let i = 0; i < 4; i++) {
    const temp = new ParentDiv();
    for (let j = 0; j < 8; j++) {
        new ChildDiv(temp);
    }
}
