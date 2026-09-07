import { useState, useEffect } from "react";

// CRA exposes REACT_APP_* while Vite exposes VITE_*; support both during the migration.
const API_BASE_URL = (process.env.VITE_BLOG_API_URL || process.env.REACT_APP_BLOG_API_URL || "").replace(/\/$/, "") || "http://localhost:5000/api"

const initialState = { data: null, loading: true, error: null };

const getError = (err) => ({
  message: err.message || "Failed to fetch blog data",
  type: err instanceof TypeError ? "network" : "server",
});

const request = async (path, signal) => {
  if (!API_BASE_URL) {
    throw new Error("Blog API URL is not configured");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, { signal });
  if (!response.ok) {
    const error = new Error(`HTTP Error: ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
};

/**
 * Custom hook to fetch all published blog posts
 * @param {string} category - Optional category filter
 * @returns {Object} { blogs, loading, error }
 */
export const useBlogPosts = ({ category = "", search = "", page = 1, limit = 6 } = {}) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const controller = new AbortController();
    const fetchBlogs = async () => {
      try {
        setState({ data: null, loading: true, error: null });
        const params = new URLSearchParams({ page: String(page), limit: String(limit) });
        if (search) params.set("search", search);
        if (category) params.set("category", category);
        const result = await request(`/blogs?${params.toString()}`, controller.signal);
        setState({
          data: result.blogs || result.data || [],
          loading: false,
          error: null,
          meta: result.pagination || result.meta || null,
        });
      } catch (err) {
        if (err.name === "AbortError") return;
        setState({
          data: null,
          loading: false,
          error: getError(err),
        });
      }
    };

    fetchBlogs();
    return () => controller.abort();
  }, [category, search, page, limit]);

  return {
    blogs: state.data,
    pagination: state.meta,
    loading: state.loading,
    error: state.error,
  };
};

export const useLatestBlog = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const controller = new AbortController();
    request("/blogs/latest", controller.signal)
      .then((result) => setState({ data: result.blog || result.data || result, loading: false, error: null }))
      .catch((err) => {
        if (err.name !== "AbortError") setState({ data: null, loading: false, error: getError(err) });
      });
    return () => controller.abort();
  }, []);

  return { blog: state.data, loading: state.loading, error: state.error };
};

/**
 * Custom hook to fetch available blog categories
 * @returns {Object} { categories, loading, error }
 */
export const useBlogCategories = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setState({ data: null, loading: true, error: null });

        const result = await request("/blogs/categories");
        setState({
          data: result.categories || result.data || [],
          loading: false,
          error: null,
        });
      } catch (err) {
        if (err.name === "AbortError") return;
        setState({
          data: null,
          loading: false,
          error: {
            message: err.message || "Failed to fetch categories",
            type: err instanceof TypeError ? "network" : "server",
          },
        });
      }
    };

    fetchCategories();
  }, []);

  return {
    categories: state.data,
    loading: state.loading,
    error: state.error,
  };
};

/**
 * Custom hook to fetch a single blog post by slug
 * @param {string} slug - Blog post slug identifier
 * @returns {Object} { blog, loading, error }
 */
export const useBlogDetail = (slug) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!slug) {
      setState({
        data: null,
        loading: false,
        error: { message: 'No slug provided', type: 'validation' },
      });
      return;
    }

    const fetchBlog = async (signal) => {
      try {
        setState({ data: null, loading: true, error: null });
        const result = await request(`/blogs/${encodeURIComponent(slug)}`, signal);
        setState({
          data: result.blog || result.data || null,
          loading: false,
          error: null,
        });
      } catch (err) {
        if (err.name === "AbortError") return;
        setState({
          data: null,
          loading: false,
          error: {
            message: err.status === 404 ? "Blog post not found" : err.message || "Failed to fetch blog post",
            type: err.status === 404 ? "not-found" : err instanceof TypeError ? "network" : "server",
          },
        });
      }
    };

    const controller = new AbortController();
    fetchBlog(controller.signal);
    return () => controller.abort();
  }, [slug]);

  return {
    blog: state.data,
    loading: state.loading,
    error: state.error,
  };
};
