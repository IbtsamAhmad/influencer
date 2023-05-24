import React from "react";
import { Select, Button, Row, Col } from "antd";

import { ReactComponent as AddIcon } from "../../assets/icons/AddIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/DeleteIcon.svg";

const BrandedPosts = () => {
  const brandedPosts = [
    {
      type: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/assets/images/post.jpg",
      tags: "",
      name: "@username",
      er: "x.xx%",
      date: "dd/mm/yyyy",
    },
    {
      type: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/assets/images/post.jpg",
      tags: "",
      name: "@username",
      er: "x.xx%",
      date: "dd/mm/yyyy",
    },
    {
      type: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/assets/images/post.jpg",
      tags: "",
      name: "@username",
      er: "x.xx%",
      date: "dd/mm/yyyy",
    },
    {
      type: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/assets/images/post.jpg",
      tags: "",
      name: "@username",
      er: "x.xx%",
      date: "dd/mm/yyyy",
    },
    {
      type: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/assets/images/post.jpg",
      tags: "",
      name: "@username",
      er: "x.xx%",
      date: "dd/mm/yyyy",
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="postsPage-container">
      <h1>Branded Posts</h1>
      {brandedPosts.map((post, i) => {
        return (
          <div className="posts-container" key={i}>
            <div className="branded-post">
              <Row gutter={[32, 32]}>
                <Col lg={6} md={24} sm={24}>
                  <div className="post-col-one">
                    <img src={post.image} alt="post-img" />
                  </div>
                </Col>
                <Col lg={18} md={24} sm={24}>
                  <div className="post-col-two ">
                    <div className="post-col-row">
                      <p className="label">Compaign</p>
                      <div className="menu-row">
                        <Select
                          defaultValue="lucy"
                          style={{
                            width: 120,
                          }}
                          onChange={handleChange}
                          options={[
                            {
                              value: "jack",
                              label: "Jack",
                            },
                            {
                              value: "lucy",
                              label: "Lucy",
                            },
                            {
                              value: "Yiminghe",
                              label: "yiminghe",
                            },
                          ]}
                        />
                        <Button className="add-branded-btn">
                          Add Branded Post
                        </Button>
                      </div>
                    </div>
                    <div className="post-col-row">
                      <p className="label">Caption:</p>
                      <p className="description">{post.description}</p>
                    </div>

                    <div className="post-col-row">
                      <p className="label">Tagged:</p>
                      <div>
                        <div className="tags-container">
                          <div className="tag tag-primary">
                            <div className="add-icon">
                              <AddIcon />
                            </div>
                            <div className="del-icon">
                              <DeleteIcon />
                            </div>
                            @Brand
                          </div>
                          <div className="tag tag-purple">
                            <div className="add-icon">
                              <AddIcon />
                            </div>
                            <div className="del-icon">
                              <DeleteIcon />
                            </div>
                            @Brand
                          </div>
                          <div className="tag tag-red">
                            <div className="add-icon">
                              <AddIcon />
                            </div>
                            <div className="del-icon">
                              <DeleteIcon />
                            </div>
                            @Brand
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="post-col-row">
                      <p className="label">Instagram User:</p>
                      <p className="description">{post.name}</p>
                    </div>
                    <div className="post-col-row">
                      <p className="label">Post ER:</p>
                      <p className="description">{post.er}</p>
                    </div>
                    <div className="post-col-row">
                      <p className="label">Date Posted:</p>
                      <p className="description">{post.date}</p>
                    </div>
                    <div></div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandedPosts;
