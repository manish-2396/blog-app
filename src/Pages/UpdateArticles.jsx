import React from 'react'
import { Box, Container, Heading } from "@chakra-ui/react"
import ArticleUpdateer from '../Components/ArticleUpdateer'
import { useSelector } from 'react-redux'

const UpdateArticles = () => {
    const currentBlog = useSelector(store => store.blogReducer.currentBlog)

    return (
        <Container>
            <Box textAlign={'center'} py={{ base: 2, md: 10 }}>
                <Heading>Update Article</Heading>
            </Box>
            <ArticleUpdateer currentBlog={currentBlog}/>
        </Container>
    )
}

export default UpdateArticles
