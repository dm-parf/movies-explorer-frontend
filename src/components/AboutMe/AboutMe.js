import './AboutMe.css';
import avatar from '../../images/dev-photo-dmitriy.jpg';

function AboutMe(){
    return (
    <>
        <section className = "section">
            <h2 className="section__title">Студент</h2>
            <hr className="section__line"></hr>
            <div className="aboutme__zone">
                <div className="aboutme__description-zone">
                    <h3 className="aboutme__subtitle">Дмитрий</h3>
                    <p className="aboutme__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutme__description">Я живу в Москве, есть жена и двое детей. Кодить начал 4 года назад, в основном десктоп-приложения на C#. Курс по веб-разработке помог получить актуальные знания.</p>
                    <ul className="aboutme__links-zone">
                        <li className="list-item">
                            <a
                            href="https://t.me/dm_parf"
                            className="link aboutme__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Telegram
                            </a>
                        </li>
                        <li className="list-item aboutme__list-item">
                            <a
                            href="https://github.com/dm-parf"
                            className="link aboutme__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Github
                            </a>
                        </li>
                    </ul>
                </div>
                <img src = {avatar} alt="Аватар" className="aboutme__logo"/>
            </div>
        </section>
    </>
    );
}

export default AboutMe;