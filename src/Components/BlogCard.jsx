import React from 'react'
import {
    Avatar,
    Box,
    Center,
    Stack,
    useColorModeValue,
    Image,
    Text,
    Heading,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    console.log(blog[0])
    return (
        <Center my={6}>
            <Box
                maxW={"445px"}
                w="full"
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={
                    'hidden'
                }
            >

                <Link to={`/articles/${blog.id}`}>
                    <Box>
                        <Image src={`${blog.thumbnail_pic}`} />
                    </Box>
                    <Stack>
                        <Text>Blog</Text>
                        <Heading>{blog.title}</Heading>
                        <Text>{blog.description}</Text>
                    </Stack>

                    <Stack>
                        <Avatar src={blog.author.profile_pic} />
                        <Text>{blog.author.name}</Text>
                    </Stack>
                </Link>
            </Box>
        </Center>
    )
}

export default BlogCard
