<style>
	.accordion ul li {
		display: table-cell;
		vertical-align: bottom;
		position: relative;
		width: 50%;
		background-repeat: no-repeat;
		background-position: center center;
		transition: all 500ms ease;
    }

    .accordion ul li div {
		display: block;
		overflow: hidden;
		width: 100%;
    }

    .accordion ul li div a {
		display: block;
		width: 100%;
		position: relative;
		z-index: 3;
		vertical-align: bottom;
		padding: 15px 20px;
		box-sizing: border-box;
		color: #fff;
		text-decoration: none;
		transition: all 200ms ease;
    }

    .accordion ul li div a * {
		opacity: 0;
		margin: 0;
		width: 100%;
		text-overflow: ellipsis;
		position: relative;
		z-index: 5;
		white-space: nowrap;
		overflow: hidden;
		-webkit-transform: translateX(-20px);
		transform: translateX(-20px);
		-webkit-transition: all 400ms ease;
		transition: all 400ms ease;
    }

    .accordion ul li div a h2 {
		text-overflow: clip;
		font-size: 24px;
		text-transform: uppercase;
		margin-bottom: 2px;
		top: 160px;
    }

    .accordion ul li div a p {
		top: 160px;
		font-size: 13.5px;
    }

    .accordion ul:hover li { width: 15%; }

    .accordion ul:hover li:hover { width: 60%; }

    .accordion ul:hover li:hover a { background: rgba(0, 0, 0, 0.4); }

    .accordion ul:hover li:hover a * {
		opacity: 1;
		-webkit-transform: translateX(0);
		transform: translateX(0);
    }
</style>
<template>
	<li :style="liStyles">
		<div> 
			<a href="{{ item.url }}" :style="linkStyles">
				<h2 :style="moveTop">{{ item.title }}</h2>
				<p :style="moveTop">{{ item.text }}</p>
			</a>
		</div>
    </li>
</template>
<script>
	module.exports = {
		props: {
			item: {
				type: Object
			},
			height: {
				type: Number
			},
			top: {
				type: Number
			}
		},
		computed: {
			computedHeight: function() {
				return this.height + 'px';
			},
			linkStyles: function() {
				return {
					height: this.computedHeight
				}
			},
			liStyles: function() {
				return {
					backgroundImage: 'url(' + this.item.image + ')',
					height: this.computedHeight
				}
			},
			moveTop: function() {
				return {
					top: this.top + 'px'
				}
			}
		}
	}
</script>