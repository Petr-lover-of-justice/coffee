import React from 'react'
type propTypes = {
    typeAction: number
}
export const Type: React.FC<propTypes> = (typeAction) => {
    let state = () => {
        if (typeAction.typeAction === 0) {
            return (
                <div className='americano'>
                    <div className="coffee"><span className="cup-text">Кофе</span></div>
                    <div className="water"><span className="cup-text">Вода</span></div>
                </div>
            )
        }
        if (typeAction.typeAction === 1) {
            return (
                <div className="espresso">
                    <div className="nothing"></div>
                    <div className="coffee"><span className="cup-text">Кофе</span></div>
                </div>
            )
        }
        if (typeAction.typeAction === 2) {
            return (
                <div className="capuccino">
                    <div className="capuccino__foam"><span className="cup-text">Взбитое молоко</span></div>
                    <div className="capuccino__steamed"><span className="cup-text">Пропаренное молоко</span></div>
                    <div className="coffee"><span className="cup-text">Кофе</span></div>
                </div>
            )
        }
        if (typeAction.typeAction === 3) {
            return (
                <div className="latte">
                    <div className="latte__foam"><span className="cup-text">Взбитое молоко</span></div>
                    <div className="latte__steamed"><span className="cup-text">Пропаренное молоко</span></div>
                    <div className="coffee"><span className="cup-text">Кофе</span></div>
                </div>
            )
        }

    }
    return (
        <div className="">
            {state()}
        </div>
    )
}
