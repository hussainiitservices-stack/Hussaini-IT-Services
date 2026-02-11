import { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import { Calendar } from "lucide-react";

/**
 * Blog type – mapped from Google Sheet
 */
interface Blog {
  Title: string;
  Timestamp: string;
  Content: string;
  ImageURLs: string;
  Type: string;
}

/**
 * Google Apps Script URL
 */
const GOOGLE_SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbxOMpbCDTpgh4C-OT-JSrJ3nVu8G3ZnutahmsEwSPNJ5XV22IcQ3VqPsaQNmsLuc7Cm/exec";

const ADMIN_PASSWORD = "hussaini@admin123";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  // ============================================
  // 🔄 FETCH BLOG DATA (BLOGS ONLY)
  // ============================================
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(GOOGLE_SHEET_API_URL);
      const result = await res.json();

      if (result.result === "success") {
        const blogOnlyData = result.data
          .filter((item: Blog) => item.Type === "blog")
          .sort(
            (a: Blog, b: Blog) =>
              new Date(b.Timestamp).getTime() -
              new Date(a.Timestamp).getTime()
          );

        setBlogs(blogOnlyData);
      } else {
        setError("Failed to load blogs");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Network error while fetching blogs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-text text-gold-light mb-4 block">
              Insights & Articles
            </span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Our Blog
            </h1>
            <p className="body-large text-primary-foreground/70 max-w-2xl mx-auto">
              Thoughts, insights, and knowledge from our journey in technology,
              design, and digital growth.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setShowPasswordPrompt(true)}
                className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium shadow-elegant-sm hover:shadow-elegant-md transition"
              >
                Create Blog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Password Modal */}
      {showPasswordPrompt && !authorized && (
        <section className="py-24 bg-background">
          <div className="container-section max-w-md">
            <div className="glass-card p-8 rounded-2xl text-center">
              <h2 className="heading-3 text-foreground mb-4">
                Admin Access
              </h2>

              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border mb-4"
              />

              <button
                onClick={() => {
                  if (password === ADMIN_PASSWORD) {
                    setAuthorized(true);
                    setShowPasswordPrompt(false);
                    window.location.href = "/blog/create";
                  } else {
                    setAccessDenied(true);
                    setShowPasswordPrompt(false);
                  }
                }}
                className="w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground"
              >
                Verify
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Access Denied */}
      {accessDenied && (
        <section className="py-24 bg-background text-center">
          <p className="body-large text-muted-foreground">
            Access denied. Enjoy reading the blogs we made 😊
          </p>
        </section>
      )}

      {/* Blog Listing */}
      <section className="py-24 bg-background">
        <div className="container-section">
          {loading && (
            <p className="text-center body-large text-muted-foreground">
              Loading blogs...
            </p>
          )}

          {error && (
            <p className="text-center body-large text-red-500">
              {error}
            </p>
          )}

          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog, index) => {
                const image =
                  blog.ImageURLs?.split(",")[0]?.trim() ||
                  "/assets/default-blog.jpg";

                return (
                  <article
                    key={index}
                    className="group rounded-2xl overflow-hidden bg-background shadow-elegant-sm hover:shadow-elegant-md transition-shadow duration-300"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[16/9] bg-gray-100">

                      <img
                        src={image}
                        alt={blog.Title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) =>
                          ((e.target as HTMLImageElement).src =
                            "/assets/default-blog.jpg")
                        }
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {blog.Timestamp}
                        </span>
                      </div>

                      <h2 className="heading-3 text-foreground mb-4">
                        {blog.Title}
                      </h2>

                      <p className="body-regular text-muted-foreground line-clamp-3">
                        {blog.Content}
                      </p>

                      <div className="mt-6">
                        <a
                          href={`/blog/${blog.Title.toLowerCase()
                            .replace(/[^\w ]+/g, "")
                            .replace(/ +/g, "-")}`}
                          className="text-accent font-medium text-sm"
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
