<template>
	<div class="vue-accordion" :style="divStyles">
		<ul>
			<partial-accordion 
				v-for="(item,index) in items" 
				:item="item" 
				:key="index" 
				:index="index" 
				:showIndex.sync="showIndex" 
				:styles="styles"
				@popup="popup"
			></partial-accordion>
		</ul>
	</div>
</template>
<script>
	import partialAccordion from "./vue-accordion-partial.vue";

	export default {
	  name: "vue-accordion",
	  props: {
	    items: {
	      type: Array
	    },
	    styles: {
	      type: Object,
	      default: function() {
	        return {};
	      }
	    },
			defaultImage: {
				type: Number,
				default: 0
			}
		},
		data () {
			return {
				showIndex: (this.defaultImage) ? this.defaultImage - 1 : NaN,
			}
		},
		methods: {
			popup: function (val) {
				this.showIndex = val;
			}
		},
	  computed: {
	    divStyles() {
	      return this.styles && this.styles.div ? this.styles.div : {};
			}
	  },
	  components: {
	    partialAccordion
	  }
	};
</script>
<style scoped>
	.vue-accordion {
	  width: 100%;
	  overflow: hidden;
	  height: 200px;
	  max-width: 900px;
	}

	.vue-accordion ul {
	  width: 100%;
	  height: 100%;
	  display: table;
	  table-layout: fixed;
	  margin: 0;
	  padding: 0;
	}
</style>