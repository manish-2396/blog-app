import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import ArticleUpdateer from "../Components/ArticleUpdateer";
import { createBlogPost } from "../Redux/Blogs/action";

const CreateArticle = () => {





  return (
    <Container>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Create Article</Heading>
      </Box>
      <ArticleUpdateer/>
    </Container>
  );
};

export default CreateArticle;
