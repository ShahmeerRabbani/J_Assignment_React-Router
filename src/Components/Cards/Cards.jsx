import React from 'react'
import styles from './Cards.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

const Cards = ({price, title, img, desc, id, rating, category}) => {


  const {rate, count} = rating;


    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/product/${id}`, {state: category})
    }

    const location = useLocation()
    const isHome = location.pathname === `/product/${id}`
    console.log(isHome)
  return (
    <div className={styles.cardbox}>
      <div className={styles.cardImg}>
        <img src={img} alt="api-img" />
        <div className={styles.cate}>{category}</div>
      </div>
      <div className={styles.cardContext}>
        <h4 title={title}>{title.slice(0, 40)}</h4>
        <span title={desc}>{desc.slice(0, 50)}...</span>
        <h3 style={{color: 'red'}}>${price}</h3>
        <StarRatings
        rating={rate}
        starDimension="20px"
        starSpacing="0px"
        starRatedColor='#FFC107'
        />
        <button style={{
          display: isHome ? 'none': '',
        }} onClick={handleNavigate}>Add</button>
      </div>
    </div>
  )
}

export default Cards
