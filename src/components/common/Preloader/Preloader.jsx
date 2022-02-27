import preloaderIMG from '../../../img/preloader.gif'
import style from './Preloader.module.css'

const Preloader = props => {
    return <div className={style.preloader}>
        <img src={preloaderIMG}/>

    </div>

}

export default Preloader