import Link from 'next/link'
import Image from 'next/image';
import LogoImg from '@/public/images/logo.png';

export default function Logo() {
  return (
    <Link href="/" className="block m-1" aria-label="Cruip">
      <Image src={LogoImg} alt="Cruip" height={30} />
    </Link>
  )
}
