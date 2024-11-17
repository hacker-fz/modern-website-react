import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = ({ classname, href, children, onClick, px, white }) => {

    const classes = `button relative inline-flex items-center justify-center h-11 transitions-colors hover:text-color-1
                    ${px || 'px-7'} ${classname || ''} ${white ? 'text-n-8' : 'text-n-1'}`

    const spanClasses = 'relative z-10'

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span>{children}</span>
            {ButtonSvg(white)}
        </button>
    )

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )

  return href ? renderLink() : renderButton()
}

export default Button