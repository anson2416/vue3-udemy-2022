const app = Vue.createApp({
	data() {
		return {
			title: '网上商城购物车',
			currency: 'RMB',
			cardList:[
				{
					id:1,
					imgUrl:"images/apple.svg",
					title:'苹果',
					price: 6,
					quantity:1,
					check:false,
				},
				{
					id:2,
					imgUrl:"images/watermelon.svg",
					title:'西瓜',
					price: 2,
					quantity:2,
					check: true,
				},
				{
					id:3,
					imgUrl:"images/grape.svg",
					title:'葡萄',
					price: 8,
					quantity:3,
					check:false,
				},
			]
		};
	},
	methods: {
	},
	computed: {
		totalQuantity() {
			let total = 0;
			this.cardList.forEach(item => {
				if (item.check) {
					total += item.quantity;
				}
			});
			return total;
		},
		formatTotalQuantity(){
			return this.totalQuantity + '件';
		},
		totalPrice() {
			let total = 0;
			this.cardList.forEach(item => {
				if (item.check) {
					total += item.price * item.quantity;
				}
			});
			return total;
		},
		formatTotalPrice() {
			// return value.toFixed(2) + '元';
			const formattedValue = new Intl.NumberFormat('zh-CN', {
				style: 'currency',
				currency: this.currency,
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}).format(this.totalPrice);
			// return formattedValue.replace('元', ''); // 去掉“元”字
			console.log(formattedValue)
			return formattedValue
		},


	},
	watch:{
	},
	filters:{
	},
	methods: {
		formatItemPrice(item) {
			return (item.price * item.quantity).toLocaleString('zh-CN', { style: 'currency', currency: 'RMB', minimumFractionDigits: 2, maximumFractionDigits: 2 });
		}
	},
	directives: {
		focus: {
			// When the element is mounted to the DOM
			mounted(el) {
				el.focus();
			},
		},
	},

});

app.mount('#app');