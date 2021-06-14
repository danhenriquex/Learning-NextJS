import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 1200)
  }, [])

  return (
    <div className="not-found">
      <h1>Oooops....</h1>
      <h2>The page cannot be found.</h2>
      <p>Go back to the <Link href="/"><a>Home Pages</a></Link></p>
    </div>
  );
}

export default NotFound;