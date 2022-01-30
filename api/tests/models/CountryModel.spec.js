const { Country, conn, Activities } = require('../../src/db.js');
const session = require('supertest-session');
const app = require('../../src/app.js');

const { expect } = require('chai');

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
    
    {"id": "ARG",
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

describe('Country model', () => {
    before(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));
    describe('Validators', () => {
      beforeEach(() => Country.sync({ force: true }));
      describe('name', () => {
        it('should throw an error if name is null', (done) => {
          Country.create({})
            .then(() => done(new Error('It requires a valid name')))
            .catch(() => done());
        });
        it('should work when its a valid name', () => {
          Country.create({ name: 'Venezuela' });
        });
      })});
    
      describe('Adding data to the model', () => {
        beforeEach(() => Country.sync({ force: true }));
        it("Should there be 2 countries", async() => {
          
           Country.create(initialCountries[0])
           Country.create(initialCountries[1])
          const response= await agent.get('/countries')
          expect(response.body.countries).to.have.lengthOf(initialCountries.length)
            
        });

        it("The first country should be Venezuela", async() => {
          
          Country.create(initialCountries[0])
          Country.create(initialCountries[1])
         const response= await agent.get('/countries')
         
         expect(response.body.countries[0].name).to.equal('Venezuela')
           
       });
             
      });

      describe('Model properties', () => {
        
        it("Should not add country if it does not have the required property 'name'.", async() => {
          Country.create(initialCountries[0])
           Country.create(initialCountries[1])
          Country.create({id:"ORG" ,flags:"example.svg",continent:"example", capital:"example"})
          const response= await agent.get('/countries')
          expect(response.body.countries).to.have.lengthOf(initialCountries.length)
            
        });

        it("Should not add the country if the ID is a number", async() => {
          Country.create(initialCountries[0])
           Country.create(initialCountries[1])
          Country.create({id:123 ,name: 'example',flags:"example.svg",continent:"example", capital:"example"})
          const response= await agent.get('/countries')
          expect(response.body.countries).to.have.lengthOf(initialCountries.length)
            
        });

        it("Should not add the country if ID has more than 3 characters", async() => {
          Country.create(initialCountries[0])
           Country.create(initialCountries[1])
          Country.create({id: 'ORGY' ,name: 'example' ,flags:"example.svg",continent:"example", capital:"example"})
          const response= await agent.get('/countries')
          expect(response.body.countries).to.have.lengthOf(initialCountries.length)
            
        });

        it("Should not add the country if the name is a number", async() => {
          Country.create(initialCountries[0])
           Country.create(initialCountries[1])
          Country.create({id: 'ORG' ,name:123 ,flags:"example.svg",continent:"example", capital:"example"})
          const response= await agent.get('/countries')
          expect(response.body.countries).to.have.lengthOf(initialCountries.length)
            
        });
             
      });

    })






