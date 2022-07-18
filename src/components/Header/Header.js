import brandIcon from '../../images/brand-icon.png'
import pointDown from '../../images/point-down.svg'
import emptyCartImg from '../../images/empty-cart.svg'
import s from './Header.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <a className={s.link} href=''>
              women
            </a>
          </li>
          <li>
            <a href='' className={s.link}>
              men
            </a>
          </li>
          <li>
            <a href='' className={s.link}>
              kids
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <img src={brandIcon} alt='brandIcon' width={41} height={41} />
      </div>
      <div>
        <span>$</span>
        <img src={pointDown} alt=''></img>
        <button type='button' className={s.cartButton}>
          <img src={emptyCartImg} alt='' width={20} height={20} />
        </button>
      </div>
    </header>
  )
}
