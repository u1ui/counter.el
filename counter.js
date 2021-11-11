class counter extends HTMLElement {
    constructor() {
        super();

        this._start = 0;
        this._end = Number(this.innerHTML.replace("'",''));

        this.animatedValue = 0;

        this._observer = new IntersectionObserver((entries)=>{
            entries[0].isIntersecting ? this._animate(this._start, this._end) : this._reset();
        });
    }
    // set value
    static get observedAttributes() { return ['value', 'no-grouping'] }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') this.value = newValue
        if (name === 'no-grouping') this.noGrouping = newValue!==null;
    }
    set value(value){
        let [ integer, digits='' ] = value.trim().split('.');
        this._minDigits = digits.length;

        this._end = Number(value);
        // todo: recalculate finalWidth
        this._animate(this.animatedValue, this._end);
    }

    connectedCallback() {
        // measure final-width
        this.innerHTML = format(this, this._end);
        let widthPx = this.offsetWidth;
        const fontSizePx = Number(getComputedStyle(this).getPropertyValue('font-size').slice(0,-2));
        const em = widthPx / fontSizePx;
        this.style.setProperty('--finalWidth', em+'em');

        this._reset();

        this._observer.observe(this);
    }
    disconnectedCallback() {
        this._observer.disconnect(this)
    }
    _animate(from, to) { // todo easing
        const duration = 1000;
        const frames = Math.ceil(duration / 16);
        let step = (to - from) / frames;
        this._stop();
        this.animatedValue = from;
        this._interval = setInterval(()=>{
            this.animatedValue += step;
            if (step>0 ? this.animatedValue>=to : this.animatedValue<=to) {
                this.animatedValue = to;
                this._stop();
            }
            this._draw()
        },15)
    }
    _stop() {
        clearInterval(this._interval);
    }
    _reset() {
        this._stop();
        this.animatedValue = this._end;
        this._draw();
    }
    _draw(){
        requestAnimationFrame(()=> this.innerHTML = format(this, this.animatedValue) );
    }
    //customProperty(property) { return getComputedStyle(this).getPropertyValue('--u1-carousel-' + property); }
}


function format(el, val){
    return new Intl.NumberFormat(undefined, {
        style: 'decimal',
        minimumFractionDigits: el._minDigits || 0,
        maximumFractionDigits: el._minDigits || 0,
        useGrouping: !el.noGrouping
    }).format(val);
}

customElements.define('u1-counter', counter)
