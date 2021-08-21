import './Promo.css';
import logo from '../../images/promo-logo.svg';

function Promo(){

    const onItemClick = (evt) => {
        evt.preventDefault(); 
        const goto = evt.target.hasAttribute("href") ? evt.target.getAttribute("href") : "body";
        const gotoBlock = document.querySelector(goto);
        const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top;
        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
        });
    }

    return (
    <>
        <section className = "promo">
            <div className="promo__zone">
                <h1 className="promo__title">Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button onClick={onItemClick} href="#aboutProject" className="promo__learn-more">Узнать больше</button>
            </div>
            <img src = {logo} alt="Логотип проекта" className="promo__logo"/>
        </section>
    </>
    );
}

export default Promo;