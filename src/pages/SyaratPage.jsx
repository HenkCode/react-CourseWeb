import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from '../data/index';

import FaqComponent from "../components/FaqComponent";

const SyaratPage = () => {
  return (
    <div className="syarat-page">
      <div className="syarat-page2 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2">Syarat & Ketentuan</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis, ad quaerat esse similique odio sequi expedita corporis autem maxime.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="fw-bold">1. lorem</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloribus provident voluptatibus, ipsa nihil saepe laboriosam maiores dolores laborum corrupti accusantium praesentium ratione quod cumque quidem. Dolorum fuga exercitationem quos!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius, odit reiciendis iure, sint ducimus, iste impedit vero error accusantium maxime consequatur dolor veniam modi et placeat. Sapiente, debitis impedit.</p>
            </Col>
          </Row>
          <Row>
            <Col className="py-3">
              <h5 className="fw-bold">2. lorem</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam consectetur quis vero sequi. In quos fugit officiis beatae iste quisquam illo, deserunt a nobis, velit ullam esse, laboriosam eveniet voluptate rem. Quisquam officia soluta alias, quo impedit officiis at harum?</p>
            </Col>
          </Row>
          <Row>
            <Col className="py-3">
              <h5 className="fw-bold">3. lorem</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere itaque, quasi recusandae explicabo sequi tempora possimus, inventore blanditiis nisi ad placeat deserunt, provident molestias perferendis illum consequuntur excepturi quidem? Laudantium iusto neque eveniet accusamus sed magnam earum quae obcaecati eius?</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>    
  )
}

export default SyaratPage