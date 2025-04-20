import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome To BoostFlow</h1>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
