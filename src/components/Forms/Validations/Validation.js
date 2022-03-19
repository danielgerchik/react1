export const required = value => {

    return (
        value ? undefined : 'required field'
    )
}
export const symbolLenght = acceptableLength => {
    return value => {
        return (
            value.length > acceptableLength ? `acceptable length is ${acceptableLength}` : undefined
        )
    }
}