# &lt;u1-counter&gt; - element
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
<u1-counter from=-11.0 value=200.0 once>200.0</u1-counter>
```

```css
u1-counter {
    font-size:3rem;
    min-width:var(--finalWidth);
    background:yellow;
}
```

## Install

```html
<link href="https://cdn.jsdelivr.net/gh/u1ui/counter.el@x.x.x/counter.min.css" rel=stylesheet>
<script src="https://cdn.jsdelivr.net/gh/u1ui/counter.el@x.x.x/counter.min.js" type=module>
```

## Demos

[minimal.html](http://gcdn.li/u1ui/counter.el@main/tests/minimal.html)  
[test.html](http://gcdn.li/u1ui/counter.el@main/tests/test.html)  

## About

- MIT License, Copyright (c) 2022 <u1> (like all repositories in this organization) <br>
- Suggestions, ideas, finding bugs and making pull requests make us very happy. ♥

