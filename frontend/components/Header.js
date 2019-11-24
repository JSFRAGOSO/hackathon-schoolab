import Link from "next/link";

export default function Header() {
  return (
    <div className="py-2">
      <Link href="/">
        <a className="uppercase text-sm text-brand-600">Logo</a>
      </Link>
    </div>
  );
}
