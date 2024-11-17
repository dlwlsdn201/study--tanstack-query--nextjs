'use client';

import { useQuery } from '@tanstack/react-query';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default function ReactQueryExample() {
  const { data, error, isLoading } = useQuery<
    { id: string | number; title: string }[],
    Error
  >({
    queryKey: ['posts'],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.slice(0, 5).map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
