import React from 'react'
import { Name } from './types/Person.types'

type PersonListArray = {
    data: Name[]
}

const PersonList = (props: PersonListArray) => {
    return (
        <div>
            {
                props.data.map((per, index) => (
                    <div key={index}>
                        {per.first} ❤️ {per.last}
                    </div>
                ))
            }
        </div>
    )
}

export default PersonList