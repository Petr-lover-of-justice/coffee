import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardType } from '../../Type';
interface propsDate {
    date: CardType,
}
export const ItemCard: React.FC<propsDate> = (props) => {
    return (
        < >
            <Card style={{
                width: '18rem',
                marginTop: "20px",
            }}>
                <Card.Img variant="top" src={props.date.img} style={{
                    height: '186px',

                }} />
                <Card.Body>
                    <Card.Title>{props.date.title}</Card.Title>
                    <Card.Text>
                        {props.date.text}
                    </Card.Text>
                    <Button variant="primary">{props.date.button}</Button>
                </Card.Body>
            </Card>
        </>
    )
}
