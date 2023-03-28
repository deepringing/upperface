import styles from "@/styles/components/home/mentor.module.scss";
import Image from 'next/image';

export default function Mentor(props: {
  image: string,
  name: string,
  tag: string[],
  description: string
}) {
  return (
    <div className={styles.mentor}>
      <Image
        src={props.image}
        alt={'mentor'}
        width={160}
        height={160}
      />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.description}>{props.description}</p>
      <button className={styles.button}>
        상담 신청하기
      </button>
    </div>
  )
}

