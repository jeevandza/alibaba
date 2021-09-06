import { Container, Row, Col} from 'reactstrap';
import ANavBar from '../nav_bar';

const LayOut = (props) =>{
    return(
        <>
          <Container fluid="xxl">
              {/* Navbar mounted here */}
          <ANavBar/>

             <Row style={{marginTop:"2px", backgroundColor:"#fff"}}>
                <Col >
                    <div style={{marginTop:"2rem"}}>
                        <div>
                           home
                        </div>
                        <div>
                            All products
                        </div>
                    </div>
                </Col >
                <Col xl="10" style={{height:"calc(100vh - 90px)",overflowY: "scroll",width:"82%",padding:"2rem", scrollbarColor:"red"}}>
                    {props.children}
                </Col>
             </Row>
           </Container>
        </>
    )
}

export default LayOut;