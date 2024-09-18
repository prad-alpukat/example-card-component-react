import React from 'react'

export default function Card({ title, description, classes, image }) {
    return (
        <div className='border p-3 bg-red-200'>
            <img src={image} alt="" />
            <h1>{title ? title : "kosong"}</h1>
            <p>{description}</p>

            <div className='grid grid-cols-3 gap-3'>
                {
                    classes && classes.map((item, index) => (
                        <button key={index} className='py-2 px-4 bg-blue-400 mb-3'>{item}</button>
                    ))
                }
            </div>
        </div>
    )
}
