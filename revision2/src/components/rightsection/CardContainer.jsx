import React from 'react'
import Card from './Card'
const CardContainer = () => {
    const cardInfo=[
        {
            cardId:1,
            cardDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, harum?',
            cardButton:'Satisfied'
        },{
            cardId:2,
            cardDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, harum?',
            cardButton:'Understood'
        },{
            cardId:3,
            cardDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, harum?',
            cardButton:'Underbanked'
        }
    ]
  return (
    <div className='h-full w-full p-4 flex shrink-0 flex-nowrap items-center justify-center gap-9'>
        {cardInfo.map((card,idx)=>{
            return <Card key={idx} cardData={card}/>
        })}
    </div>
  ) 
}

export default CardContainer