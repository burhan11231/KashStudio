import { Hero } from '@/components/marketing/hero';
import { LiveDiscovery } from '@/components/marketing/live-discovery';

export default function HomePage() {
  return (
    <div className="container-shell">
      <Hero />
      <LiveDiscovery />
    </div>
  );
}
