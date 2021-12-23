import React, { useState, useEffect } from 'react';
import { Button, Heading, Input } from '../..';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword } from '../../../modules/redux/actions/productsActions';
import { getProducts } from '../../../modules/redux/actions/productsActions';

import "./style.scss"

const SearchBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const { keyword } = useSelector(state => state.productsReducer);

    useEffect(() => {
        setInput(keyword)
    }, [keyword])

    const searchAction = (e) => {
        e.preventDefault();
        dispatch(setKeyword(input));
        dispatch(getProducts(input, 1));  
        history.push(`?keyword=${input}`)
    }

    return (
        <div className="searchbar-container">
            <form style={{maxWidth:'100%'}} onSubmit={searchAction}>
                <Heading tag="h3" visualLevel="3" className="color-black bold text-center">
                    Find your product items. 
                </Heading>
                <div style={{marginBottom:10}} className="searchInputWrapper">
                        <Input 
                            className="searchInput" 
                            type="text" 
                            placeholder="Type your keyword..."
                            value={input}
                            onChange={(e)=>setInput(e.target.value)}
                        />
                        <Button title="Search" className="button" type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
