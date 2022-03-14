import React, { Fragment } from "react";
import { Layout, Card, Row, Col, Carousel, Avatar, Space } from "antd";

import "../App.css";
import { getMembers } from "../photos/members/members";
import { getPhotos } from "../photos/carousel/photos";

import AT_HEADER from "../components/AT_HEADER";
import CERN_FOOTER from "../components/CERN_FOOTER";
import CERN_TOOLBAR from "../components/CERN_TOOLBAR";

const { Content } = Layout;

function AboutUs() {
  const members = getMembers();
  const photos = getPhotos();

  const baseURL = "../photos/members/profiles/";

  return (
    <Layout className="layout">
      <CERN_TOOLBAR />

      <AT_HEADER />

      <Content id="about-us-content">
        <Fragment>
          <div className="carousel-container">
            <div className="photo-carousel" data-preload>
              <Carousel autoplay dots={false}>
                {photos.map((photo) => {
                  return (
                    <div key={photo.src} className="container-fluid">
                      <div className="content">
                        <img alt={photo.alt} src={photo.src} />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </Fragment>

        <Fragment>
          <div className="content-lists">
            <div className="responsive">
              <div className="frame">
                <div id="atc-logo">
                  <img
                    src="../white-atc-logo.png"
                    alt="Academic Training Logo"
                  />
                </div>
                <h1>
                  <a href="/about-us">ABOUT US</a>
                </h1>
              </div>
            </div>

            <div className="atc-title">
              <h2>ACADEMIC TRAINING COMMITTEE</h2>
              <div className="divider" />
            </div>

            <div className="our-mission">
              <h4>
                CERN Academic Training lectures are open to all members of CERN
                personnel (in particular staff members and fellows, associates,
                students, users, project associates and apprentices) free of
                charge. Each lecture is recorded and published on the web along
                with the visual support material. The complete catalogue of
                Academic Training and Summer Student Programme lectures archived
                since 1999.
              </h4>
            </div>

            <div className="atc-title">
              <h2>Members</h2>
              <div className="divider" />
            </div>
            <Row justify="center" gutter={[16, 16]}>
              {members.slice(0, 1).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={12}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Maria_Dimou.png")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(1, 2).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={12}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/blank.png")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>
            <div className="atc-title">
              <h3>Departments</h3>
              <div className="divider" />
            </div>

            <Row justify="space-around" gutter={[16, 42]}>
              {members.slice(2, 3).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Albert_De_Roeck.jpg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(3, 4).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/blank.png")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(4, 5).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Maria-Arsuaga-Rios.png")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(5, 6).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Urs_Wiedemann.jpg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(6, 7).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Bertrand_Nicquevert.jpeg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(7, 8).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Valeria_Perez_Reale.png")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(8, 9).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Antonio_Perillo_Marcone.jpeg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>
            <div className="atc-title">
              <h3>Users</h3>
              <div className="divider" />
            </div>
            <Row justify="center" gutter={16}>
              {members.slice(9, 10).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={24}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Evangelia_Dimovasili.jpeg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>
            <div className="atc-title">
              <h3>Staff Association</h3>
              <div className="divider" />
            </div>
            <Row justify="center" gutter={16}>
              {members.slice(10, 11).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={24}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Lynda-Meichtry.jpg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>
            <div className="atc-title">
              <h3>Observers</h3>
              <div className="divider" />
            </div>
            <Row justify="space-around" gutter={[16, 42]}>
              {members.slice(11, 12).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={6}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Maria_Fiascaris.jpeg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(12, 13).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={6}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Martijn_Mulders.jpg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(13, 14).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={6}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Sebastian_Lopienski.jpeg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(14, 15).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={6}>
                      <Card hoverable className="member-card">
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <h3>{member.department}</h3>
                            <Avatar
                              size={120}
                              icon={
                                <img
                                  alt=""
                                  src={
                                    require("../photos/members/profiles/Frank_Tecker.jpg")
                                      .default
                                  }
                                />
                              }
                            />
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>
          </div>
        </Fragment>
      </Content>

      <CERN_FOOTER />
    </Layout>
  );
}

export default AboutUs;