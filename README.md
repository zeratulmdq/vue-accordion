# vue-accordion
Simple accordion menu component for Vuejs

[Check it out live!](http://zeratulmdq.github.io/vue-accordion/)

## Note

The API has changed. Check [v0.0.3 documentation](/docs/0.0.3.md) if you use the old version.

## Install

#### NPM / Yarn

Install the package:

```
npm install vue-accordion
```

Then import it in your project

```js
import Vue from 'vue'
import {vueAccordion} from 'vue-accordion'

Vue.component('vue-accordion', vueAccordion)
```

#### Browser global

Just include `vue` & `vue-accordion`

```html
<script scr="path/to/vue.js"></script>
<script src="path/to/dist/vue-accordion.js"></script>
```

Then register the component:

```html
<script>
  Vue.component('vue-accordion', vueAccordion)
  
  var vm = new Vue({
    ...
  });
</script>
```

## Usage

Simply use it like so:

```html
<vue-accordion :items="items" :accordionClass="acClass" :styles="styles"></vue-accordion>
```

## Structure

Once the accordion has been rendered, it'll create the following structure:

````html
<div class="vue-accordion">
  <ul>
    <!-- First menu item-->
    <li>
      <a>
        <h2>...</h2>
        <p>...</p>
      </a>
    </li>
    <!-- Second menu item-->
    <li>
      <a>
        <h2>...</h2>
        <p>...</p>
      </a>
    </li>
    ...
  </ul>
</div>
````

All CSS is based uppon this structure. 

```css
.vue-accordion {
  ...
}

.vue-accordion ul {
  ...
}

...

.vue-accordion ul li a h2 {
  ...
}
```

If you want to modify the styling, take a look at the `accordionClass` and `styles` props.

## Options

##### items
Mandatory. An array of objects to create the panels inside the accordion. Each object must have this structure:

```  
{
  title: 'First',
  text: 'text',
  url: '#',
  image: '/images/one.jpg'
}
```

Take into consideration the width of the accordion and the images you use. If the image is shorter, you'll see a an awful grey background.

##### accordionClass
Optional. A string bounded to the class attribute of the main div. Defaults to `vue-accordion`.

##### styles
Optional. An object whose keys are other objects containing specific CSS properties to be bound to the elements created inside the accordion:

```js
{
  // this will be bound to the style attribute of all `div`s inside the accordion
  div: {
    height: '350px'
  },
  // this will be bound to the style attribute of all `ul`s inside the accordion
  ul: {
    color: '#F00'
  },
  // this will be bound to the style attribute of all `li`s inside the accordion
  li: {
    fontSize: '15px'
  },
  // this will be bound to the style attribute of all `a`s inside the accordion
  a: {
    padding: '30px'
  },
  // this will be bound to the style attribute of all `h2`s inside the accordion
  h2: {
    marginTop: '100px'
  },
  // this will be bound to the style attribute of all `p`s inside the accordion
  p: {
    textTransform: 'uppercase'
  }
}
```

## TODO

- Tests
- Router-link

## CREDITS

Most of the CSS belongs to [this guy](http://michael-ferry.com/)