import './Logo.scss'
import classNames from 'classnames'


export default (props) => {
    // тк компонент переиспользуемый, прокидываем значение через props
    const {
        className,
        loading = 'lazy'
    } = props
    const title = 'Home'
    return (<a className={classNames(className, 'logo')}
               href='/'
               title={title}
               aria-label={title}
    >
        <img
            className="logo__image"
            height={69} width={199}
            loading={loading}
            src="/Logo.svg"
            alt=""/>
    </a>)
}

