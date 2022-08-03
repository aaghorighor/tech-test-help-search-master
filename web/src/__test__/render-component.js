import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

const renderComponent = (store, children) => {
    return (
        render(<Provider store={store}>
            {children}
        </Provider>)
    )
}

export default renderComponent