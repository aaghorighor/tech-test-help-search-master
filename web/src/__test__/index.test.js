import React from 'react';
import configureStore from 'redux-mock-store';
import renderComponent from './render-component';
import SearchBox from '../components/search-box';
import { fireEvent } from '@testing-library/react';

const mockStore = configureStore([]);

describe('Run Test on the Search Box Component', () => {
    let store;
    const onSearchBlur = jest.fn();
    const onSubmit = jest.fn();
    const onFocus = jest.fn();

    const state = {
        helpResults: [],
        success: false,
        error: false
    }

    beforeEach(() => {
        store = mockStore({
            state: state,
        });
    })

    it('should render search box input field', () => {

        const { getByRole } = renderComponent(store, <SearchBox onFocus={onFocus} onSearchBlur={onSearchBlur} onSubmit={onSubmit} />);
        const field = getByRole("textbox")

        expect(field).toBeInTheDocument()
        expect(field).not.toBeNull()
        expect(field.tagName).toEqual("INPUT")
        expect(field.type).toEqual("text")
        expect(field.value).toEqual("")
    });

    it('calls the onSearchBlur callback handler', () => {

        const { getByRole } = renderComponent(store, <SearchBox onFocus={onFocus} onSearchBlur={onSearchBlur} onSubmit={onSubmit} />);
        fireEvent.blur(getByRole('textbox'), {
            target: { value: 'Bill' },
        });

        expect(onSearchBlur).toHaveBeenCalledTimes(1);
    });

    it('calls the onSubmit callback handler', () => {

        const { getByTestId } = renderComponent(store, <SearchBox onFocus={onFocus} onSearchBlur={onSearchBlur} onSubmit={onSubmit} />);
        fireEvent.click(getByTestId('fa-search'));

        expect(onSubmit).toHaveBeenCalledTimes(1);
    });


})