type TagInfo = {
  image?: string,
  tag: string
}

export type MentorInfo = {
  image: string,
  name: string,
  tags: TagInfo[],
  description: string
}
