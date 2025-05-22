import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Image
        src="{invoice.image_url}"
        className="rounded-full"
        width={28}
        height={28}
        alt="s profile picture"
      />
    </>
  )
}
