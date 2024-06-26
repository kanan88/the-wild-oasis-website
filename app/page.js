import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to the paradise</h1>

      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
};

export default HomePage;
