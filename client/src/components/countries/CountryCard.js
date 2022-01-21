import { Link } from 'react-router-dom'

import './CountryCard.css'

export const CountryCard = ({
    id,
    name,
    flag,
    continent


}) => {


    return (
        <section className='card' >
            <div className='card__item'>
                <img src={flag} className="country__flag " alt='flag' />               
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{continent}</p>
                    <Link to={`/${id}`}>
                        Más...
                    </Link>
            </div>


        </section>



    )
}