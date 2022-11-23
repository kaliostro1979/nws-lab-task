import {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "../app/slices/images.slice";
import ImageItem from "./ImageItem";
import {Context} from "../context/AppContext";

const Images = () => {
    const {images, isLoading, error} = useSelector(state => state.main.images)
    const dispatch = useDispatch()

    const {category, page, limit, setPage} = useContext(Context)

    useEffect(()=>{
        dispatch(getImages({limit, category, page}))
    }, [dispatch, limit, category, page])

    const loadMore = ()=>{
        setPage(prev=>prev + 1)
    }

    return (
        <div className={'ImagesWrapper'}>
            <h1>Cats</h1>
            <div className={'Images'}>
                {error ? <p>{error}</p> : null}
                {
                    !isLoading ? images.map((image)=>{
                        return <ImageItem src={image.url} key={image.id + Math.random()}/>
                    }) : <h2>Loading...</h2>
                }
            </div>
            {
                images.length ? <div className={'LoadMore'}>
                    <button className={'LoadMoreButton'} onClick={loadMore}>Load more</button>
                </div> : null
            }

        </div>
    );
};

export default Images;