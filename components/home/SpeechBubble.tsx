import styles from "@/styles/components/home/speechBouble.module.scss";

type position = {
  left?: number,
  right?: number,
  top?: number,
  bottom?: number
}

export default function SpeechBubble(props: {
  text?: string,
  opacity: 'half' | 'more',
  tail: 'left' | 'right',
  className?: string,
  position: position
}) {
  return (
    <>
      <div className={`${styles.speechBubble} ${styles[props.opacity]} ${styles[props.tail]} ${props.className ?? ''}`}>
        {props.text && props.text}
      </div>

      <style jsx>{`
        div {
          left: ${props.position?.left ? props.position?.left + '%' : 'auto'};
          right: ${props.position?.right ? props.position?.right + '%' : 'auto'};
          bottom: ${props.position?.bottom ? props.position?.bottom + '%' : 'auto'};
          top: ${props.position?.top ? props.position?.top + '%' : 'auto'};
        }
      `}</style>
    </>
  )
}
