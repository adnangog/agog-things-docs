import { InputHTMLAttributes } from 'react'
import '../styles/textbox.css'
export default function TextBox({
  value,
  label,
  onChange: OnChange,
  onFocus,
  infoText,
  pattern,
  style,
  visualType = 'materialOutline',
  ...props
}: TextBoxProps): JSX.Element {
  const handleChange = (event: any) => {
    const str = event.target.value
    const regexp = new RegExp('/^[0-9]*$/')
    if (pattern && regexp.test(str)) {
      return false
    }

    if (OnChange) OnChange(str)
    return true
  }

  const visualTypes = {
    materialOutline: 'material-outline',
    materialFilled: 'material-filled',
    materialStandard: 'material-standard',
  }

  return (
    <div className={`agog-textbox ${visualTypes[visualType]}`} style={style}>
      <label htmlFor='myTextBox'>{label}</label>
      <div className='form-element'>
        <input
          autoComplete='off'
          id='myTextBox'
          value={value}
          onFocus={onFocus}
          onChange={handleChange}
          className='agog-input'
          {...props}
        />
        <fieldset aria-hidden='true'>
          <legend>
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
      {infoText && <span className='info-text'>{infoText}</span>}
    </div>
  )
}

export interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?(value: any): void
  onFocus?(): void
  value?: string
  label?: string
  infoText?: string
  pattern?: string
  style?: React.CSSProperties
  visualType?: 'materialOutline' | 'materialFilled' | 'materialStandard',
}
