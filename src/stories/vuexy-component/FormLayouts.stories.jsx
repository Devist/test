import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label
} from 'reactstrap'

export default {
  title: 'μ»΄ν¬λνΈ (vuexy)/π organisms/Form Layouts',
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

export const HorizontalForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Horizontal Form</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm="3" for="name">
              First Name
            </Label>
            <Col sm="9">
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm="3" for="Email">
              Email
            </Label>
            <Col sm="9">
              <Input type="email" name="Email" id="Email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm="3" for="mobile">
              Mobile
            </Label>
            <Col sm="9">
              <Input
                type="number"
                name="mobile"
                id="mobile"
                placeholder="Mobile"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm="3" for="password">
              Password
            </Label>
            <Col sm="9">
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput
                type="checkbox"
                id="remember-me"
                label="Remember Me"
                defaultChecked={false}
              />
            </Col>
          </FormGroup>

          <FormGroup className="mb-0" row>
            <Col className="d-flex" md={{ size: 9, offset: 3 }}>
              <Button.Ripple
                className="mr-1"
                color="primary"
                type="submit"
                onClick={(e) => e.preventDefault()}>
                Submit
              </Button.Ripple>
              <Button.Ripple outline color="secondary" type="reset">
                Reset
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export const VerticalForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Vertical Form</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label for="nameVertical">First Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="nameVertical"
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="EmailVertical">Email</Label>
                <Input
                  type="email"
                  name="Email"
                  id="EmailVertical"
                  placeholder="Email"
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="mobileVertical">Mobile</Label>
                <Input
                  type="number"
                  name="mobile"
                  id="mobileVertical"
                  placeholder="Mobile"
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="passwordVertical">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="passwordVertical"
                  placeholder="Password"
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="remember-me-vertical"
                  label="Remember Me"
                  defaultChecked={false}
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup className="d-flex mb-0">
                <Button.Ripple
                  className="mr-1"
                  color="primary"
                  type="submit"
                  onClick={(e) => e.preventDefault()}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color="secondary" type="reset">
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export const MultipleColumnForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Multiple Column</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="nameMulti">First Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="nameMulti"
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="lastNameMulti">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastNameMulti"
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="cityMulti">City</Label>
                <Input
                  type="text"
                  name="city"
                  id="cityMulti"
                  placeholder="City"
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="CountryMulti">Country</Label>
                <Input
                  type="text"
                  name="country"
                  id="CountryMulti"
                  placeholder="Country"
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="CompanyMulti">Company</Label>
                <Input
                  type="text"
                  name="company"
                  id="CompanyMulti"
                  placeholder="Company"
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="EmailMulti">Email</Label>
                <Input
                  type="email"
                  name="Email"
                  id="EmailMulti"
                  placeholder="Email"
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup className="d-flex mb-0">
                <Button.Ripple
                  className="mr-1"
                  color="primary"
                  type="submit"
                  onClick={(e) => e.preventDefault()}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color="secondary" type="reset">
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
