import Image from "next/image"


export function LogoTitanium() {
  return (
    <Image
      loading="eager"
      alt="alfa"
      src={'/companies/titanium.png'}
      width={100}
      height={100}
    />

  )
}

export function LogoAlfa() {
  return (
    <Image alt="alfa" src={'/companies/alfa-v2.png'} width={100} height={100} />
  )
}

