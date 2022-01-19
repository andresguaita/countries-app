const { response } = require('express')
const { Activity, Country } = require('../db')
const { Op } = require('sequelize')
const { fillDatabase } = require('../helpers/getApiData')


const getCountries= async(req, res=response) =>{
    const num_country= await Country.count()
    if(!num_country){
        await fillDatabase()
    }
        const {name} = req.query

        try {

            if(name){
                const country = await Country.findAll({
                    where : {
                       name: {
                           [Op.iLike]: `${name}%`
                           }
                       }
                   })
                if(country.length===0){
                    return res.status(404).json({
                        ok:false,
                        msg: `There is not country with name ${name}`
                    })
                }
                return res.json({
                    ok:true,
                    country
                })
            }

            else{

                
                const countries = await Country.findAll({
                    include: [
                        {
                            model: Activity,
                            attributes:  ["name", "difficulty", "duration", "season"],
                            through: {
                                attributes: [],
                            }
                        }
                    ]
                })
                return res.json({
                    ok:true,
                    countries
                })
            }       
        
        }

        catch (error) {
            res.status(500).json({
                ok: false,
                msg: 'Error connecting to the database'
            })
        }

}
            


const getCountryById= async( req, res= response) => {

    const {id} = req.params
    try {
        
        const country = await Country.findByPk(id.toUpperCase(),{
            include: [
                {
                    model: Activity,
                    attributes:  ["name", "difficulty", "duration", "season"],
                    through: {
                        attributes: [],
                    }
                }
            ]
        })
        if(!country){
            
            return res.status(404).json({
                ok:false,
                msg: `There is not country with id ${id}`
            })
        }
        res.json({
            ok:true,
            country
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
        
    }
}




module.exports = {
    getCountries,
    getCountryById,
}