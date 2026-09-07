import React, { useEffect } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaClock } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useBlogDetail } from "../../hooks/useBlog";
import style from "./Blog.module.css";

const MotionBox = motion(Box);

/**
 * BlogDetail - Individual blog post detail view
 * Displays full markdown content with safe rendering
 */
const BlogDetail = ({ slug, onBack, theme }) => {
  const isLight = !theme;
  const { blog, loading, error } = useBlogDetail(slug);

  useEffect(() => {
    if (!blog) return undefined;
    document.title = `${blog.title} | Portfolio`;
    const description = document.querySelector('meta[name="description"]') || document.createElement("meta");
    description.name = "description";
    description.content = blog.excerpt || "";
    document.head.appendChild(description);

    const setMeta = (property, content) => {
      if (!content) return;
      const meta = document.querySelector(`meta[property="${property}"]`) || document.createElement("meta");
      meta.setAttribute("property", property);
      meta.content = content;
      document.head.appendChild(meta);
    };
    setMeta("og:title", blog.title);
    setMeta("og:description", blog.excerpt);
    setMeta("og:url", blog.links?.article);
    setMeta("og:image", blog.coverImage);

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = blog.links?.article || window.location.href;
    document.head.appendChild(canonical);

    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blog.title,
      description: blog.excerpt,
      image: blog.coverImage ? [blog.coverImage] : undefined,
      datePublished: blog.publishedAt,
      mainEntityOfPage: blog.links?.article,
    });
    document.head.appendChild(structuredData);

    return () => structuredData.remove();
  }, [blog]);

  // Custom markdown component renderers for styling
  const markdownComponents = {
    h1: ({ node, children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ node, children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ node, children, ...props }) => <h3 {...props}>{children}</h3>,
    h4: ({ node, children, ...props }) => <h4 {...props}>{children}</h4>,
    h5: ({ node, children, ...props }) => <h5 {...props}>{children}</h5>,
    h6: ({ node, children, ...props }) => <h6 {...props}>{children}</h6>,
    p: ({ node, children, ...props }) => <p {...props}>{children}</p>,
    a: ({ node, href, children, ...props }) => (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
    ),
    img: ({ node, alt, src, ...props }) => (
      <img alt={alt} src={src} {...props} />
    ),
    code: ({ node, inline, children, ...props }) => (
      inline ? <code {...props}>{children}</code> : <code {...props}>{children}</code>
    ),
    pre: ({ node, children, ...props }) => <pre {...props}>{children}</pre>,
    blockquote: ({ node, children, ...props }) => <blockquote {...props}>{children}</blockquote>,
    table: ({ node, children, ...props }) => <table {...props}>{children}</table>,
    thead: ({ node, children, ...props }) => <thead {...props}>{children}</thead>,
    tbody: ({ node, children, ...props }) => <tbody {...props}>{children}</tbody>,
    tr: ({ node, children, ...props }) => <tr {...props}>{children}</tr>,
    th: ({ node, children, ...props }) => <th {...props}>{children}</th>,
    td: ({ node, children, ...props }) => <td {...props}>{children}</td>,
    ul: ({ node, children, ...props }) => <ul {...props}>{children}</ul>,
    ol: ({ node, children, ...props }) => <ol {...props}>{children}</ol>,
    li: ({ node, children, ...props }) => <li {...props}>{children}</li>,
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <MotionBox
      id="blog-detail"
      className="section-shell"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      maxW="900px"
      mx="auto"
      py="5rem"
    >
      {/* Back Button */}
      {blog?.links?.index ? (
        <a className={style.backButton} href={blog.links.index}>
          <FaArrowLeft size={14} />
          <span>Back to all blogs</span>
        </a>
      ) : <button className={style.backButton} onClick={onBack} type="button" title="Back to Blog">
        <FaArrowLeft size={14} />
        <span>Back to Blog</span>
      </button>}

      {/* Loading State */}
      {loading && (
        <Box className={style.loadingContainer}>
          <Box className={style.loadingSpinner} />
          <Text>Loading article...</Text>
        </Box>
      )}

      {/* Not Found Error */}
      {error && error.type === "not-found" && (
        <Box className={style.errorContainer}>
          <Text fontSize="3rem">🔍</Text>
          <Heading as="h2" className={style.errorTitle}>
            Article Not Found
          </Heading>
          <Text className={style.errorMessage}>
            The blog post you're looking for doesn't exist or has been removed.
          </Text>
        </Box>
      )}

      {/* Network Error */}
      {error && error.type === "network" && (
        <Box className={style.errorContainer}>
          <Text fontSize="3rem">🌐</Text>
          <Heading as="h2" className={style.errorTitle}>
            Connection Error
          </Heading>
          <Text className={style.errorMessage}>
            Unable to load the article. Please check your internet connection and try again.
          </Text>
        </Box>
      )}

      {/* Server Error */}
      {error && error.type === "server" && (
        <Box className={style.errorContainer}>
          <Text fontSize="3rem">⚠️</Text>
          <Heading as="h2" className={style.errorTitle}>
            Something went wrong
          </Heading>
          <Text className={style.errorMessage}>
            {error.message || "The server encountered an error. Please try again later."}
          </Text>
        </Box>
      )}

      {/* Blog Content */}
      {!loading && !error && blog && (
        <>
          {/* Header */}
          <Box className={style.detailHeader}>
            <Flex className={style.detailMeta} mb="1rem">
              <span className={style.detailCategory}>{blog.category}</span>
              <span className={style.detailDate}>{formatDate(blog.publishedAt)}</span>
              <Flex className={style.detailReadTime}>
                <FaClock size={14} style={{ marginRight: "0.35rem" }} />
                <span>{blog.readingTime || "1 min"}</span>
              </Flex>
            </Flex>
            <Heading as="h1" className={style.detailTitle}>
              {blog.title}
            </Heading>
            {blog.coverImage && <img className={style.detailImage} src={blog.coverImage} alt={blog.title} loading="lazy" />}
            {blog.excerpt && <Text className={style.detailExcerpt}>{blog.excerpt}</Text>}
            {blog.tags?.length > 0 && (
              <Flex className={style.detailTags} wrap="wrap" gap="0.5rem" mt="1.25rem">
                {blog.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </Flex>
            )}
          </Box>

          {/* Markdown Content - Safely Rendered */}
          <Box className={style.detailContent}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
              skipHtml={true}
            >
              {blog.content}
            </ReactMarkdown>
          </Box>

          {(blog.githubUrl || blog.deployedUrl) && (
            <Flex className={style.projectLinks}>
              {blog.githubUrl && <a href={blog.githubUrl} target="_blank" rel="noreferrer">View on GitHub</a>}
              {blog.deployedUrl && <a href={blog.deployedUrl} target="_blank" rel="noreferrer">View deployed project</a>}
            </Flex>
          )}

          {/* Share Section - Optional */}
          <Box
            mt="4rem"
            pt="2rem"
            borderTop="1px solid"
            borderTopColor={isLight ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)"}
          >
            <Text fontSize="0.9rem" color={isLight ? "var(--muted-light)" : "var(--muted-dark)"}>
              🔗 Share this article: <strong>{slug}</strong>
            </Text>
          </Box>
        </>
      )}
    </MotionBox>
  );
};

export default BlogDetail;
