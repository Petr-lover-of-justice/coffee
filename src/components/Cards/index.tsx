import React from 'react';
import { ItemCard } from './itemCard';
import s from "./Card.module.scss";
import { CardType } from '../Type';

export const Cards = () => {
    const date = [
        {
            id: 1,
            img: "https://about-tea.ru/wp-content/uploads/f/6/c/f6ca07f4913511047839d34f946c53a0.jpeg",
            title: "Арабика",
            text: "Мягкость и выраженная кислинкаб, обладает интенсивным вкусом.",
            button: "Читать Подробнее"
        },
        {
            id: 2,
            img: "https://enjoyjava.com/wp-content/uploads/2018/02/Robusta-coffee-beans-roatsted-close-up.jpg",
            title: "Робуста",
            text: "Более горькая, вяжущая и содержит больше кофеина. Дешевле всего",
            button: "Читать Подробнее"
        },
        {
            id: 3,
            img: "https://about-tea.ru/wp-content/uploads/1/c/3/1c36a1708ca3a380c23e1f5617e1c186.jpeg",
            title: "Либерика",
            text: "Вид имеет весьма сильный аромат, но достаточно слабый вкус.",
            button: "Читать Подробнее"
        },
    ]
    const dateMap = date.map((item: CardType) => (<ItemCard key={item.id} date={item} />))
    return (
        <div className={s.root}>

            <div className="container">
                <h2 className={s.title}>Хороший кофе это просто</h2>
                <h3>Типы помолов</h3>
                <div className={s.coffee__cards}>
                    {dateMap}
                </div>
            </div>
        </div>
    )
}
