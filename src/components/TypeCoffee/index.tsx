import React from 'react'
import { Type } from './Type'
export const TypeCoffee = () => {
  const typeCoffee = ["Американо", "Эспрессо", "Капучино", "Латте"]
  const [typeAction, setTypeAction] = React.useState(0)
  const [typeActiveBtn, setActiveBtn] = React.useState(0)
  const buttonType = typeCoffee.map((item: string, index: number) => <button onClick={() => typeClick(index)} className={`type-coffee__btn ${typeActiveBtn === index ? "active-Type__Btn" : ""}`} key={index}>{item}</button>)
  const typeClick = (id: number) => {
    setTypeAction(id)
    setActiveBtn(id)
  }
  return (
    <div className="container">
      <h3>Частые способы приготовления:</h3>
      <div className="type-coffee">
        {buttonType}
        <div className="cup">
          <Type typeAction={typeAction} />
        </div>
      </div>
    </div>
  )
}

