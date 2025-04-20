const app = Vue.createApp({
    data() {
        return {
            search: '',
            selectedMarket: '',
            apis: [
                { market: 'Market A', apiName: 'API 1', status: 'Online' },
                { market: 'Market B', apiName: 'API 2', status: 'Offline' },
                { market: 'Market C', apiName: 'API 3', status: 'Online' },
                { market: 'Market A', apiName: 'API 4', status: 'Online' },
                { market: 'Market B', apiName: 'API 5', status: 'Offline' }
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
