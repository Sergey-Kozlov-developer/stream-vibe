import './Button.scss'
import classNames from "classnames";


export default (props) => {
    // href вытаскиваем, тк компонент может быть либо кнопкой либо ссылкой
    // type чтобы не прописывать тип в кнопке
    const {className, type = 'button',href, target} = props
    const isLink = href !== undefined
    // Component будет определять кнопку или ссылку выводить
    const Component = isLink ? 'a' : 'button'
    const linkProps = {href, target}
    const buttonProps = {type}
    // если есть ссылка то передаем тег а с ссылкой, иначе выводим кнопку
    const specificProps = isLink ? linkProps : buttonProps

    return (
        <Component
            className={classNames(className, 'button')}
            {...specificProps}
        >

        </Component>
    )
}