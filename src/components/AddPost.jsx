import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap";
import { loadAllCategories } from "../services/category-service";
import { useEffect, useRef, useState } from "react";
import JoditEditor from 'jodit-react';
import { createPost as doCreatePost, uploadPostImage } from "../services/post-service";
import { getCurrentUserDetails } from "../auth";
import Post from "./Post";

const AddPost = () => {
    const editor = useRef(null);
    // const [content, setContent] = useState('');
    const [categories, setCategories]=useState([]);
    const [user, setUser] = useState(undefined);
    const [image, setImage] = useState(null);

    const [post,setPost] = useState({
        title:"",
        content:"",
        categoryId:""
    });
    const [postContent, setPostContent] = useState([]);

    useEffect(()=>{
        setUser(getCurrentUserDetails());
        console.log(loadAllCategories());
        if (loadAllCategories() === undefined) {
            console.log("No categories data");
        }else{
            console.log("categories data");
            setCategories(loadAllCategories());
        }

        //get api categories data
        // loadAllCategories().then((data)=>{
        //     console.log(data);
        // }).catch(error=>{
        //     console.log(error);
        // });
    },[])
    // const config = {
    //     // readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    //     placeholder: 'Start typings...'
    // }

    //fieldChanged function
    const fieldChanged = (event) => {
        // console.log(event);
        setPost({...post,[event.target.name]:event.target.value})
    }
    const contentFieldChanged = (data) => {
        // console.log(data);
        setPost({...post,"content":data})
    }

    const createPost = (event) => {
        event.preventDefault();
        // console.log(post);
        if (post.title.trim()==="") {
            alert("title");
            return;
        }
        if (post.content.trim()==="") {
            alert("content");
            return;
        }
        if (post.categoryId==="") {
            alert("categoryId");
            return;
        }
        post["userId"] = user?.id;
        const data = doCreatePost(post);
        //upload image data
        console.log("uploadPostImage(image,data?.post?.id)");
        console.log(uploadPostImage(image,data?.post?.id));
        setPost({
            title:"",
            content:"",
            categoryId:""
        });
        setImage(null);
        console.log("test data");
        console.log(data);
        //submit the form on server
        // post["userId"] = user?.id;
        // doCreatePost(post).then(data=>{
        //     alert("data");
        //     console.log(data);
        // }).catch(error=>{
        //     alert("error");
        //     console.log(error);
        // });

    }

    const handleReset = () => {
        setPost({
            title:"",
            content:"",
            categoryId:""
        });
        setImage(null);
    }

    // handle file change 
    const handleFileChange = (event) => {
        console.log("event.target.files");
        console.log(event.target.files[0]);
        // setImage(event.target.files[0]);
        setImage(URL.createObjectURL(event.target.files[0]));
    }

  return (
    <div className="wrapper">
        <Card className="shadow-sm border-0 mt-2">
            {/* {JSON.stringify(post)} */}
            <CardBody>
                <h4>Head</h4>
                <Form onSubmit={createPost}>
                    <div className="my-3">
                        <Label for="title">Post title</Label>
                        <Input 
                            className="rounded-0"
                            type="text"  
                            id="title"
                            name="title"
                            placeholder="Enter here..." 
                            onChange={fieldChanged}
                            value={post.title}
                        />
                    </div>
                    <div className="my-3">
                        <Label for="content">Post content</Label>
                        <JoditEditor
                            ref={editor}
                            value={post.content}
                            // config={config}
                            // onChange={newContent=>setContent(newContent)}
                            onChange={contentFieldChanged}
                        />
                        {/* <Input 
                            className="rounded-0"
                            type="textarea"  
                            id="content"
                            placeholder="Enter here..." 
                            style={{height:"300px"}}
                        /> */}
                    </div>
                    {/* File field  */}
                    <div className="my-3">
                        <Label for="image">Select Post Banner</Label>
                        <Input 
                            id="image" 
                            type="file" 
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="my-3">
                        <Label for="category">Post category</Label>
                        <Input 
                            className="rounded-0"
                            type="select"  
                            id="category"
                            name="categoryId"
                            onChange={fieldChanged}
                            value={post.categoryId}
                        >
                            <option value={0}>
                                "select"
                            </option>
                            {
                                categories.map((category)=>(
                                    <option key={category?.categoryId} value={category?.categoryId}>
                                        {category?.categoryTitle}
                                    </option>
                                ))
                            }
                        </Input>
                    </div>
                    <Container className="text-end">
                        <Button onClick={handleReset} type="reset" className="rounded-0 me-2" color="danger">Reset Content</Button>
                        <Button type="submit" className="rounded-0" color="primary">Create Post</Button>
                    </Container>
                </Form>
            </CardBody>
        </Card>
        {/* Post Component  */}
        <h2>Post look like below post</h2>
        <img src={image} />
        <Post post={post} image={image} check={1}/>
    </div>
  )
}

export default AddPost;