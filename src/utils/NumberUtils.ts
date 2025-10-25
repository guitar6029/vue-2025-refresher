export const isANumber = (value: string | number) => {
    return !isNaN(Number(value))
}