import { useState } from "react";
import { Layout } from "@/components/layout";
import ImageUploader from "@/components/ImageUploader";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxOMpbCDTpgh4C-OT-JSrJ3nVu8G3ZnutahmsEwSPNJ5XV22IcQ3VqPsaQNmsLuc7Cm/exec";

const ADMIN_PASSWORD = "hussaini@admin123";

const CreateBlog = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
    imageURLs: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!form.title || !form.author || !form.content) {
      setError("All fields except images are required");
      setLoading(false);
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("password", ADMIN_PASSWORD);
      formData.append("type", "blog");
      formData.append("title", form.title);
      formData.append("author", form.author);
      formData.append("content", form.content);
      formData.append("imageURLs", form.imageURLs);

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.result === "success") {
        setSuccess(true);
        setForm({ title: "", author: "", content: "", imageURLs: "" });
        setTimeout(() => (window.location.href = "/blog"), 2000);
      } else {
        setError(result.message || "Failed to publish blog");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-navy text-center">
        <h1 className="heading-display text-primary-foreground">
          Create New Blog
        </h1>
      </section>

      <section className="py-24 bg-background">
        <div className="container-section max-w-3xl">
          <div className="glass-card p-10 rounded-2xl">
            {success && (
              <p className="text-green-600 mb-6">
                Blog published successfully 🚀
              </p>
            )}

            {error && <p className="text-red-600 mb-6">{error}</p>}

            <input
              placeholder="BLOG TITLE"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border mb-4"
            />

            <input
              placeholder="AUTHOR NAME"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border mb-4"
            />

            <textarea
              placeholder="BLOG CONTENT"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              rows={8}
              className="w-full px-4 py-3 rounded-lg border mb-6"
            />

            <ImageUploader
              onImagesChange={(urls) =>
                setForm((prev) => ({ ...prev, imageURLs: urls }))
              }
              existingImages={
                form.imageURLs
                  ? form.imageURLs.split(",").map((u) => u.trim())
                  : []
              }
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full mt-6 px-6 py-3 rounded-xl bg-accent text-accent-foreground"
            >
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateBlog;
