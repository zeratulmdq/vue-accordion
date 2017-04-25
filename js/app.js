Vue.component('vue-accordion', vueAccordion);

var vm = new Vue({
  el: '#app',
  computed: {
    styles() {
      return {
        div: {
          height: this.div.height + 'px',
          margin: this.div.center ? '0 auto' : '0',
        },
        li: {
          borderColor: '#FFF',
          borderStyle: 'solid',
          borderWidth: this.panel.border + 'px',
          padding: this.panel.padding + 'px',
        },
        h2: {
          fontSize: this.titles.font + 'px',
          color: this.titles.color
        },
        p: {
          fontSize: this.texts.font + 'px',
          marginTop: this.texts.margin + 'px'
        }
      }
    },
  },
  data: {
    div: {
      height: 200,
      center: true,
      
    },
    panel: {
      border: 0,
      padding: 0
    },
    texts: {
      font: 10,
      margin: 0
    },
    titles: {
      font: 15,
      color: 'white'
    },
    items: [
      {
        title: 'First',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
        url: '#',
        image: 'https://unsplash.it/650/350/?image=111'
      },
      {
        title: 'Second',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
        url: '#',
        image: 'https://unsplash.it/650/350/?image=534'
      },
      {
        title: 'Third',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
        url: '#',
        image: 'https://unsplash.it/650/350/?image=9'
      },
      {
        title: 'Fourth',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
        url: '#',
        image: 'https://unsplash.it/650/350/?image=12'
      },
      {
        title: 'Fifth',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
        url: '#',
        image: 'https://unsplash.it/650/350/?image=15'
      },
      {
        title: 'Sixth',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
        url: '#',
        image: 'https://unsplash.it/650/350/?image=114'
      },
      {
        title: 'Seventh',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
        url: '#',
        image: 'https://unsplash.it/650/350/?image=318'
      }
    ]
  }
});