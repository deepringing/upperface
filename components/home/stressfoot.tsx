import styles from "@/styles/pages/home.module.scss";
import Image from "next/image";

export default function Foot() {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <Image
                src="/images/right-foot.png"
                alt="발자국"
                className={styles.foot}
                style={{marginLeft:1200}}
                width={90}
                height={128}
                priority
            />
            <Image
                src="/images/right-foot.png"
                alt="발자국"
                className={styles.foot}
                style={{marginLeft:1230, marginTop:60}}
                width={90}
                height={128}
                priority
            />
            <Image
                src="/images/right-foot.png"
                alt="발자국"
                className={styles.foot}
                style={{marginLeft:1000, marginTop:30}}
                width={90}
                height={128}
                priority
            />
            <Image
                src="/images/right-foot.png"
                alt="발자국"
                className={styles.foot}
                style={{marginLeft:800, marginTop : 40}}
                width={90}
                height={128}
                priority
            />
            <Image
                src="/images/right-foot.png"
                alt="발자국"
                className={styles.foot}
                style={{marginLeft:850, marginTop : 50}}
                width={90}
                height={128}
                priority
            />
        </div>
    )
}
