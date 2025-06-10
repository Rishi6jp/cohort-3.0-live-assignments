import { useEffect, useState } from 'react';

export function usePostTitle() {
    const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await response.json();

    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return post.title;
}

export function useFetch (url) {
    const [finalData, setFinalData] = useState({emoji: "🖕"});
    const [loading, setLoading] = useState(true);

    async function getDetails() {
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false)
    }

    useEffect(() => {
        getDetails();
    }, [url])

    useEffect(() => {
        const intervalId = setInterval(getDetails, 10 * 1000) // cleanup

        return () => {
            clearInterval(intervalId);
        };
    }, [url])

    return {
        finalData,
        loading
    }
} 