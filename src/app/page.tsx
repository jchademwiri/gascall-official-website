import { ModeToggle } from '@/context/ModeToggle';

export default function Home() {
  return (
    <main>
      <ModeToggle />
      <h1 className='text-6xl'>Home</h1>
    </main>
  );
}
