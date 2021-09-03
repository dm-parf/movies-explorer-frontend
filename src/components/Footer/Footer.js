import './Footer.css';

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <section className = "section footer">
            <h2 className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <hr className="section__line"></hr>
            <div className="footer__item-container">
                <p className="footer__year">&copy; {currentYear}</p>
                <ul className="footer__links-zone">
                    <li className="list-item footer__item">
                            <a
                            href="https://practicum.yandex.ru/"
                            className="link footer__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Яндекс.Практикум
                            </a>
                    </li>
                    <li className="list-item footer__item">
                            <a
                            href="https://github.com/yandex-praktikum"
                            className="link footer__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Github
                            </a>
                    </li>
                    <li className="list-item footer__item">
                            <a
                            href="https://www.facebook.com/pg/yandex.praktikum/posts/"
                            className="link footer__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Facebook
                            </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;