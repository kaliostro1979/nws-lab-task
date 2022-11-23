import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../app/slices/category.slice";
import {Context} from "../context/AppContext";
import {reset} from "../app/slices/images.slice";

const Sidebar = () => {
    const {categories} = useSelector(state => state.main.categories)
    const {isLoading} = useSelector(state => state.main.categories)
    const {error} = useSelector(state => state.main.categories)

    const {setCategory, setPage} = useContext(Context)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleClick = (id)=>{
        setCategory(id)
        setPage(1)
        dispatch(reset())
    }

    return (
        <div className={'Sidebar'}>
            {error ? <p>{error}</p> : null}
            <ul className={'SidebarList'}>
                {
                    !isLoading ? categories.map(category => {
                    return <li key={category.id} className={'SidebarListItem'} onClick={()=>handleClick(category.id)}>{category.name}</li>
                }) : <h2>Loading...</h2>
                }
            </ul>
        </div>
    );
};

export default Sidebar;