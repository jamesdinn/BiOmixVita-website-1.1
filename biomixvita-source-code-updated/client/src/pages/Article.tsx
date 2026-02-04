import { useRoute, useLocation } from "wouter";
import { useEffect } from "react";
import { blogPosts } from "../data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Link } from "wouter";

export default function Article() {
  const [match, params] = useRoute("/insights/:slug");
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!match) {
    return null;
  }

  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Button onClick={() => setLocation("/insights")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <article className="container max-w-3xl mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-primary/10"
          onClick={() => setLocation("/insights")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
            <Tag className="h-4 w-4" />
            {post.category}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm border-b border-border pb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-muted/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6">
              Connect with us to discuss how these insights apply to your research.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
