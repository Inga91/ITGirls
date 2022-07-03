import './Hero.css';

function Hero(props) {
    return (
        <div className='superhero'>
            <h2>{props.name}</h2>
            <div><b className="q_title">Вселенная:</b> <span class="font">{props.universe}</span></div>
            <div><b className="q_title">Альтер эго:</b> {props.alterego}</div>
            <div><b className="q_title">Род деятельности:</b> {props.occupation}</div>
            <div><b className="q_title">Друзья:</b> {props.friends}</div>
            <div><b className="q_title">Суперсилы:</b> {props.superpowers}</div>
            <img className="superhero__pic" src={props.url} ></img>

        </div>
    );
}

export default Hero;