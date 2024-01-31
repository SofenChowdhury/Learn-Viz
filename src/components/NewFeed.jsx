import React, { useEffect, useState } from 'react';
import { loadAllPosts } from '../services/post-service';
import { Col, Row, Pagination, PaginationItem, PaginationLink, Container, Button } from 'reactstrap';
import Post from './Post';
import InfiniteScroll from 'react-infinite-scroll-component';

function NewFeed() {
  const [postContent, setPostContent] = useState({
    content: [],
    totalPages:0,
    pageNumber:0,
    totalElements:0,
    pageSize:0,
    lastPage:false
  });
  const [data, setData] = useState({
    content: [],
    totalPages:0,
    pageNumber:0,
    totalElements:0,
    pageSize:0,
    lastPage:false
  });
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(()=>{
    //called the function
    // changePage(0);//old pagination
    // setPostContent(loadAllPosts(0,5));
    // console.log(loadAllPosts());
    
    //load all the post from server
    // loadAllPosts().then(data=>{
    //   console.log(data);
    // }).catch(error=>{
    //   console.log(error);
    // });
    //Scroll pagination
    changePage(currentPage);
  },[currentPage]);
  const changePage = (pageNumber=0,pageSize=5) => {
    // if (pageNumber > postContent.pageNumber && postContent.lastPage) {
    if (pageNumber > postContent.pageNumber && postContent.pageNumber === postContent.totalPages-1) {
      return;
    }
    if (pageNumber < postContent.pageNumber && postContent.pageNumber === 0) {
      return;
    }
    setPostContent(loadAllPosts(pageNumber,pageSize));
    // setData(loadAllPosts(pageNumber,pageSize));
    // setPostContent(
    //     {
    //         content:[...postContent.content, ...data.content],
    //         totalPages:data.totalPages,
    //         pageNumber:data.pageNumber,
    //         totalElements:data.totalElements,
    //         pageSize:data.pageSize,
    //         lastPage:data.lastPage
    //     }
    // );
    // let apiData = loadAllPosts(pageNumber,pageSize);
    console.log("currentPage");
    console.log(currentPage);
    // console.log("apiData");
    // console.log(apiData);
    // setPostContent(apiData);
    console.log("postContent");
    console.log(postContent);
    // setPostContent(
    //     {
    //         content:[...postContent.content, ...apiData.content],
    //         totalPages:apiData.totalPages,
    //         pageNumber:apiData.pageNumber,
    //         totalElements:apiData.totalElements,
    //         pageSize:apiData.pageSize,
    //         lastPage:apiData.lastPage
    //     }
    // );
    console.log(" hhhh data ");
    console.log(setPostContent(loadAllPosts(pageNumber,pageSize)));
    // window.scroll(0,0);

    //page change from API
    // loadAllPosts().then(data=>{
    //   setPostContent(data);
    //   window.scroll(0,0);
    // }).catch(error=>{
    //   console.log(error);
    // });
  }
  const changePageInfinite = () => {
    console.log("infinite");
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="container-fluid mb-5">
      <Row>
        <Col md={
          {
            size:10,
            offset:1
          }
        }>
          <h1>News Feed</h1>
          <InfiniteScroll
            dataLength={postContent.content.length}
            hasMore={!postContent.lastPage}
            loader={<p onClick={()=>{window.scroll(0,0);}} style={{ textAlign: 'center' }}><Button onClick={()=>{window.scroll(0,0);}}>Loading...</Button></p>}
            endMessage={
                <p onClick={()=>{window.scroll(0,0);}} style={{ textAlign: 'center' }}>
                  <Button>Yay! You have seen it all. Touch for start page</Button>
                </p>
            }
            refreshFunction={this?.refresh}
            pullDownToRefreshThreshold={10}
            pullDownToRefreshContent={
                <p style={{ textAlign: 'center' }}>&#8595; Pull down to refresh <Button></Button></p>
            }
            releaseToRefreshContent={
                <p style={{ textAlign: 'center' }}>&#8593; Release to refresh</p>
            }
            next={changePageInfinite}
          >
            {
                postContent.content.map((post)=>(
                <Post key={post?.id} post={post} />
                ))
            }
          </InfiniteScroll>



          {/* <Container className='mt-3'>
            <Pagination size='lg'>
              <PaginationItem onClick={()=>changePage(postContent.pageNumber-1)} disabled={postContent.pageNumber === 0}>
                <PaginationLink previous>Previous</PaginationLink>
              </PaginationItem>
              {[...Array(postContent.totalPages)].map((item,index)=>(
                <PaginationItem onClick={()=>changePage(index)} active={index === postContent.pageNumber} key={index}>
                  <PaginationLink>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem onClick={()=>changePage(postContent.pageNumber+1)} disabled={postContent.pageNumber === postContent.totalPages-1}>
                <PaginationLink next>Next</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Container> */}
        </Col>
      </Row>
    </div>
  )
}

export default NewFeed