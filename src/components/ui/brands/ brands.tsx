import Image from "next/image";
import brd1 from "../../../assets/svg/icons/brand1.svg";
import brd2 from "../../../assets/svg/icons/brand2.svg";
import brd3 from "../../../assets/svg/icons/brand3.svg";
import brd4 from "../../../assets/svg/icons/brand4.svg";
import brd5 from "../../../assets/svg/icons/brand5.svg";
import styles from "./brands.module.scss";

export const Brands = ()=>{
    return (
        <section className={styles['brands-wrap']}>
            <div className={styles['container']}>
                <div className={styles['brands']}>
                    <Image priority src={brd1} width={30} height={30} alt="brand" />
                    <Image priority src={brd2} width={30} height={30} alt="brand" />
                    <Image priority src={brd3} width={30} height={30} alt="brand" />
                    <Image priority src={brd4} width={30} height={30} alt="brand" />
                    <Image priority src={brd5} width={30} height={30} alt="brand" />
                </div>
            </div>
        </section>
    )
}