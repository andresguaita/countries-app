import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const CountriesApp = () => {
    return (
        <Provider store={store}>
         <AppRouter/>
        </Provider>
        
    )
}
