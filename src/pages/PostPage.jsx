import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from 'reactstrap'
import { createComment, loadPost } from '../services/post-service';
import Post from '../components/Post';

function PostPage() {
    const {postId}=useParams();
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState("");
    //load post data of postId init
    // const [post, setPost] = useState({
    //     id:0,
    //     title:"",
    //     content:"",
    //     categoryId:2,
    //     userId:1
    // });
    useEffect(()=>{
        //load post data of postId
        // setPost(loadPost(+postId));
        
        setPost(loadPost(postId));
        
        //load post of postId
        // loadPost(+postId).then(data=>{
        //     console.log(data);
        // }).catch(error=>{
        //     console.log(error);
        // })
    },[]);

    const printDate = (date) => {
        return new Date(date).toLocaleDateString();
    }

    const submitComment = () => {
        setPost({
            ...post,
            comments:[...post.comments,createComment(comment, post.id).comments]
        });
        if (createComment(comment, post.id)) {
            setComment("");
        }

        //fetch the api data
        // createComment(comment, post.id).then(data => {
        //     console.log(data);
        //     setPost({
        //         ...post,
        //         comments:[...post.comments,data]
        //     });
        // }).catch(error=>{
        //     console.log(error);
        // });
    }

  return (
    <Base>
        <Container className='mt-4'>
            <Link className='btn btn-outline-secondary' to="/">Home</Link> / {post && <Link className='btn btn-outline-secondary'>{post.title}</Link>}
            <Row className='mt-4'>
                <Col md={{size:12}}>
                    {/* Previous post component  */}
                    {/* <Post post={post} check={1} /> */}
                    <Card className='mt-3 ps-2 border-0 shadow-sm'>
                        {post &&
                            <CardBody>
                                <CardText>Posted by <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b></CardText>
                                <CardText>
                                    {`${post.category.categoryTitle} : `} 
                                    <span className='text-muted'>
                                        {post.category.categoryDescription}
                                    </span>
                                </CardText>
                                <div className='divider' style={{width:"100%", height:"1px", background:"#e2e2e2"}}></div>
                                <CardText className='mt-3'>
                                    <h3>{post.title}</h3>
                                </CardText>
                                <div className="image-container mt-3 shadow-sm" style={{maxWidth:"50%"}}>
                                    <img src={`../${post.imageName}`}/>
                                </div>
                                <CardText className='mt-3' dangerouslySetInnerHTML={{__html:post.content}}></CardText>
                            </CardBody>
                        }
                    </Card>
                </Col>
            </Row>
            <Row className='my-4'>
                <Col md={{size:10,offset:1}}>
                    <h5>Comments ({post ? post.comments.length : 0})</h5>
                    {
                        post?.comments && 
                        <>
                           { post?.comments.map((data, index)=>
                                <Card className='mt-2 border-0' key={index}>
                                    <CardBody>
                                        <CardText>
                                            {data.content}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            )}

                            <Card className='mt-2 border-0'>
                                <CardBody>
                                    <Input 
                                        type='textarea' 
                                        placeholder='Enter comment here...'
                                        value={comment}
                                        onChange={(e)=>setComment(e.target.value)}
                                    />
                                    <div className='text-end mt-2'>
                                        <Button onClick={submitComment} color='secondary'>Submit</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    </Base>
  )
}

export default PostPage;