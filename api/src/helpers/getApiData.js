const axios = require('axios');
const {Country} = require('../db.js')

const fillDatabase = async() => {


  try {


    const response= await axios.get('https://restcountries.com/v3/all')
      const country= response.data.map(res => {
        return{
        id: res.cca3,
        name: res.name.common,
        flag: res.flags[0],
        continent:res.continents[0],
        capital: res.capital? res.capital[0] : 'Capital not found',
        subregion: res.subregion? res.subregion : 'Subregion not found',
        area: res.area,
        population: res.population,
        }
      } );
    
        await Country.bulkCreate(country)
    
    
    }

    catch (error) {
        console.log(error)
    }
    
  } 

  module.exports = {
      fillDatabase
  }
  