import homeStyles from '@/styles/pages/home.module.scss';
import styles from '@/styles/components/home/mentorSection.module.scss';

export default function MentorSection(props: {
  mentor: JSX.Element,
  destination: string,
  school: string,
  reverse: boolean,
}) {

  return (
    <section className={`${homeStyles.section} ${styles.mentor} ${props.reverse ? styles.reverse : ''}`}>
      <div className={homeStyles.midText}>
        <p>내가 가고 싶은</p>
        <p>{props.destination}를 간</p>
        <p className="purple bold">{props.school} 선배</p>
      </div>
      {props.mentor}
    </section>
  )
}
