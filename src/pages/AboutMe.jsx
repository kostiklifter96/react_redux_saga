import React from "react";
import { Row } from "react-bootstrap";

export const AboutMe = () => {
    return (
        <Row className='d-flex justify-content-center my-2'>
            <img
                src='https://sun9-58.userapi.com/impf/c627828/v627828901/3bc5/hRgEv7MyR7g.jpg?size=397x538&quality=96&sign=57eb22741224254382676f5c217e00f1&type=album'
                alt='UserImage'
                style={{ width: "370px", height: "470px" }}
                className='rounded-circle'
            />

            <div>
                <h1>О себе:</h1>
                <ul>
                    <li>Меня зовут Костя Купрейчик! Мне 27 лет, живу в Минске.</li>
                    <li>
                        Являюсь мастером спорта по пауэрлифтингу и мастером спорта по рукопашному
                        бою.
                    </li>
                    <li>
                        <b>Изучаю фронтенд</b> с 1 марта 2021 года!Свой первый сайт сделал в далеком
                        и спокойном 2013 году, но в тот момент меня вела дорога спорта :)
                    </li>
                    <li>
                        Главные мои качества -{" "}
                        <b>
                            высокая работоспособность, критическое мышление, быстрота/широта мысли,
                            способность к творчеству.
                        </b>
                    </li>
                    <li>
                        <p>
                            Чтобы не быть многословным, предлагаю ознакомиться с моим
                            <a
                                style={{ textDecoration: "none" }}
                                href='https://github.com/kostiklifter96?tab=repositories'
                            >
                                <b> GitHub</b>
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </Row>
    );
};
