import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'

export const IntranetApp = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
