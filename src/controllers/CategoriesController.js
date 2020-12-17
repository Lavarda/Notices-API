const Yup = require('yup');
const moment = require('moment');
const { Sequelize, QueryTypes } = require("sequelize");

const NoticesModel = require('../models/Notices')

const CategoriesModel = require('../models/Categories')
const CategoriesView = require('../views/Categories')

const databaseConfig = require('../database/config/config')
const connection = new Sequelize(databaseConfig);

module.exports = {
    async create(req, res) {
        const { label } = req.body
        const { notice_id } = req.params

        const notice = await NoticesModel.findByPk(notice_id)

        if (!notice) {
            return res.status(400).json({
                status: 400,
                message: "Notice not found",
                value: {},
            })
        }

        const data = {
           label,
        }
        
        const schema = Yup.object().shape({
            label: Yup.string().required('Please fill field label'),
        })

        try { 
            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
            return res.status(422).json({
                status: 422,
                message: "Error to create category, fill all fields",
                errors: err.errors,
                value: {}
            })
        }

        const [ category ] = await CategoriesModel.findOrCreate({
            where: {
                label,
            }
        })


        if ( category ) {
            await connection.query(`INSERT INTO notice_categories (categories_id, notice_id ) VALUES (${category.id}, ${notice_id})`, { type: QueryTypes.INSERT });          

            return res.status(201).json({
                status: 201,
                message: "Successfully created category",
                value: CategoriesView.render(category),
            })
        } else {
            return res.status(400).json({
                status: 400,
                message: "Error to created category",
                value: {},
            })
        }
    },

    async list(req, res) {
        const categories = await CategoriesModel.findAll()

        if ( categories ) {
            return res.status(200).json({
                status: 200,
                message: "Categories searched sucessfully",
                value: CategoriesView.renderMany(categories),
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: "Categories not found",
                value: [],
            })
        }
    },

    async delete(req, res) {
        const { id } = req.params

        const category = await CategoriesModel.findByPk(id)

        if ( category ) {
            category.destroy({
                truncate: true,
            })

            return res.status(200).json({
                status: 200,
                message: "Categories deleted sucessfully",
                value: CategoriesView.render(category),
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: "Category not found",
                value: {},
            })
        }
    },
}