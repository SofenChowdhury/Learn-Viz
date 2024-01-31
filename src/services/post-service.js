// import { privateAxios, myAxios } from "./helper";

//Create post
export const createPost = (postData) => {
    const data = 
    {
        id:1,
        title:postData.title,
        content:postData.content,
        categoryId:postData.categoryId,
        userId:postData.userId
    }
    // // data = postData;
    // console.log("service");
    // console.log(data);
    return data;
    // return privateAxios.post(`/`,postData).then(response=>response.data);
}

//load all post
export const loadAllPosts = (pageNumber=5,pageSize=0) => {
    const postData = {
        content:[
            {
                id:1,
                title:"title 1 r",
                content:"content 1",
                categoryId:2,
                userId:1
            },
            {
                id:2,
                title:"title 2",
                content:"content 2",
                categoryId:2,
                userId:1
            },
            {
                id:3,
                title:"title 3r1",
                content:"content 1",
                categoryId:2,
                userId:1
            },
            {
                id:4,
                title:"title 4",
                content:"content 2",
                categoryId:2,
                userId:1
            },
            {
                id:5,
                title:"title 5",
                content:"content 1",
                categoryId:2,
                userId:2
            },
            {
                id:6,
                title:"title 6",
                content:"content 2",
                categoryId:2,
                userId:2
            },
            {
                id:7,
                title:"title 7",
                content:"content 1",
                categoryId:1,
                userId:2
            },
            {
                id:8,
                title:"title 8 ttt",
                content:"content 2",
                categoryId:1,
                userId:1
            },
            {
                id:9,
                title:"title 9 r",
                content:"content 1",
                categoryId:2,
                userId:1
            },
            {
                id:10,
                title:"title 20",
                content:"content 2",
                categoryId:2,
                userId:1
            },
            {
                id:11,
                title:"title 3r1",
                content:"content 1",
                categoryId:2,
                userId:1
            },
            {
                id:12,
                title:"title 4",
                content:"content 2",
                categoryId:2,
                userId:1
            },
            {
                id:13,
                title:"title 5",
                content:"content 1",
                categoryId:2,
                userId:2
            },
            {
                id:14,
                title:"title 6",
                content:"content 2",
                categoryId:2,
                userId:2
            },
            {
                id:15,
                title:"title 7",
                content:"content 1",
                categoryId:1,
                userId:2
            },
            {
                id:16,
                title:"title 16 nbmnnb,nkjhkjhkjhkjh",
                content:"content 2",
                categoryId:1,
                userId:1
            }
        ],
        totalPages:4,
        pageNumber:pageNumber,
        totalElements:16,
        pageSize:pageSize,
        lastPage:false
    };
    return postData;

    // return myAxios.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`).then(response=>response.data);
}

//load single post
export const loadPost=(postId) => {
    const postData = {
        addedDate: 123456,
        content:"test content",
        imageName:"default.png",
        postId:1,
        title:"test title",
        user:{
            id:"1",
            name:"test",
            email:"test@gmail.com",
            password:"123",
            about:"test"
        },
        category:{
            categoryId: 1,
            categoryTitle:"JS",
            categoryDescription:"JS description here"
        },
        comments:[
            {
                id:1,
                title:"title 1",
                content:"content 1",
                categoryId:2,
                userId:1
            },
            {
                id:2,
                title:"title 2",
                content:"content 2",
                categoryId:2,
                userId:1
            }
        ]
    };
    return postData;

    //data fatch from loadAllPosts method
    // let data = loadAllPosts().content.filter(element => element.id === postId).map((data)=>data);
    // return data[0];

    // return myAxios.get(`posts/${postId}`).then(response=>response.data);
}

//create comment 
export const createComment = (comment,postId) => {
    const postData = {
        comments:
        {
            id:3,
            title:"title 3",
            content:comment,
            categoryId:2,
            userId:1
        }
    };
    return postData;
    
    //api call data
    // return privateAxios.post(`/posts/${postId}/comments`, comment).then(data=>data);
}

//upload post banner image
export const uploadPostImage = (image,postId) => {
    return image;
    // let formData = new FormData();
    // formData.append('image',image);
    // return privateAxios.post(`/image/${postId}`,formData,{headers:{'Content-Type':'multipart/form-data'}}).then((response)=>response.data);
}