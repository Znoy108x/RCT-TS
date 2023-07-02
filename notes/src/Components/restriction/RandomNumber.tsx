type RandomNumberType = {
    value: number
}

type RandomNumberProps = {
    value: number,
    isPositive?: boolean,
    isNegative?: boolean,
    isZero?: boolean
}

const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && "Positive"} {isNegative && "Negative"} {isZero && "Zero"}
    </div>
    )
}

export default RandomNumber