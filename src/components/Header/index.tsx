import Link from "../../../node_modules/next/link";
import styles from './Header.module.scss'

export function Header(){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src="images/save_pet.svg" alt="Logo" />
                <nav>
                    <a href={'/adotar'} className={styles.active}> ADOTAR </a>
                    <Link href={'/doar'}> DOAR </Link>
                </nav>
            </div>
        </div>
    )
}