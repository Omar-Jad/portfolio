
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl }) => {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(182, 60, 93, 0.8)",
    color: "white",
    opacity: 0, 
    transition: "0.3s ease",
  };    

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ position: "relative", height: "250px", overflow: "hidden", borderRadius: "20px", marginBottom: "24px" }}>
        <img src={imgUrl} alt="project" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div className="proj-txtx" style={overlayStyle}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;