import homeStyles from '@/styles/pages/home.module.scss';
import styles from '@/styles/components/home/mentorSection.module.scss';
import { useEffect, useRef } from 'react';
import Mentor from '@/components/home/Mentor';
import { MentorInfo } from '@/types/mentor.type';

export default function MentorSection(props: {
  mentor: MentorInfo,
  destination: string,
  school: string,
  reverse: boolean,
}) {
  const mentorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTrigger = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles[`start${props.reverse ? 'Reverse' : ''}`]);
        });
      },
      { threshold: 0.5 }
    );
    if (!mentorRef.current) return;
    scrollTrigger.observe(mentorRef.current);
  }, []);

  return (
    <section className={`${homeStyles.section} ${styles.mentor} ${props.reverse ? styles.reverse : ''}`}>
      <div className={homeStyles.midText}>
        <p>내가 가고 싶은</p>
        <p>{props.destination}를 간</p>
        <p className="purple bold">{props.school} 선배</p>
      </div>
      <Mentor
        {...props.mentor}
        ref={mentorRef}
      />
    </section>
  )
}
