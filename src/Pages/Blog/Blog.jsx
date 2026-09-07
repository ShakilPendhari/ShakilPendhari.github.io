import React, { useState } from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaSearch } from "react-icons/fa";
import { useBlogPosts, useBlogCategories, useLatestBlog } from "../../hooks/useBlog";
import style from "./Blog.module.css";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

/**
 * Blog - Main blog listing page component
 * Displays all published blog posts with category filtering and loading states
 */
const Blog = ({ theme, setIsIntersection, obj, isIntersection, onSelectBlog }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { categories, loading: catLoading } = useBlogCategories();
  const { blog: latestBlog, loading: latestLoading } = useLatestBlog();
  const { blogs, pagination, loading: blogsLoading, error: blogsError } = useBlogPosts({
    category: selectedCategory || "",
    search,
    page,
    limit: 6,
  });

  const handleCategorySelect = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setPage(1);
  };

  const handleBlogClick = (blog) => {
    if (blog.links?.article) {
      window.location.href = blog.links.article;
    } else if (onSelectBlog && blog.slug) {
      onSelectBlog(blog.slug);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getReadTime = (blog) => blog.readingTime || "1 min";
  const totalPages = pagination?.totalPages || pagination?.pages ||
    (pagination?.total ? Math.ceil(pagination.total / 6) : 1);

  return (
    <MotionFlex
      id="blog"
      className={`${style.blog} section-shell`}
      direction="column"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Header */}
      <Box className={style.blogHeader}>
        <Heading as="h2" className={style.blogTitle}>
          Blog & Articles
        </Heading>
        <Text className={style.blogSubtitle}>
          Insights, tutorials, and technical deep-dives about full-stack development, architecture, and SaaS platforms.
        </Text>
      </Box>

      {latestLoading ? (
        <Box className={style.latestArticle}><Text>Loading latest article...</Text></Box>
      ) : latestBlog && (
        <Box className={style.latestArticle}>
          <Box>
            <Text className={style.latestLabel}>Latest article</Text>
            <Text className={style.blogCardCategory}>{latestBlog.category}</Text>
            <Heading as="h3" className={style.latestTitle}>{latestBlog.title}</Heading>
            <Text className={style.blogCardExcerpt}>{latestBlog.excerpt}</Text>
            <Flex className={style.latestMeta}>
              <span>{formatDate(latestBlog.publishedAt)}</span>
              <span>{getReadTime(latestBlog)}</span>
            </Flex>
            <Link className={style.primaryBlogLink} href={latestBlog.links?.article} isExternal>
              Read more <FaArrowRight />
            </Link>
          </Box>
          {latestBlog.coverImage && (
            <img className={style.latestImage} src={latestBlog.coverImage} alt={latestBlog.title} loading="lazy" />
          )}
        </Box>
      )}

      <Box className={style.searchRow} as="form" onSubmit={(event) => event.preventDefault()}>
        <FaSearch aria-hidden="true" />
        <input
          type="search"
          value={search}
          onChange={(event) => { setSearch(event.target.value); setPage(1); }}
          placeholder="Search articles"
          aria-label="Search articles"
        />
      </Box>

      {/* Category Filter */}
      {!catLoading && categories && categories.length > 0 && (
        <Box className={style.filterContainer}>
          <button
            className={`${style.categoryButton} ${selectedCategory === null ? style.active : ""}`}
            onClick={() => handleCategorySelect(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`${style.categoryButton} ${selectedCategory === category ? style.active : ""}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </Box>
      )}

      {/* Loading State */}
      {blogsLoading && (
        <Box className={style.loadingContainer}>
          <Box className={style.loadingSpinner} />
          <Text>Loading articles...</Text>
        </Box>
      )}

      {/* Network Error State */}
      {blogsError && blogsError.type === "network" && (
        <Box className={style.errorContainer}>
          <Text fontSize="2rem">🌐</Text>
          <Heading as="h3" className={style.errorTitle}>
            Connection Error
          </Heading>
          <Text className={style.errorMessage}>
            Unable to connect to the server. Please check your internet connection and try again.
          </Text>
        </Box>
      )}

      {/* Server Error State */}
      {blogsError && blogsError.type === "server" && (
        <Box className={style.errorContainer}>
          <Text fontSize="2rem">⚠️</Text>
          <Heading as="h3" className={style.errorTitle}>
            Something went wrong
          </Heading>
          <Text className={style.errorMessage}>
            {blogsError.message || "The server encountered an error. Please try again later."}
          </Text>
        </Box>
      )}

      {/* Empty State */}
      {!blogsLoading && !blogsError && (!blogs || blogs.length === 0) && (
        <Box className={style.emptyContainer}>
          <Text fontSize="2rem">📝</Text>
          <Heading as="h3" className={style.emptyTitle}>
            No articles yet
          </Heading>
          <Text className={style.emptyMessage}>
            {selectedCategory
              ? `No articles found in the "${selectedCategory}" category. Try selecting a different category.`
              : "Check back soon for our latest articles and insights."}
          </Text>
        </Box>
      )}

      {/* Blog List */}
      {!blogsLoading && !blogsError && blogs && blogs.length > 0 && (
        <MotionBox
          className={style.blogList}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {blogs.map((blog, index) => (
            <MotionBox
              key={blog.slug}
              className={style.blogCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleBlogClick(blog)}
              role="link"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleBlogClick(blog);
                }
              }}
            >
              {blog.coverImage && (
                <Box className={style.blogCardImageWrap}>
                  <img className={style.blogCardImage} src={blog.coverImage} alt={blog.title} loading="lazy" />
                </Box>
              )}
              <Flex className={style.blogCardHeader}>
                <Box>
                  <span className={style.blogCardCategory}>{blog.category}</span>
                </Box>
                <Text className={style.blogCardDate}>{formatDate(blog.publishedAt)}</Text>
              </Flex>

              <Heading as="h3" className={style.blogCardTitle}>
                {blog.title}
              </Heading>

              <Text className={style.blogCardExcerpt}>
                {blog.excerpt || blog.content?.substring(0, 150) + "..."}
              </Text>

              <Flex className={style.blogCardFooter}>
                <Flex className={style.readTime}>
                  <FaClock style={{ marginRight: "0.35rem" }} />
                  <span>{getReadTime(blog)}</span>
                </Flex>
                <Link className={style.readMore} href={blog.links?.article} onClick={(event) => event.stopPropagation()} display="flex" alignItems="center">
                  Read More
                  <FaArrowRight style={{ marginLeft: "0.5rem" }} />
                </Link>
              </Flex>
            </MotionBox>
          ))}
        </MotionBox>
      )}

      {!blogsLoading && !blogsError && totalPages > 1 && (
        <Flex className={style.pagination} aria-label="Blog pagination">
          <button type="button" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
          <Text>Page {page} of {totalPages}</Text>
          <button type="button" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
        </Flex>
      )}
    </MotionFlex>
  );
};

export default Blog;
