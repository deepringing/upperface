import Head from 'next/head'
import Foot from '@/components/home/stressfoot';
import styles from '@/styles/pages/home.module.scss'
import Concern from '@/components/home/Concern';
import SpeechBubble from '@/components/home/SpeechBubble';
import MentorSection from '@/components/home/MentorSection';
import RightFoot from '@/components/home/RightFoot';

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

          <div className={`${styles.mainText} right ${styles.center}`}>
            <RightFoot
                right={400}
                top={30}
            />
            <p><span className="purple bold">나의 길</span>을</p>
            <p>먼저 걸어본</p>
            <p>사람에게</p>
            <Foot/>
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
        <MentorSection
          mentor={{
            image: "/images/person-taerae.png",
            name: "김태래",
            tags: [{ image: "/images/school-seoul.png", tag: "서울대" }, { tag: "심리학과" }, { tag: "자소서" }],
            description: "반갑습니다! ㅎㅎ 서울대학교 심리학과 20학번 김태래입니다. 입시 관련 상담이 필요하시다면 연락주세요!"
          }}
          destination={"대학교"}
          school={"고등학교"}
          reverse={false}
        />
        <MentorSection
          mentor={{
            image: "/images/person-jaehyun.png",
            name: "정재현",
            tags: [{ image: "/images/company-baemin.png", tag: "배달의 민족" }, { tag: "이력서" }, { tag: "취업 상담" }],
            description: "안녕하세요. 배달의 민족 정산 플렛폼 개발 팀 정재현입니다. 취업 관련 혹은 이력서, 자소서 관련 상담이 필요하시다면 연락주세요. 기다리겠습니다!"
          }}
          destination={"회사"}
          school={"대학교"}
          reverse={true}
        />
        <section className={`${styles.section} ${styles.centerSection}`}>
          <button className={styles.button}>
            상담 신청하기
          </button>
        </section>
        <section className={`${styles.section} ${styles.centerSection}`}>
          <div className={`${styles.mainText} center`}>
            <p>선배와 나의</p>
            <p className="purple">연결고리</p>
            <p className={`purple bold ${styles.big}`}>윈물</p>
          </div>
        </section>
        <section className={styles.section}>
          <SpeechBubble text={"연락주셨군요..! 반가워요 😁"} opacity={"more"} tail={"left"} position={{ top: 17, left: 4 }}/>
          <SpeechBubble opacity={"more"} tail={"left"} position={{ top: 5, left: 32 }}/>
          <SpeechBubble opacity={"more"} tail={"right"} position={{ top: 12, right: 10 }}/>
          <SpeechBubble text={"진짜 감사합니다 ㅠㅠ"} opacity={"more"} tail={"left"} position={{ top: 42, left: 3 }}/>
          <SpeechBubble opacity={"more"} tail={"left"} position={{ top: 43, left: 34 }}/>
          <SpeechBubble text={"수고하셨어요 꼭 합격하세요! 후배님!"} opacity={"more"} tail={"right"}
                        position={{ top: 32, right: 2 }}/>
          <SpeechBubble text={"감사합니다"} opacity={"more"} tail={"left"} position={{ bottom: 16, left: 26 }}/>
          <SpeechBubble text={"미래를 응원합니다~"} opacity={"more"} tail={"right"} position={{ bottom: 19, right: 3 }}/>
          <SpeechBubble text={"만나서 반갑습니다. 바로 진행할까요?"} opacity={"half"} tail={"right"}
                        position={{ top: 9, right: 13 }}/>
          <SpeechBubble text={"안녕하세요 선배님 저는 정윤오입니다"} opacity={"half"} tail={"left"} position={{ top: 29, left: 36 }}/>
          <SpeechBubble text={"저도 선배님처럼 고려대 가고 싶은데..."} opacity={"half"} tail={"left"}
                        position={{ bottom: 31, left: 11 }}/>
          <SpeechBubble text={"감사합니다 선배님! 덕분에 많은 도움을 얻었어요"} opacity={"half"} tail={"left"}
                        position={{ bottom: 9, left: 5 }}/>
          <SpeechBubble text={"즐거운 시간이었습니다! 응원하겠습니다!!"} opacity={"half"} tail={"right"}
                        position={{ top: 42, right: 9 }}/>
          <SpeechBubble text={"저랑 완전 같은 상황이네요! 잘 연락주셨어요"} opacity={"half"} tail={"right"}
                        position={{ bottom: 29, right: 32 }}/>
          <SpeechBubble text={"고민 되는 부분이 있다면 언제든지 다시 연락해요!"} opacity={"half"} tail={"right"}
                        position={{ bottom: 8, right: 25 }}/>
        </section>
      </main>
    </>
  )
}
