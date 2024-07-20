import { TypographyH2, TypographyH4 } from '@/components/shared/typography';

export default function HomePage() {
  return (
    <section className="container mt-6 flex flex-col items-center justify-center gap-4">
      <TypographyH2>Home Page</TypographyH2>
      <TypographyH4>Welcome</TypographyH4>
    </section>
  );
}
