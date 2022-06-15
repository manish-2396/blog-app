import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchSingleBlogPost } from "../Redux/Blogs/action";
import { useSelector } from "react-redux";
import { EditIcon } from "@chakra-ui/icons";

const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const currentBlog = useSelector(store => store.blogReducer.currentBlog)

  useEffect(() => {
    if (Object.keys(currentBlog).length === 0 && id) {
      dispatch(fetchSingleBlogPost(id))
    }
  }, [currentBlog, dispatch, id])

  console.log(currentBlog)

  return (
    <Container maxW={"3xl"} pb={"4rem"}>
      <Box textAlign="center" py={{ base: 5, md: 10 }}>
        <Avatar
          name={currentBlog?.author?.name}
          size="lg"
          src={`${currentBlog?.author?.prpfile_pic}`}
        />
        <Box>
          <Link to={`${location.pathname}/update`}>
            <EditIcon />
          </Link>
        </Box>
        <Text fontSize="lg">Masai School</Text>
        <Text>{currentBlog?.author?.publish_date}</Text>
      </Box>
      <Center textAlign="center">
        <Stack>
          <Heading>
            {currentBlog?.title}
          </Heading>
          <Text fontSize="lg">
            {currentBlog.sub_title}
          </Text>
          <Box>
            <Image
              rounded={"lg"}
              src={
                `${currentBlog?.thumbnail_pic}`
              }
              alt="Thumbnail Image"
            />
          </Box>
          <Box textAlign="left">
            {currentBlog?.description}
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Article;
