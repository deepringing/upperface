import Image from 'next/image'

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
      style={{
        position: "absolute",
        right: props.right,
        left: props.left,
        top: props.top,
        bottom: props.bottom,
      }}
      width={80}
      height={128}
      priority
    />
  )
}
