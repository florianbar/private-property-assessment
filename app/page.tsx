import FeaturedListing from "@/components/featured-listing";
import { MOCK_LISTING } from '@/data/mock-data';

export default function Home() {
  return (
    <FeaturedListing listing={MOCK_LISTING} />
  );
}
