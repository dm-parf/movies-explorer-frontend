import './AboutProject.css';

function AboutProject(){
    return (
        <section id = "aboutProject" className = "section">
            <h2 className="section__title">О проекте</h2>
            <hr className="section__line"></hr>
            <div className="about__zone">
                <div className="about__description-zone">
                    <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__description-zone">
                    <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__zone">
                <div className="about__week about__week_back">1 неделя<p className="about__caption">Back-end</p></div>
                
                <div className="about__week about__week_front">4 недели<p className="about__caption">Front-end</p></div>
                
            </div>
        </section>
    );
}

export default AboutProject;