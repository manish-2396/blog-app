import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../Components/BlogCard";
import { fetchBlogPost } from "../Redux/Blogs/action";

const Articles = () => {
  const blogs = useSelector(store => store.blogReducer.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    if (blogs?.length === 0) {
      dispatch(fetchBlogPost());
    }
  }, [blogs?.length, dispatch]);

  return (
    <Container maxW={"3xl"}>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Trending</Heading>
      </Box>
      <Box>
        <Flex flexWrap={'wrap'} justifyContent={'space-around'}>
          {blogs.length &&
            blogs.map((product) =>{
              return <BlogCard key={product.id} blog={product} />;             
            })}
        </Flex>
      </Box>
    </Container>
  );
};

export default Articles;
