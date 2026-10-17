import { posts } from '@/data/data';
import Post from './Post';

export default function FeaturedPosts() {
  return (
    <section className="py-20 px-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-2.5 items-center">
          <h6 className="text-h6 text-primary-text-color">Practice Advice</h6>
          <h2 className="text-h2 text-text-color text-center">
            Featured <br /> Posts
          </h2>
          <p className="text-paragraph text-second-text-color text-center w-60 pb-20">
            Problems trying to resolve the conflict between the two major
          </p>
        </div>
        <div className="flex flex-col gap-7.5">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
