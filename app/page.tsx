import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='flex flex-col items-center justify-center h-screen'>
        <h1 className='mb-5 text-3xl font-bold'>Welcome To BoostFlow</h1>
        <Link href="/dashboard">
          <button className='bg-[#2883bf] text-white px-6 py-4 rounded cursor-pointer'>
            Go to Dashboard
          </button>
        </Link>

      </section>
    </>
  );
}
