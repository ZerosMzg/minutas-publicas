
import React from 'react'
import Select from 'react-select'


declare interface InputSelectProps {
    disabled?: boolean
    helptext?: string
    id?: string
    label?: string
    inputStyle?: string
    name?: string
    onChange?: (option: object) => void
    options?: Array<object>
    pholder?: string
    onblur?: () => void
    validationerror?: string
    validationsuccess?: string
    defaultoption?: string
    value?: string | object | Array<object>
    isMulti?: boolean
    isLoading?: boolean
    noOptionsMessage?: () => string
}




export const InputSelect: React.FC<InputSelectProps> = ({
	disabled = false,
	helptext,
	id = 'inut-select',
	label,
	inputStyle,
	name,
	onChange,
	options = [],
	pholder,
	onblur,
	validationerror,
	validationsuccess,
	defaultoption = '',
	value = false,
	isMulti = false,
	isLoading =false ,
	noOptionsMessage = () => 'No se encontraron elementos',
	...props
}) => {

	const setValue = (value:Array | object) => {	
		if (isMulti) {
			if (value) {
				return value.map((v:object) => {
					return { value: v.value, label: v.label }
				})
			}
		}

		console.log(value)
		return options.find((option) => option.value === value.value || option.value === value) || null
	}

	switch (inputStyle) {
	default:
		return (
			<div>
				{label ? <label htmlFor={id}>{label}</label> : ''}
				<Select
					{...props}
					isLoading={isLoading}
					loadingMessage={() => 'Cargando...'}
					isMulti={isMulti}
					defaultInputValue={defaultoption}
					options={options}
					value={setValue(value)}
					onChange={onChange}
					styles={{
						menuPortal: (base) => ({ ...base, zIndex: 9999 }),
						menu: base => ({ ...base, zIndex: 9999 }),
						control: (base) => ({
							...base,
							minHeight: '35px',
							maxHeight: '35px',
							border: validationerror ? '1px solid #f46a6a' : '',
							zIndex: 999
						})
					}}
					placeholder={isLoading ? 'Cargando...' : pholder}
					id={id}
					name={name}
					onBlur={onblur}
					isClearable
					noOptionsMessage={noOptionsMessage}
					defaultValue={defaultoption}
					isDisabled={disabled}

					
				/>
				{validationerror ? <div style={{ width: '100%', marginTop: '0.25rem', color: '#f46a6a', fontSize: '80%' }}><span>{validationerror}</span></div> : ''}
				{validationsuccess ? <small>{validationsuccess}</small> : ''}
				{helptext ? <small>{helptext}</small> : ''}
			</div>
		)
	}
}

