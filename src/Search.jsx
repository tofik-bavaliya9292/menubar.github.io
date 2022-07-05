import React, { useState } from 'react'

export const Search = () => {

        let [data , setdata] = useState('')

    let update = (event) => {
            console.log(event.target.value);
            setdata(event.target.value);
    }
   

    return (
        <>

         <div className='srch'>
                <div> <input className='in' type='text' placeholder='you can srch images' onChange={update} /></div>
              <img src={`https://source.unsplash.com/1600x900/?${data}`} alt='not found' />

            </div>

        </>
    )
}
