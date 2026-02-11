import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Calendar, User } from "lucide-react";

/**
 * Blog type – Apps Script structure
 */
interface Blog {
  Title: string;
  Content: string;
  ImageURLs: string;
  Timestamp: string;
  Author: string;
  Type: string;
  slug: string;
}

/**
 * Apps Script API
 */
const GOOGLE_SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbxOMpbCDTpgh4C-OT-JSrJ3nVu8G3ZnutahmsEwSPNJ5XV22IcQ3VqPsaQNmsLuc7Cm/exec";

/**
 * Create slug from title
 */
const createSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");

const ViewBlog = () => {
  const { slug } = useParams<{ slug: string }>();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // ============================================
  // 🔄 FETCH BLOG DATA
  // ============================================
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(GOOGLE_SHEET_API_URL);
        const result = await res.json();

        if (result.result === "success") {
          const blogs = result.data
            .filter((item: any) => item.Type === "blog")
            .map((item: any) => ({
              ...item,
              slug: createSlug(item.Title),
            }));

          const foundBlog = blogs.find(
            (b: Blog) => b.slug === slug
          );

          if (foundBlog) {
            const imgs = foundBlog.ImageURLs
              ? foundBlog.ImageURLs.split(",")
                  .map((url: string) => url.trim())
                  .filter(Boolean)
              : [];

            setImages(
              imgs.length > 0 ? imgs : ["/assets/default-blog.jpg"]
            );
            setBlog(foundBlog);
          } else {
            setBlog(null);
          }
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <p className="body-large text-muted-foreground">
            Loading article...
          </p>
        </section>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <h1 className="heading-2 text-foreground mb-4">
            Blog not found
          </h1>
          <p className="body-regular text-muted-foreground">
            The article you are looking for does not exist.
          </p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* SEO */}
      <title>{blog.Title} | Hussaini IT Services</title>
      <meta
        name="description"
        content={blog.Content.slice(0, 160)}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-text text-gold-light mb-4 block">
              Blog Article
            </span>

            <h1 className="heading-display text-primary-foreground mb-6">
              {blog.Title}
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">
                  {blog.Author}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {blog.Timestamp}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container-section max-w-4xl">
          {/* Image Gallery */}
          <div className="space-y-6 mb-12">
            {images.map((img, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-elegant-md"
              >
                <div className="rounded-2xl overflow-hidden shadow-elegant-md bg-gray-100">
  <div className="relative w-full aspect-[16/9] flex items-center justify-center">
    <img
      src={img}
      alt={`${blog.Title} - ${index + 1}`}
      className="max-w-full max-h-full object-contain"
      onError={(e) =>
        ((e.target as HTMLImageElement).src =
          "/assets/default-blog.jpg")
      }
    />
  </div>
</div>

              </div>
            ))}
          </div>

          {/* Text */}
          <article>
            <p className="body-large text-foreground whitespace-pre-line">
              {blog.Content}
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default ViewBlog;
