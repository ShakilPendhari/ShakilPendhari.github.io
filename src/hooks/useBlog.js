import { useState, useEffect } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// State management object for different async states
const initialState = {
  data: null,
  loading: true,
  error: null,
};

/**
 * Custom hook to fetch all published blog posts
 * @param {string} category - Optional category filter
 * @returns {Object} { blogs, loading, error }
 */
export const useBlogPosts = (category = null) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setState({ data: null, loading: true, error: null });

        const url = category
          ? `${API_BASE_URL}/blogs?category=${encodeURIComponent(category)}`
          : `${API_BASE_URL}/blogs`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        
        // API returns { blogs: [...] }
        setState({
          data: result.blogs || [],
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: {
            message: err.message || 'Failed to fetch blogs',
            type: err instanceof TypeError ? 'network' : 'server',
          },
        });
      }
    };

    fetchBlogs();
  }, [category]);

  return {
    blogs: state.data,
    loading: state.loading,
    error: state.error,
  };
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

        const response = await fetch(`${API_BASE_URL}/blogs/categories`);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        
        // API returns { categories: [...] }
        setState({
          data: result.categories || [],
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: {
            message: err.message || 'Failed to fetch categories',
            type: err instanceof TypeError ? 'network' : 'server',
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

    const fetchBlog = async () => {
      try {
        setState({ data: null, loading: true, error: null });

        const response = await fetch(`${API_BASE_URL}/blogs/${slug}`);

        if (response.status === 404) {
          throw new Error('Blog post not found');
        }

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        
        // API returns { blog: {...} }
        setState({
          data: result.blog || null,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: {
            message: err.message || 'Failed to fetch blog post',
            type: err.message === 'Blog post not found' ? 'not-found' : 
                   err instanceof TypeError ? 'network' : 'server',
          },
        });
      }
    };

    fetchBlog();
  }, [slug]);

  return {
    blog: state.data,
    loading: state.loading,
    error: state.error,
  };
};
