import React from 'react'
import Card from '../components/ui/Card'

export default function Home() {

    const data = [
        {
            image: "/vite.svg",
            title: "amalia",
            description: "member neuvesity",
            classes: [
                "kelas 1",
                "kelas 2",
                "kelas 3"
            ]
        },
        {
            image: "https://picsum.photos/200/200",
            title: "Neuvesity",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eveniet facilis eaque aliquid dolorum eius pariatur maxime magnam mollitia sed!"
        },
        {
            title: "hello world",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eveniet facilis eaque aliquid dolorum eius pariatur maxime magnam mollitia sed!",
            classes: [
                "kelas css",
                "kelas html",
                "kelas 3"
            ]
        },
        {
            title: "hello world",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eveniet facilis eaque aliquid dolorum eius pariatur maxime magnam mollitia sed!"
        },
        {
            title: "hello world",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eveniet facilis eaque aliquid dolorum eius pariatur maxime magnam mollitia sed!"
        },
    ]

    return (
        <div className='container mx-auto px-10 py-20 grid grid-cols-3 gap-5'>
            {/* {data.map((item, index) => (
                <Card key={index} image={item.image} title={item.title} description={item.description} classes={item.classes} />
            ))} */}
            {data.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    )
}
