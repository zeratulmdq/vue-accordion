# vue-accordion
Simple accordion menu component for Vuejs

You can see a live demo [here](http://zeratulmdq.github.io/vue-accordion/)

## Install & usage

Simply install using npm (only for browserify)

```
npm install vue-accordion
```

and require it like so

```
var Vue = require('vue')
var accordion = require('vue-accordion')

var vm = new Vue({
	...
	components: {
		vueAccordion: accordion
	}
	...
})
```

(you may also use the .vue files in the src folder for more flexibility)

In your HTML use simply use it like so

	<vue-accordion :items="items"
				   :height="height" 
				   :top="top" 
				   :max-width="maxWidth">
	</vue-accordion>

## Options

The component accepts four parameters:

##### Height
Numeric. The height of the accordion, defaults to 350.

##### Width
Numeric. The max width of the accordion, defaults to 900. The component will expand up to this param. If you set it to 0, it'll use 100% of the parent node. If you need to set a percentage width, just set this param to 0 and wrap the component in a X% width html element.

##### Top
Numeric. The top margin of the H2 element inside each panel, defaults to 50px.

##### Items
The only mandatory param. An array of objects to create the panels inside the accordeon. Each object must have this structure:
	
    {
    	title: 'First',
        text: 'text',
        url: '#',
        image: '/images/one.jpg'
    }
   

Take into consideration the width of the accordion and the images you use. If the image is shorter, you'll see a an awful grey background.

## TODO

Webpack / globals (help appreciated)

## CREDITS

Most of the CSS belongs to [this guy](http://michael-ferry.com/)