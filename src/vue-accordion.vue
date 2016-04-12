<style>
	.accordion {
		width: 100%;
		overflow: hidden;
    }

    .accordion ul {
		width: 100%;
		display: table;
		table-layout: fixed;
		margin: 0;
		padding: 0;
    }
</style>
<template>
	<div :class="class" :style="styles">
		<ul>
			<partial-accordion v-for="item in items" :top="top" :item="item" :height="height"></partial-accordion>
		</ul>
	</div>
</template>
<script>
	var partialAccordion= require('./vue-accordion-partial.vue')

	module.exports = {
		props: {
			items: {
				type: Array
			},
			maxWidth: {
				type: Number,
				default: 0
			},
			height: {
				type: Number,
				default: 350
			},
			top: {
				type: Number,
				default: 160
			},
			class: {
				type: String,
				default: 'accordion'
			}
		},
		computed: {
			styles: function() {
				var styles = {
					height: this.height + 'px'
				};

				if(this.maxWidth !== 0)
					styles.maxWidth = this.maxWidth + 'px';

				return styles;
			}
		},
		components: {
			partialAccordion: partialAccordion
		}
	}
</script>