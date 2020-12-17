const Yup = require('yup');

const NoticesModel = require('../models/Notices')
const NoticesView = require('../views/Notices')

module.exports = {
    async create(req, res) {
        const { title, website, authors, date, content, image_url } = req.body 

        const data = {
            title,
            website,
            authors,
            date,
            content,
            image_url,
        }

        const schema = Yup.object().shape({
            title: Yup.string().required('Please fill field title'),
            website: Yup.string().required('Please fill field website'),
            authors: Yup.string().required('Please fill field authors'),
            date: Yup.string().required('Please fill field date'),
            content: Yup.string().required('Please fill field content'),
            image_url: Yup.string().required('Please fill field image_url'),
        })

        try { 
            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
            return res.status(422).json({
                status: 422,
                message: "Error to create notice, fill all fields",
                errors: err.errors,
                value: {}
            })
        }

        const notices = await NoticesModel.create(data)

        if ( notices ) {
            return res.status(201).json({
                status: 201,
                message: "Successfully created notice",
                value: NoticesView.render(notices),
            })
        } else {
            return res.status(400).json({
                status: 400,
                message: "Error to created notice",
                value: [],
            })
        }
    },

    async list(req, res) {
        const notices = await NoticesModel.findAll({
            include: { 
                association : 'notices_categories'
            }
        })
        
        if ( notices ) {
            return res.status(200).json({
                status: 200,
                message: "Notices searched successfully",
                value: NoticesView.renderMany(notices),
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: "Notices not found",
                value: {},
            })
        }
    },

    async findNotice(req, res) {
        const { id } = req.params
        
        const notice = await NoticesModel.findByPk(id, {
            include: { 
                association : 'notices_categories'
            } 
        })

        if ( notice ) {
            return res.status(200).json({
                status: 200,
                message: "Notice searched successfully",
                value: NoticesView.render(notice),
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: "Notice not found",
                value: {},
            })
        }
    },

    async delete(req, res) {
        const { id } = req.params

        const notice = await NoticesModel.findByPk(id, {
            include: { 
                association : 'notices_categories'
            } 
        })
 
        if ( notice ) {
            notice.destroy({
                truncate: true,
            })
            return res.status(200).json({
                status: 200,
                message: 'Notice deleted successfully',
                value: NoticesView.render(notice),
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: 'Notice not found',
                value: {},
            })
        }
    },
}