import styles from "@/styles/components/home/concern.module.scss";
import Image from 'next/image';

export default function Concern(props: {
  person: string,
  content: string,
  image: string,
  isRight: boolean,
}) {
  return (
    <div className={styles.concern}>
      <div className={`${styles.tape} ${props.isRight ? styles._right : styles._left}`}>{props.person}</div>
      <div className={`${styles.box} ${props.isRight ? styles._rightBox : styles._leftBox}`}>
        <Image
          src={props.image}
          alt={'avatar'}
          width={183}
          height={183}
        />
        <p className={`${styles.content} ${props.isRight ? styles._rightContent : styles._leftContent}`}>
          {props.content}
        </p>
      </div>
    </div>
  )
}
