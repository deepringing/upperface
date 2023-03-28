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
      <div
        className={`${styles.speechBubble} ${styles[props.opacity]} ${styles[props.tail]} ${props.className ?? ''}`}
        style={{
          position: "absolute",
          left: props.position?.left ? props.position?.left + '%' : '',
          right: props.position?.right ? props.position?.right + '%' : '',
          bottom: props.position?.bottom ? props.position?.bottom + '%' : '',
          top: props.position?.top ? props.position?.top + '%' : '',
        }}
      >
        {props.text && props.text}
      </div>
    </>
  )
}
