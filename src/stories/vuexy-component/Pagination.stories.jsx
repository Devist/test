import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import ReactPaginate from 'react-paginate'

export default {
  title: 'μ»΄ν¬λνΈ (vuexy)/π molecules/Pagination',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'νλ©΄μμ μμ­μ κ΅¬λΆν  λ μ¬μ©ν©λλ€. κ°λ¨νκ² μ¬μ©ν  λλ λ¨μν ```<hr/>``` νκ·Έλ₯Ό μ¬μ©ν΄λ λ©λλ€.'
      }
    }
  }
}

export const SeparatedPagination = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Separated</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactPaginate
          pageCount={10}
          nextLabel={''}
          breakLabel={'...'}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          activeClassName={'active'}
          pageClassName={'page-item'}
          previousLabel={''}
          nextLinkClassName={'page-link'}
          nextClassName={'page-item next-item'}
          previousClassName={'page-item prev-item'}
          previousLinkClassName={'page-link'}
          pageLinkClassName={'page-link'}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName={'pagination react-paginate'}
        />
      </CardBody>
    </Card>
  )
}

export const PaginationPositions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Positions</CardTitle>
      </CardHeader>{' '}
      <CardBody>
        <Row>
          <Col xl="4" md="12">
            <h5 className="text-left">Left Aligned</h5>
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              containerClassName={
                'pagination react-paginate justify-content-start'
              }
            />
          </Col>
          <Col xl="4" md="12">
            <h5 className="text-center">Center Aligned</h5>
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              containerClassName={
                'pagination react-paginate justify-content-center'
              }
            />
          </Col>
          <Col xl="4" md="12">
            <h5 className="text-right">Right Aligned</h5>
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName={
                'pagination react-paginate justify-content-end'
              }
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export const PaginationSizes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Sizes</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg="4" sm="12">
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName={'pagination react-paginate pagination-lg'}
            />
          </Col>
          <Col lg="4" sm="12">
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName={'pagination react-paginate'}
            />
          </Col>
          <Col lg="4" sm="12">
            <ReactPaginate
              pageCount={5}
              nextLabel={''}
              breakLabel={'...'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousLabel={''}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName={'pagination react-paginate pagination-sm'}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
