import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const featuredPost = {
  id: 1,
  image:
    "/home/Resources1.png",
  title: "What Is an Honorary Doctorate? Everything You Need to Know in 2026",
  excerpt:
    "An honorary doctorate is one of the most prestigious recognitions a person can receive. But what exactly is it, who qualifies, and how is it different from a regular PhD? This complete guide answers every question.",
  tag: "Guide",
  readTime: "8 min read",
};

const sidePosts = [
  {
    id: 2,
    image:
      "/home/Resources2.png",
    title: "Honorary Doctorate vs PhD: 7 Key Differences You Should Know",
    excerpt:
      `Both use the "Dr." title. Both come from universities. But the similarities largely end there. Here's a clear, honest breakdown of how an honorary doctorate differs from a traditional PhD — and which is right for you.`,
    tag: "Comparison",
    readTime: "5 min read",
  },
  {
    id: 3,
    image:
      "/home/Resources3.png",
    title: 'How to Use the "Dr." Title After Receiving an Honorary Doctorate',
    excerpt:
      `You've received your honorary doctorate. Now what? Here's a practical guide to using your new "Dr." title professionally, ethically, and powerfully — in your business cards, LinkedIn, email signatures, and public appearances.`,
    tag: "Practical",
    readTime: "6 min read",
  },
  {
    id: 4,
    image:
      "/home/Resources4.png",
    title:
      "Top 10 Reasons Professionals Are Choosing Honorary Doctorates in 2026",
    excerpt:
      "The honorary doctorate market is growing rapidly. Here's why thousands of professionals — entrepreneurs, educators, artists, and leaders — are choosing to formalise their expertise with this prestigious credential in 2026.",
    tag: "Trends",
    readTime: "7 min read",
  },
];

const tagColors = {
  Guide: "bg-violet-100 text-violet-700",
  Comparison: "bg-blue-100 text-blue-700",
  Practical: "bg-emerald-100 text-emerald-700",
  Trends: "bg-amber-100 text-amber-700",
};

const Resources = () => {
  return (
    <section className="sm:py-12 px-6 py-8 sm:px-6 lg:px-10 bg-[#F8F6FC]">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <p className="text-md font-semibold tracking-[0.2em] uppercase text-[#320F8C] mb-2">
          Blog
        </p>

        <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900">
          Expert Insights for Lifelong Learners
        </h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Featured Post */}
        <div className="lg:col-span-2 overflow-hidden ">
          <div className="h-56 sm:h-64 lg:h-68 overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="pt-4">
            
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
              {featuredPost.title}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-5">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {featuredPost.readTime}
              </span>

              <span className="flex items-center gap-1 text-xs font-semibold text-[#320F8C]">
                Read More
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Side Posts */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {sidePosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-row overflow-hidden gap-4 "
            >
              {/* Image */}
              <div className="relative w-35 sm:w-40 flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />

               
              </div>

              {/* Content */}
              <div className="flex-1  flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-2">
                    {post.title}
                  </h4>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[11px] text-slate-400">
                    {post.readTime}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#320F8C]">
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;