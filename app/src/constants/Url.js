export const notices =  {
    /**
     * POST
     * Params title, website, authors, date, content, image_url
     * Pass the params to create a new notice
    */
    create: '/notices/create',
    /**
        * GET
        * List of notices
    */
    list: '/notices/list',
    /**
        * POST
        * Params ID
        * Pass the id of notice you want to search
    */
    findOne: `/notices/find`, 
    /**
         * DELETE
         * Params ID
         * Pass the id of notice you want to delete
    */
    delete: `/notices/delete`,
    
}

export const categories = {
    /**
     * POST
     * Params notice_id, label
     * Pass the params to create a new category
    */
    create: `/categories`,
    /**
        * GET
        * List of categories
    */
    list: `/categories/list`,
    /**
         * DELETE
         * Params ID
         * Pass the id of category you want to delete
    */
    delete: `/categories/delete`
}