import Image from 'next/image'
import styles from '@/styles/pages/home.module.scss';

export default function LeftFoot(props: {
    right?: number,
    left?: number,
    top?: number,
    bottom?: number,
}) {
    return (
        <Image
            src="/images/left-foot.png"
            alt="발자국"
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
