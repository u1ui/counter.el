// todo add privet fields
/* element */
class counter extends HTMLElement {
    constructor() {
        super();

        this.value = Number(this.innerHTML.replace("'",''));

        this._observer = new IntersectionObserver((entries)=>{
            entries[0].isIntersecting ? this.play() : this.reset();
        });
    }
    //static get observedAttributes() {}
    //attributeChangedCallback(name, oldValue, newValue) {}
    customProperty(property) {
        return getComputedStyle(this).getPropertyValue('--u1-carousel-' + property);
    }
    connectedCallback() {
        // measure final-width
        this.innerHTML = format(this, this.value);
        let widthPx = this.offsetWidth;
        const fontSizePx = Number(getComputedStyle(this).getPropertyValue('font-size').slice(0,-2));
        const em = widthPx / fontSizePx;
        this.style.setProperty('--finalWidth', em+'em');

        this.reset();

        this._observer.observe(this)
    }
    disconnectedCallback() {
        this._observer.disconnect(this)
    }
    play() {
        const duration = 1000;
        const frames = Math.ceil(duration / 16);
        const step = this.value / frames;

        this.stop();
        let val = 0;
        this._interval = setInterval(()=>{
            val+=step;
            //val = Math.round(val);
            if (val>=this.value) {
                val = this.value;
                this.stop();
            }
            requestAnimationFrame(()=> this.innerHTML = format(this, val) );
        },15)
    }
    stop() {
        clearInterval(this._interval);
    }
    reset() {
        this.stop();
        this.innerHTML = '0';
    }
}


function format(el, val){
    return new Intl.NumberFormat(undefined, {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(val);
}

customElements.define('u1-counter', counter)
