import React, { useState } from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";
import { useBlogPosts, useBlogCategories } from "../../hooks/useBlog";
import style from "./Blog.module.css";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

/**
 * Blog - Main blog listing page component
 * Displays all published blog posts with category filtering and loading states
 */
const Blog = ({ theme, setIsIntersection, obj, isIntersection, onSelectBlog }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories for filtering
  const { categories, loading: catLoading } = useBlogCategories();

  // Fetch blog posts (with optional category filter)
  const { blogs, loading: blogsLoading, error: blogsError } = useBlogPosts(selectedCategory);

  const handleCategorySelect = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleBlogClick = (slug) => {
    if (onSelectBlog) {
      onSelectBlog(slug);
    }
  };

  // Calculate read time (rough estimate: 200 words per minute)
  const getReadTime = (content) => {
    if (!content) return "1 min";
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min`;
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
              onClick={() => handleBlogClick(blog.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleBlogClick(blog.slug);
                }
              }}
            >
              <Flex className={style.blogCardHeader}>
                <Box>
                  <span className={style.blogCardCategory}>{blog.category}</span>
                </Box>
                <Text className={style.blogCardDate}>{formatDate(blog.createdAt)}</Text>
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
                  <span>{getReadTime(blog.content)}</span>
                </Flex>
                <Link className={style.readMore} display="flex" alignItems="center">
                  Read More
                  <FaArrowRight style={{ marginLeft: "0.5rem" }} />
                </Link>
              </Flex>
            </MotionBox>
          ))}
        </MotionBox>
      )}
    </MotionFlex>
  );
};

export default Blog;
