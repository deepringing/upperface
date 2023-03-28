import styles from "@/styles/components/home/mentor.module.scss";
import Image from 'next/image';
import { MentorInfo } from '@/types/mentor.type';
import React from 'react';

const Mentor = React.forwardRef<HTMLDivElement, MentorInfo>((props, ref) => (
  <div className={styles.mentor} ref={ref}>
    <div className={styles.profile}>
      <Image
        src={props.image}
        alt={'mentor'}
        width={160}
        height={160}
      />
      <p className={styles.name}>{props.name}</p>
      <div className={styles.tags}>
        {
          props.tags?.map((t, index) => (
            <div className={styles.tag} key={index}>
              {t.image && <Image src={t.image} alt={"tag"} width={24} height={24}/>}
              <span>{t.tag}</span>
            </div>
          ))
        }
      </div>
    </div>
    <p className={styles.description}>{props.description}</p>
    <button className={styles.button}>
      상담 신청하기
    </button>
  </div>
))

Mentor.displayName = "Mentor";

export default Mentor;
