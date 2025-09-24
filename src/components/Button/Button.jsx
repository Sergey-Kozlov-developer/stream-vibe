import './Button.scss'
import classNames from "classnames";
import Icon from "@/components/Icon";


export default (props) => {
    // href вытаскиваем, тк компонент может быть либо кнопкой либо ссылкой
    // type чтобы не прописывать тип в кнопке
    const {
        className,
        type = 'button',
        href,
        target,
        mode = '', // '' (default) | 'transparent' | 'black-10'
        label,
        isLabelHidden = false,
        iconName,
        iconPosition = 'before', // before | after
        hasFillIcon
    } = props
    const isLink = href !== undefined
    // Component будет определять кнопку или ссылку выводить
    const Component = isLink ? 'a' : 'button'
    const linkProps = {href, target}
    const buttonProps = {type}
    // если есть ссылка то передаем тег а с ссылкой, иначе выводим кнопку
    const specificProps = isLink ? linkProps : buttonProps
    const title = isLabelHidden ? label : undefined
    const iconComponent = iconName && (
        <Icon
            className="button__icon"
            name={iconName}
            hasFill={hasFillIcon}
        />
    )

    return (
        <Component
            className={classNames(className, 'button', {
                [`button--${mode}`]: mode,
            })}
            title={title}
            aria-label={title}
            {...specificProps}
        >
            {iconPosition === 'before' && iconComponent}
            { !isLabelHidden && (
                <span className='button__label'>{label}</span>
            )}
            {iconPosition === 'after' && iconComponent}
        </Component>
    )
}