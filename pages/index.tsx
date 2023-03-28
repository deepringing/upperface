import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/pages/home.module.scss'
import Concern from '@/components/home/Concern';
import Mentor from '@/components/home/Mentor';

export default function Home() {
  return (
    <>
      <Head>
        <title>윈물</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <section className={styles.section}>
          <Image
            src="/images/right-foot.png"
            alt="발자국"
            className={styles.foot}
            width={63}
            height={128}
            style={{objectPosition:"center"}}
            priority
          />
          <div className={`${styles.mainText} right ${styles.center}`}>
            <p><span className="purple bold">나의 길</span>을</p>
            <p>먼저 걸어본</p>
            <p>사람에게</p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={`${styles.mainText} left ${styles.bottom}`}>
            <p>편하게</p>
            <p>질문하세요</p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.concern}`}>
          <Concern
            person="가고싶은 대학을 입학한 선배를 찾는 A양"
            content="우리 학교에서 내가 원하는 대학을 간 선배님들이 있는데 연락할 방법이 없을까? 연락처가 없어서 연락할 방법이 없는데 😭"
            image="/images/person-huck.png"
            isRight={false}
          />
          <Concern
            person="소소하게 돈을 벌고 싶은 대학생"
            content="명문대를 합격했는데.. 어떻게 돈을 벌어야할까? 알바 말고 간단하게 돈 벌고 싶은데"
            image="/images/person-laptop.png"
            isRight={true}
          />
        </section>
        <section className={`${styles.section} ${styles.mentor}`}>
          <div className={styles.midText}>
            <p>내가 가고 싶은</p>
            <p>대학을 간</p>
            <p className="purple bold">고등학교 선배</p>
          </div>
          <Mentor
            image="/images/person-taerae.png"
            name="김태래"
            tag={}
            description="반갑습니다! ㅎㅎ 서울대학교 심리학과 20학번 김태래입니다. 입시 관련 상담이 필요하시다면 연락주세요!"
          />
        </section>
        <section className={`${styles.section} ${styles.mentor}`}>
          <div className={styles.midText}>
            <p>내가 가고 싶은</p>
            <p>회사를 간</p>
            <p className="purple bold">대학교 선배</p>
          </div>
          <Mentor
            image="/images/person-jaehyun.png"
            name="정재"
            tag={}
            description="안녕하세요. 배달의 민족 정산 플렛폼 개발 팀 정재현입니다. 취업 관련 혹은 이력서, 자소서 관련 상담이 필요하시다면 연락주세요. 기다리겠습니다!"
          />
        </section>
        <section className={`${styles.section} ${styles.centerSection}`}>
          <button style={styles.button}>
            상담 신청하기
          </button>
        </section>
        <section className={`${styles.section} ${styles.centerSection}`}>
          <p>선배와 나의</p>
          <p className="purple">연결고리</p>
          <p className="purple bold">윈물</p>
        </section>
      </main>
    </>
  )
}
