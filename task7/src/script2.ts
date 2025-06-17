class ParentDiv {
   element: HTMLDivElement;

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
   element: HTMLDivElement;
   parent: ParentDiv;
   x: number = 0;
   y: number = 0;
   isDragging: boolean = false;
   offsetX: number = 0;
   offsetY: number = 0;

  constructor(parent: ParentDiv) {
    this.parent = parent;
    this.element = document.createElement('div');
    this.element.className = 'child-div';

    this.parent.element.appendChild(this.element);

    this.eventListeners();
    this.clampPosition(); 
  }

   eventListeners() {
    this.element.addEventListener('pointerdown', this.onPointerDown.bind(this));
    document.addEventListener('pointerup', this.onPointerUp.bind(this));
    document.addEventListener('pointermove', this.onPointerMove.bind(this));
    window.addEventListener('resize', this.clampPosition.bind(this));
  }

   onPointerDown(event: PointerEvent) {
    this.isDragging = true;
    this.offsetX = event.offsetX;
    this.offsetY = event.offsetY;
  }

   onPointerUp(event: PointerEvent) {
    this.isDragging = false;
  }

   onPointerMove(event: PointerEvent) {
    if (!this.isDragging) return;

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

const outerDiv = new ParentDiv();
const innerDiv = new ChildDiv(outerDiv);
// const innerDiv2= new ChildDiv(outerDiv);

// const outerDiv2=new ParentDiv();
// const inner2Div= new ChildDiv(outerDiv2);

// const outerDiv3= new ParentDiv();
// const inner3Div= new ChildDiv(outerDiv3);