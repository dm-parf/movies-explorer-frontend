import './Techs.css';

function Techs(){
    return (
    <>
        <section className = "section techs">
            <h2 className="section__title">Технологии</h2>
            <hr className="section__line section__line-techs"></hr>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__zone">
                <li className="list-item"><button className="techs__link" onClick={event =>  window.open('https://html.spec.whatwg.org/', '_blank' )}>HTML</button></li>
                <li className="list-item"><button className="techs__link" onClick={event =>  window.open('https://w3.org/Style/CSS', '_blank' )}>CSS</button></li>
                <li className="list-item"><button className="techs__link" onClick={event =>  window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', '_blank' )}>JS</button></li>
                <li className="list-item"><button className="techs__link" onClick={event =>  window.open('https://reactjs.org/', '_blank' )}>React</button></li>
                <li className="list-item"><button className="techs__link" onClick={event =>  window.open('https://git-scm.com/', '_blank' )}>Git</button></li>
                <li className="list-item"><button className="techs__link" onClick={event =>  window.open('https://expressjs.com/', '_blank' )}>Express.js</button></li>
                <li className="list-item"><button className="techs__link" onClick={event =>  window.open('https://www.mongodb.com/', '_blank' )}>mongoDB</button></li>
            </ul>
        </section>
    </>
    );
}

export default Techs;