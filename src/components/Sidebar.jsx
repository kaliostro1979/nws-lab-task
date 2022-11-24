import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../app/slices/category.slice";
import {Context} from "../context/AppContext";
import {reset} from "../app/slices/images.slice";
import {NavLink} from "react-router-dom";
import Loader from "./UI/Loader";
import Error from "./UI/Error";

const Sidebar = () => {
    const {categories} = useSelector(state => state.main.categories)
    const {isLoading} = useSelector(state => state.main.categories)
    const {error} = useSelector(state => state.main.categories)
    const {setPage} = useContext(Context)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleClick = ()=>{
        setPage(1)
        dispatch(reset())
    }

    return (
        <div className={'Sidebar'}>
            {error ? <Error error={error}/> : null}
            <ul className={'SidebarList'}>
                {
                    !isLoading ? categories.map(category => {
                    return (
                        <li key={category.id} className={'SidebarListItem'}>
                            <NavLink
                                className={'SidebarListItemLink'}
                                to={category.id.toString()}
                                onClick={handleClick}
                            >{category.name}</NavLink>
                        </li>
                    )
                }) : <Loader/>
                }
            </ul>
        </div>
    );
};

export default Sidebar;
