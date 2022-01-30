import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { AddActivity } from "../../components/activities/AddActivity";
import { newActivity, getAllCountries } from "../../actions/Actions";



jest.mock("../../actions/Actions", () => ({
    newActivity: jest.fn(),
    getAllCountries: jest.fn()
}))


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    country : 
   { countries:
      [  {
            "id": "VEN",
            "name": "Venezuela",
            "flag": "https://flagcdn.com/ve.svg",
            "continent": "South America",
            "capital": "Caracas",
            "subregion": "South America",
            "area": 916445,
            "population": 28435943
          }
        ]
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={ store }>
        <MemoryRouter>
            <AddActivity /> 
        </MemoryRouter>
    </Provider>

)

describe('Test in <AddActivity/> component', () =>{

    beforeEach(()=> {
        store = mockStore(initState);
        jest.clearAllMocks();
    })

    test('should render the <AddActivity/> correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    });


    test('Should not dispatch newActivity action if the fields are empty', () => {

      
      wrapper.find('form').simulate('submit',{
          preventDefault(){}
      })
      expect (newActivity).not.toHaveBeenCalled()
        ;
    });

    
    
})