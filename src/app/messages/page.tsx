import PageHeader from "../../components/PageHeader";
import MessagesGrid from "../../components/MessagesGrid";
import { supabase } from "../../lib/supabase";

export const dynamic = 'force-dynamic';

export default async function Messages() {
  // Fetch sermons that have a video_id, ordered by most recent
  const { data: sermonsData } = await supabase
    .from('sermons')
    .select('id, title, video_id')
    .not('video_id', 'is', null)
    .order('date', { ascending: false });

  const videos = sermonsData || [];

  return (
    <div className="bg-[#FAF9F6] selection:bg-accent-500 selection:text-white min-h-screen pb-24">
      <PageHeader 
        title="Messages" 
        breadcrumbs={[{ label: "Messages", href: "/messages" }]} 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <MessagesGrid videos={videos} />
      </div>
    </div>
  );
}
