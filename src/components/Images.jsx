import {useContext, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "../app/slices/images.slice";
import ImageItem from "./ImageItem";
import {Context} from "../context/AppContext";
import {useParams} from "react-router-dom";
import Error from "./UI/Error";
import Loader from "./UI/Loader";
import Button from "./UI/Button";

const Images = () => {
    const {images, error} = useSelector(state => state.main.images)
    const dispatch = useDispatch()
    const {id} = useParams()
    const {page, setPage, limit} = useContext(Context)
    const divRef = useRef(null);

    useEffect(()=>{
        dispatch(getImages({limit, category: id, page}))
    }, [dispatch, limit, id, page])

    useEffect(() => {
        setTimeout(()=>{
            divRef.current.scrollIntoView({behavior: "smooth"});
        }, 500)
    }, [page])

    const loadMore = ()=>{
        setPage(prev=>prev + 1)
    }

    return (
        <div className={'ImagesWrapper'}>
            <h1>Cats</h1>
            <div className={'Images'}>
                {error ? <Error error={error}/> : null}
                {
                    images.length ? images.map((image, index)=>{
                        return <ImageItem src={image.url} key={image.id + index}/>
                    }) : <Loader/>
                }
                <div ref={divRef}></div>
            </div>
            {
                images.length ? <div className={'LoadMore'}>
                    <Button className={'LoadMoreButton'} onClick={loadMore}>
                        Load more
                    </Button>
                </div> : null
            }

        </div>
    );
};

export default Images;
