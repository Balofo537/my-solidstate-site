---
layout: '../../layouts/BlogPost.astro'
title: 'Solid headline'
summary:
  'Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />facilisis ante sed etiam magna interdum congue.
  Lorem ipsum dolor<br />amet nullam sed etiam veroeros.'
pubDate: '2017-04-26'
image: '/images/pic02.jpg'
---

Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor
imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris,
consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia
in purus ac, pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque
habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sapien risus, commodo eget
turpis at, elementum convallis enim turpis, lorem ipsum dolor sit amet nullam.


```ts
class Add {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  Display() {
    console.log(this.x);
    console.log(this.y);
    console.log(`Sum: ${this.x + this.y}`);
  }
}
let add = new Add(2, 3);
add.Display();
```
