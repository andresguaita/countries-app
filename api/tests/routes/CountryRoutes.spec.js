/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);

const initialCountries = 

  [
    {
        "id": "VEN",
        "name": "Venezuela",
        "flag": "https://flagcdn.com/ve.svg",
        "continent": "South America",
        "capital": "Caracas",
        "subregion": "South America",
        "area": 916445,
        "population": 28435943,
        "activities": [
            {
                "name": "Salto Angel",
                "difficulty": "4",
                "duration": 8,
                "season": "Spring"
            },
            {
                "name": "Avila",
                "difficulty": "3",
                "duration": 2,
                "season": "Summer"
            },
            {
                "name": "Paseo por el bulevar",
                "difficulty": "1",
                "duration": 2,
                "season": "Summer"
            }
        ],
    },
    {
    "id": "ARG",
    "name": "Argentina",
    "flag": "https://flagcdn.com/ar.svg",
    "continent": "South America",
    "capital": "Buenos Aires",
    "subregion": "South America",
    "area": 916445,
    "population": 28435943,
    "activities": [
        {
            "name": "Plaza mayo",
            "difficulty": "4",
            "duration": 8,
            "season": "Spring"
        },
       
    ]}]

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create({id:"ORG" ,name: "example",flags:"example.svg",continent:"example", capital:"example"})));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });

  describe('GET /countries', () => {
    beforeEach(() => Country.sync({ force: true }));
    it('Should get all countries', async() =>{

      Country.create(initialCountries[0])
      Country.create(initialCountries[1])
      const response= await agent.get('/countries')
      expect(response.body.countries).to.have.lengthOf(initialCountries.length)
    }
    );
  });

  describe('GET /countries:id', () => {
    beforeEach(() => Country.sync({ force: true }));
    it('Should get country by ID', async() =>{

      Country.create(initialCountries[0])
      Country.create(initialCountries[1])
      await agent.get('/countries/VEN').expect(200)
      
    }
    );

    it('Should not get the country if the ID does not exist', async() =>{

      await agent.get('/countries/VEN').expect(404)
      
    }
    );
  });

  describe('GET /countries?name=', () => {
    beforeEach(() => Country.sync({ force: true }));
    it('Should get the country by name', async() =>{

      Country.create(initialCountries[0])
      Country.create(initialCountries[1])
      await agent.get('/countries/?name=Venezuela').expect(200)
    }
    );

    it('Should not get the country if name does not match', async() =>{
      await agent.get('/countries/?name=hola').expect(404)
    }
    );
  });



});



