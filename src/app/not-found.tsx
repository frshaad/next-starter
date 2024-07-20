import Link from 'next/link';

export default function AdminNotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/admin">Return Home</Link>
    </div>
  );
}
