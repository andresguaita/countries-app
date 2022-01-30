import { types } from "../../../types/types";
import "@testing-library/jest-dom"


describe('Test in types', ()=>{
    test('Should match all types', () => {
      expect(types).toEqual({
      countriesGetAll: '[Country] Get All Countries',
      countriesGetById: '[Country] Get Country By Id',
      countriesNotFound: '[Country] Country Not Found',
      countriesGetByPag: '[Country] Get Paginate Countries',
      countriesGetByName: '[Country] Get Country By Name',
      countriesGetByAct: '[Country] Get Country By Activity',
      countriesGetByCont: '[Country] Get Country By Continent',
      countriesGetByPop: '[Country] Get Country By Population',
      countriesGetByLetter: '[Country] Get Country By Letter',
      activityGetAll: '[Activity] Get All Activities',
      activityNew: '[Activity] New Activity'});
    });
    
})