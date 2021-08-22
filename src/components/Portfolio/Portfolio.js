import './Portfolio.css';

function Portfolio(){
    return (
    <>
        <section className = "section portfolio">
            <h2 className="portfolio__subtitle">Портфолио</h2>
            <ul className="portfolio__links-zone">
                <li className="list-item portfolio__item">
                    <div className="portfolio__item-container">
                        <a
                        href="https://dm-parf.github.io/how-to-learn/index.html"
                        className="link portfolio__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Статичный сайт
                        </a>
                        <a
                        href="https://dm-parf.github.io/how-to-learn/index.html"
                        className="link portfolio__link portfolio__link_arrow"
                        target="_blank"
                        rel="noopener noreferrer"
                        >↗
                        </a>
                    </div>
                    <hr className="section__line"></hr>
                </li>
                <li className="list-item  portfolio__item">
                    <div className="portfolio__item-container">
                        <a
                        href="https://dm-parf.github.io/russian-travel/index.html"
                        className="link portfolio__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Адаптивный сайт
                        </a>
                        <a
                        href="https://dm-parf.github.io/russian-travel/index.html"
                        className="link portfolio__link portfolio__link_arrow"
                        target="_blank"
                        rel="noopener noreferrer"
                        >↗
                        </a>
                    </div>
                    <hr className="section__line"></hr> 
                </li>
                <li className="list-item  portfolio__item">
                    <div className="portfolio__item-container">
                        <a
                        href="https://grechka.students.nomoredomains.monster"
                        className="link portfolio__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Одностраничное приложение
                        </a>
                        <a
                        href="https://grechka.students.nomoredomains.monster"
                        className="link portfolio__link portfolio__link_arrow"
                        target="_blank"
                        rel="noopener noreferrer"
                        >↗
                        </a>
                    </div>  
                </li>
            </ul>
        </section>
    </>
    );
}

export default Portfolio;