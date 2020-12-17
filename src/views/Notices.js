const CategoriesView = require('./Categories')

module.exports = {
    render(notices) {
        return {
            title: notices.title,
            website: notices.website,
            authors: notices.authors,
            date: notices.date,
            content: notices.content,
            tags: notices.notices_categories ? CategoriesView.renderMany(notices.notices_categories) : [],
            image_url: notices.image_url,
        }
    },

    renderMany(notices) {
        return notices.map( notices => this.render(notices) )
    },

}