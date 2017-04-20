<template>
	<div :class="accordionClass" :style="divStyles">
		<ul>
			<partial-accordion 
				v-for="(item,index) in items" 
				:item="item" 
				:key="index"
				:styles="styles"
			></partial-accordion>
		</ul>
	</div>
</template>
<script>
	import partialAccordion from './vue-accordion-partial.vue'

	export default {
		name: 'vue-accordion',
		props: {
			items: {
				type: Array
			},
			styles: {
				type: Object,
				default: function() {
					return {}
				}
			},
			accordionClass: {
				type: String,
				default: 'vue-accordion'
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
	}
</script>
<style>
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