const app = Vue.createApp({
    data() {
        return {
            search: '',
            selectedMarket: '',
            apis: [
                { market: 'MYH', apiName: 'API 1', status: 'Online' },
                { market: 'SGH', apiName: 'API 2', status: 'Offline' },
                { market: 'IMO', apiName: 'API 3', status: 'Online' },
                { market: 'MYH', apiName: 'API 4', status: 'Online' },
                { market: 'IMN', apiName: 'API 5', status: 'Offline' },
                { market: 'SGH', apiName: 'API 22', status: 'Offline' },
            ]
        };
    },
    computed: {
        filteredApis() {
            return this.apis.filter(api => {
                const searchTerm = this.search.toLowerCase();
                const marketFilter = this.selectedMarket.toLowerCase();

                return (api.market.toLowerCase().includes(searchTerm) ||
                        api.apiName.toLowerCase().includes(searchTerm)) &&
                       (marketFilter === '' || api.market.toLowerCase() === marketFilter);
            });
        }
    }
});

app.mount('#app');
