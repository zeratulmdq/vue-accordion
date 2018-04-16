<template>
	<li :class="{ 'show' : this.index === this.showIndex }" :style="liStyles" @mouseover="showThis">
		<a :href="item.url" :style="aStyles">
			<h2 v-text="item.title" :style="h2Styles"></h2>
			<p v-text="item.text" :style="pStyles"></p>
		</a>
	</li>
</template>
<script>
	export default {
	  props: {
	    item: {
	      type: Object
	    },
	    styles: {
	      type: Object
	    },
	    index: {
	      type: Number
	    },
	    showIndex: {
	      type: Number
	    }
	  },
	  methods: {
	    showThis: function() {
	      this.$emit("popup", this.index);
	    }
	  },
	  computed: {
	    liStyles() {
	      const li = {
	        backgroundImage: "url(" + this.item.image + ")"
	      };

	      if (this.styles && this.styles.li) Object.assign(li, this.styles.li);

	      return li;
	    },
	    aStyles() {
	      return this.styles && this.styles.a ? this.styles.a : {};
	    },
	    h2Styles() {
	      return this.styles && this.styles.h2 ? this.styles.h2 : {};
	    },
	    pStyles() {
	      return this.styles && this.styles.p ? this.styles.p : {};
	    }
	  }
	};
</script>
<style>
	.vue-accordion ul li {
	  display: table-cell;
	  vertical-align: bottom;
	  position: relative;
	  width: 15%;
	  background-repeat: no-repeat;
	  background-position: center center;
	  transition: all 500ms ease;
	  height: 100%;
	}

	.vue-accordion ul li a {
	  display: block;
	  width: 100%;
	  position: relative;
	  z-index: 3;
	  padding: 15px 20px;
	  box-sizing: border-box;
	  color: #fff;
	  text-decoration: none;
	  transition: all 200ms ease;
	  height: 100%;
	}

	.vue-accordion ul li a * {
	  opacity: 0;
	  margin: 0;
	  width: 100%;
	  text-overflow: ellipsis;
	  position: relative;
	  z-index: 5;
	  white-space: nowrap;
	  overflow: hidden;
	  -webkit-transform: translateX(-60px);
	  transform: translateX(-60px);
	  -webkit-transition: all 400ms ease;
	  transition: all 400ms ease;
	}

	.vue-accordion ul li a h2 {
	  text-overflow: clip;
	  font-size: 24px;
	  text-transform: uppercase;
	  margin-bottom: 2px;
	}

	.vue-accordion ul li a p {
	  font-size: 13.5px;
	}

	.vue-accordion ul li.show {
	  width: 60%;
	}
	
	.vue-accordion ul li.show a {
	  background: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
	  background: -o-linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)); 
	  background: -moz-linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
	  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)); 
	}
	.vue-accordion ul li.show a * {
	  opacity: 1;
	  -webkit-transform: translateX(0);
	  transform: translateX(0);
	}
</style>