import style from './FormField.module.css'

export const FormField = ({input, meta, ...props}) => {
    return (
        <div>
        <props.typeField className={meta.error && meta.touched && style.error} {...input} {...meta} {...props}/>
        </div>
    )
}