import Ripple from './ripple'
import styles from  '../styles/button.module.css'

export default function Button({ children, style, isRipple = true, onClick }: ButtonProps) {
  const handlerClick = (e:any) => {
    if (onClick) {
      onClick(e)
    }
  }

  const button = (
    <button className={styles.agogButton} style={style} onClick={handlerClick}>
      {children}
    </button>
  )

  if (isRipple) return <Ripple>{button}</Ripple>
  else return button
}

export interface ButtonProps {
  children: JSX.Element | string
  style?: React.CSSProperties
  isRipple?: boolean
  onClick?(e:any): void
}
