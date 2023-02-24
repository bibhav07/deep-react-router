import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {

    const {id}  = useParams();

    const career = useLoaderData();


  return (
    <div  className='career-details'>

            <h2> Career Details for : {career.title}  </h2>    
            <p>Starting salary : {career.salary}</p>    
            <p>Location: {career.location}</p> 
            <div className='details'>
                <p>
                    Ex aliqua est id minim eu sunt voluptate amet qui sunt aliqua. Adipisicing excepteur Lorem voluptate exercitation non elit adipisicing aliqua ut ad consectetur. Incididunt et consequat sint deserunt eu aliqua anim et. Ullamco velit voluptate aliqua est ullamco ipsum nisi quis id deserunt adipisicing fugiat aute enim. Nulla pariatur eu proident veniam fugiat mollit consectetur consequat. Cillum sint minim veniam ad veniam adipisicing.
                </p>

            </div>

    </div>
  )

}

export default CareerDetails


export const careerDetailsLoader = async ({ params })  => {

    const {id}  = params;

    const res = await  fetch(`http://localhost:4000/careers/${id}`);

    if (!res.ok){
        throw Error('Could not find that career');
    }

    return res.json();
    

};


