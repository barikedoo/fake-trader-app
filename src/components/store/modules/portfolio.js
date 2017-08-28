const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    buyStock: (state, { stockId, quantity, stockPrice }) => {
        const record = state.stocks.find(element => element.id == stockId)
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= stockPrice * quantity;
    },
    sellStocks: (state, { stockId, quantity, stockPrice }) => {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
};

const actions =  {
    sellStock: ({commit}, order) => {
        commit('sellStocks', order);
    }
};

const getters = {
    stockPortfolio: (state, getters) => {
        return state.stocks.map(stock =>{
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id:stockId,
                quantity: stock.quantity,
                name:record.quantity,
                price:record.price
            }
        })
    },
    funds: state => {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}