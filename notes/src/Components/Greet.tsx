
type GreetProps = {
    name: String,
    age?: number,
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    const {age  = 0 } = props 
    return (
        <div>
            {props.isLoggedIn ? <div>
                you are logged in 😁
            </div> : <>
                Hello  {props.name} and his age is {age}
            </>}
        </div>
    )
}

export default Greet