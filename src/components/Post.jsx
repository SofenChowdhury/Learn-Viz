import { Button, Card, CardBody, CardText } from 'reactstrap';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

function Post({post={title:"title",content:"content"}, check}) {
  return (
    <Card className='border-0 shadow-sm mt-3'>
        <CardBody>
            <h4>{post?.title}</h4>
            <CardText>
            {/* <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,10)}}> */}
            {/* <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,10)+"..."}}> */}
                {/* {post?.content.substring(0,10)}... */}
                {check ? parse(post?.content) : `${post?.content.substring(0,2)}...`}
            </CardText>
            {!check && 
                <div>
                    {/* <Button>Read More</Button> */}
                    <Link className='btn btn-secondary border-0' to={`/posts/${post.id}`}>Read More</Link>
                </div>
            }
        </CardBody>
    </Card>
  )
}

export default Post;