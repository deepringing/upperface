import Image from 'next/image'
import styles from '@/styles/pages/home.module.scss';

export default function RightFoot(props: {
  right?: number,
  left?: number,
  top?: number,
  bottom?: number,
}) {
  return (
    <Image
      src="/images/right-foot.png"
      alt="발자국"
      className={styles.RightFoot}
      style={{
        position: "absolute",
        right: props.right,
        left: props.left,
        top: props.top,
        bottom: props.bottom,
      }}
      width={100}
      height={130}
      priority
    />
  )
}
