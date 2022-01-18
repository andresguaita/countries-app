const { response } = require('express')
const { Activity, Country } = require('../db')


const addActivity= async(req, res=response) =>{
    const {name, difficulty,duration,season,countries}=req.body

    try {
        if(name, difficulty,duration,season,countries){
            const activity = await Activity.create({ name, difficulty, duration, season})
            countries.map((country) => activity.addCountry(country))
            res.json({
                ok:true,
                activity})
        }

        else {
            res.status(400).json({
                ok: false,
                msg: 'Missing Data'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
    }
    Activity.count().then(c => {
        console.log("There are " + c + " activities!")
      })
}


module.exports = {
    addActivity
}