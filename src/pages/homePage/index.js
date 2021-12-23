import React,{ useEffect, useState } from 'react';
import { HomeTemplate } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../modules/redux/actions/productsActions';

const HomePage = () => {
    const { loading, productsList } = useSelector(state => state.productsReducer);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const totalPage = productsList.page.totalPage;

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + Math.ceil(window.pageYOffset) * 1.5) >= document.documentElement.offsetHeight) {
                if(!loading && page < totalPage){
                    setPage(page + 1)
                }
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [page, totalPage, loading]);

    useEffect(() => {
        dispatch(getProducts(page));
    }, [dispatch, page])

    return (
        <HomeTemplate />
    )
}

export default HomePage
