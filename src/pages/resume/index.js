import * as React from "react";
import "./resume.less";
import {
  Breadcrumb,
  Row,
  Col,
  Timeline,
  Badge,
  Avatar,
  Progress,
  Flex,
  Tooltip,
} from "antd";
import { Link } from "gatsby";

const Index = () => {
  return (
    <div>
      <Breadcrumb
        className="resume-breads"
        items={[
          {
            title: (
              <Link to="/" className="decoration-none">
                Home
              </Link>
            ),
          },
          {
            title: "Resume",
          },
        ]}
      />
      <div>
        <Row className="resume-row">
          <Col className="resume-left display-none">
            <Timeline
              className="resume-timeline"
              items={[
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../email-1.png`} size={20} />
                    </Badge>
                  ),
                  color: "grey",
                  children: (
                    <Link to="#basic-info" className="decoration-none">
                      <span className="resume-line-text">Resume</span>
                    </Link>
                  ),
                },
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../email-1.png`} size={20} />
                    </Badge>
                  ),
                  color: "grey",
                  children: (
                    <Link to="#skills" className="decoration-none">
                      <span className="resume-line-text">SKILLS</span>
                    </Link>
                  ),
                },
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../email-1.png`} size={20} />
                    </Badge>
                  ),
                  color: "grey",
                  children: (
                    <Link to="#experience" className="decoration-none">
                      <span className="resume-line-text">EXPERIENCE</span>
                    </Link>
                  ),
                },
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../email-1.png`} size={20} />
                    </Badge>
                  ),
                  color: "grey",
                  children: (
                    <Link to="#education" className="decoration-none">
                      <span className="resume-line-text">EDUCATION</span>
                    </Link>
                  ),
                },
              ]}
            />
          </Col>
          <Col className="resume-right">
            <div>
              <h1 id="basic-info">Resume</h1>
              <Row>
                <Col flex={4}>
                  <h2>Ni Jiaying</h2>
                  <h3>
                    PhD Candidate at Japan Advanced Institute of Science and
                    Technology (JAIST)
                  </h3>
                  <h3>Financial risk management in Knowledge Science</h3>
                </Col>
                <Col flex={1} className="basic-info-left-col">
                  <Badge>
                    <Avatar
                      src={`headphoto11.jpg`}
                      className="resume-xiang-avatar"
                    />
                  </Badge>
                </Col>
              </Row>
            </div>
            <div>
              <h1 id="skills">SKILLS</h1>
              <div className="text-size">
                <p>
                  This section includes all my skills and the level of
                  proficiency I have in each of them. I am first and foremost a
                  Full Stack Software Engineer but I also have a strong
                  background in machine learning and AI. This combination of
                  skills is what makes me unique and allows me to work on a wide
                  range of <Link to="/">projects</Link>.
                </p>
              </div>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Tooltip
                    title="This section includes all my skills and the level of
                  proficiency I have in each of them. I am first and foremost a
                  Full Stack Software Engineer"
                    color="#e7bfc0"
                  >
                    <Flex align="center" gap="small">
                      <Badge className="display-none skill-badge">
                        <Avatar src={`../email-1.png`} />
                      </Badge>
                      <span className="skill-title">Java</span>
                    </Flex>
                    <Progress
                      percent={100}
                      size="small"
                      showInfo={false}
                      strokeColor="#e7bfc0"
                    />
                  </Tooltip>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Tooltip
                    title="This section includes all my skills and the level of
                  proficiency I have in each of them. I am first and foremost a
                  Full Stack Software Engineer"
                    color="#e7bfc0"
                  >
                    <Flex align="center" gap="small">
                      <Badge className="display-none skill-badge">
                        <Avatar src={`../email-1.png`} />
                      </Badge>
                      <span className="skill-title">Kotlin</span>
                    </Flex>
                    <Progress
                      percent={90}
                      size="small"
                      showInfo={false}
                      strokeColor="#e7bfc0"
                    />
                  </Tooltip>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Tooltip
                    title="This section includes all my skills and the level of
                  proficiency I have in each of them. I am first and foremost a
                  Full Stack Software Engineer"
                    color="#e7bfc0"
                  >
                    <Flex align="center" gap="small">
                      <Badge className="display-none skill-badge">
                        <Avatar src={`../email-1.png`} />
                      </Badge>
                      <span className="skill-title">Python</span>
                    </Flex>
                    <Progress percent={90} size="small" showInfo={false} />
                  </Tooltip>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Tooltip
                    title="This section includes all my skills and the level of
                  proficiency I have in each of them. I am first and foremost a
                  Full Stack Software Engineer"
                    color="#e7bfc0"
                  >
                    <Flex align="center" gap="small">
                      <Badge className="display-none skill-badge">
                        <Avatar src={`../email-1.png`} />
                      </Badge>
                      <span className="skill-title">JavaScript</span>
                    </Flex>
                    <Progress percent={80} size="small" showInfo={false} />
                  </Tooltip>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Tooltip
                    title="This section includes all my skills and the level of
                  proficiency I have in each of them. I am first and foremost a
                  Full Stack Software Engineer"
                    color="#e7bfc0"
                  >
                    <Flex align="center" gap="small">
                      <Badge className="display-none skill-badge">
                        <Avatar src={`../email-1.png`} />
                      </Badge>
                      <span className="skill-title">Angular</span>
                    </Flex>
                    <Progress percent={70} size="small" showInfo={false} />
                  </Tooltip>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Tooltip
                    title="This section includes all my skills and the level of
                  proficiency I have in each of them. I am first and foremost a
                  Full Stack Software Engineer"
                    color="#e7bfc0"
                  >
                    <Flex align="center" gap="small">
                      <Badge className="display-none skill-badge">
                        <Avatar src={`../email-1.png`} />
                      </Badge>
                      <span className="skill-title">React</span>
                    </Flex>
                    <Progress percent={70} size="small" showInfo={false} />
                  </Tooltip>
                </Col>
              </Row>
            </div>
            <div>
              <h1 id="experience">EXPERIENCE</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
            <div>
              <h1 id="education">EDUCATION</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
            <div>
              <h1>Resume</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Index;
