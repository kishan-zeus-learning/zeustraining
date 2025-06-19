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

  // Correctly bound versions for independent event listeners
  private onPointerMoveBound: (event: PointerEvent) => void;
  private onPointerUpBound: (event: PointerEvent) => void;
  private onPointerCancelBound: (event: PointerEvent) => void;

  constructor(parent: ParentDiv) {
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

  onPointerDown(event: PointerEvent) {
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

  onPointerUp(event: PointerEvent) {
    this.cleanupPointer(event.pointerId);
  }

  onPointerCancel(event: PointerEvent) {
    console.log("pointer released");
    this.cleanupPointer(event.pointerId);
  }

  private cleanupPointer(pointerId: number) {
    this.isDragging = false;

      this.element.releasePointerCapture(pointerId);
    

    window.removeEventListener('pointermove', this.onPointerMoveBound);
    window.removeEventListener('pointerup', this.onPointerUpBound);
    window.removeEventListener('pointercancel', this.onPointerCancelBound);
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

// Instantiate parent/child sets
// const parent1 = new ParentDiv();
// const child1 = new ChildDiv(parent1);
// const child2 = new ChildDiv(parent1);
// const child3 = new ChildDiv(parent1);

// const parent2 = new ParentDiv();
// const child4 = new ChildDiv(parent2);

// const parent3 = new ParentDiv();
// const child5 = new ChildDiv(parent3);

for(let i=0;i<4;i++){
  const temp=new ParentDiv();

  for(let j=0;j<8;j++){
    new ChildDiv(temp);
  }
}