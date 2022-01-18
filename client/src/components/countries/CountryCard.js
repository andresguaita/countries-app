import { Link } from 'react-router-dom'

export const CountryCard = ({
    id,
   name,
   flag,
   continent
  

}) => {


    return (
        <div className='country__card mt-5' >
            
                <img src={ flag } className="country__flag-img mt-1 " alt='flag' />
            <div className='country__data'>
            <h3 className="card-title">{name}</h3>
                <p className="card-text">{continent}</p>    
                    <Link to={`/${id}`}>
                    Más...
                    </Link>

            </div>
                

        </div>


           
    )
}