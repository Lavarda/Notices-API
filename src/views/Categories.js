module.exports = {
    render(categories) {
        return {
            id: categories.id,
            label: categories.label
        }
    },

    renderMany(categories) {
        return categories.map( categories => this.render(categories) )
    },
}