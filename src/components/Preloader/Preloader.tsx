import { FC } from "react";
import { AiOutlineReload } from "react-icons/ai";
import styles from './Preloader.module.less'

export const Preloader: FC = () => {

  return (
    <AiOutlineReload size={30} className={styles.spinner}/>
  )
}