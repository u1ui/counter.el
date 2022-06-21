# Counter-element
Animated Number Counter

## Features
- The counter starts when the element comes into the viewport
- It counts using a easeOutCubic timing function
- Attribute `value="12.30"` defines target value 
- ...and decimal places to be displayed!
- Optional attribute `from="-10"` defines start value. Without it, it will start at 0
- You can set the property `element.value` to start counting.
- Counter elements get a css variable `--finalWidth` which is set to their `min-width` by default.
- Use the inner HTML as fallback.

## Ussage
```html
<link rel=stylesheet href="https://cdn.jsdelivr.net/gh/u1ui/counter.el@x/counter.min.css">
<scrip src="https://cdn.jsdelivr.net/gh/u1ui/counter.el@x/counter.min.js" type=module></script>


<u1-counter from=-11.0 value=200.0 once>200.0</u1-counter>
```

## Demos
https://raw.githack.com/u1ui/counter.el/main/tests/minimal.html  
https://raw.githack.com/u1ui/counter.el/main/tests/test.html  

