import type { Metadata } from "next";
import Link from "next/link";

export interface User {
  id: string;
  name: string;
}

export const metadata: Metadata = {
  title: "Cabins",
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = (await res.json()) as User[];

  return (
    <div>
      <h1>The Wild Oasis. Welcome to paradise</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
