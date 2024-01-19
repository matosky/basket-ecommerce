import { Banner } from "./banner"
import styles from "./header.module.scss"

export const Header = ()=>{
    return (
        <header className={styles['header-wrap']}>
            <Banner />
            <div className={styles['menu']}>
                <div className={styles['left']}>
                    <div className={styles['logo']}>
                        Bandage
                    </div>
                     <ul className={styles['links']}>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Pages</li>
                     </ul>
                </div>
                <div className={styles['right']}>
                    <span>Follow Us  :</span>
                    <div className={styles['socials']}>
                        <span className={styles['icon']}>icon</span>
                        <span className={styles['icon']}>icon</span>
                        <span className={styles['icon']}>icon</span>
                        <span className={styles['icon']}>icon</span>
                    </div>
                </div>
            </div>
        </header>
    )
}