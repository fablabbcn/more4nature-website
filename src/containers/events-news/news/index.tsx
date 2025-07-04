import NewsList from '@/containers/events-news/news/list';
import Wrapper from '@/components/ui/wrapper';
import type { News as NewsType } from '@/data/news';

type NewsProps = {
  news: NewsType[];
};

export default function News({ news }: NewsProps) {
  return (
    <div className="bg-grey-800">
      <Wrapper className="space-y-8 lg:space-y-16">
        <h4 className="text-xl text-white lg:text-3xl">News</h4>
        <NewsList news={news} />
      </Wrapper>
    </div>
  );
}
