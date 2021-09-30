// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import Proptypes from 'prop-types'
import { Grid, CheckSquare, MessageSquare, Mail, Calendar } from 'react-feather'
import {
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button
} from 'reactstrap'

import { ArrowLeft } from 'react-feather'
import React from 'react'

const BreadCrumbs = (props) => {
  // ** Props
  const {
    breadCrumbTitle,
    breadCrumbParent = '',
    breadCrumbParentLink = '',
    breadCrumbParent2,
    breadCrumbParent3,
    breadCrumbActive
  } = props

  return (
    <div className="content-header row col-12">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top ">
          <div className="d-flex align-items-center">
            <h2 className="content-header-title mb-0 text-center">
              {breadCrumbTitle === 'BACK' ? (
                <>
                  <ArrowLeft />
                  {/*<br />*/}
                  {/*<span className="font-small-1">돌아가기</span>*/}
                </>
              ) : (
                breadCrumbTitle
              )}
            </h2>

            <div className="breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none">
              <Breadcrumb>
                <BreadcrumbItem tag="li">
                  <Link to="/">Home</Link>
                </BreadcrumbItem>
                {breadCrumbParent && (
                  <>
                    <BreadcrumbItem tag="li" className="text-primary">
                      <Link to={breadCrumbParentLink}>{breadCrumbParent}</Link>
                    </BreadcrumbItem>
                    {breadCrumbParent2 ? (
                      <BreadcrumbItem tag="li" className="text-primary">
                        {breadCrumbParent2}
                      </BreadcrumbItem>
                    ) : (
                      ''
                    )}
                    {breadCrumbParent3 ? (
                      <BreadcrumbItem tag="li" className="text-primary">
                        {breadCrumbParent3}
                      </BreadcrumbItem>
                    ) : (
                      ''
                    )}
                  </>
                )}
                <BreadcrumbItem tag="li" active>
                  {breadCrumbActive}
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='content-header-right text-md-right col-md-3 col-12 d-md-block d-none'> */}
      {/*  <div className='form-group breadcrum-right dropdown'>*/}
      {/*    <UncontrolledButtonDropdown>*/}
      {/*      <DropdownToggle color='primary' size='sm' className='btn-icon btn-round dropdown-toggle'> */}
      {/*        <Grid size={14} />*/}
      {/*      </DropdownToggle>*/}
      {/*      <DropdownMenu tag='ul' right>*/}
      {/*        <DropdownItem tag={Link} to='/apps/chat'>*/}
      {/*          <CheckSquare className='mr-1' size={14} />*/}
      {/*          <span className='align-middle'>Todo</span>*/}
      {/*        </DropdownItem>*/}
      {/*        <DropdownItem tag={Link} to='/apps/chat'>*/}
      {/*          <MessageSquare className='mr-1' size={14} />*/}
      {/*          <span className='align-middle'>Chat</span>*/}
      {/*        </DropdownItem>*/}
      {/*        <DropdownItem tag={Link} to='/apps/email'>*/}
      {/*          <Mail className='mr-1' size={14} />*/}
      {/*          <span className='align-middle'>Email</span>*/}
      {/*        </DropdownItem>*/}
      {/*        <DropdownItem tag={Link} to='/apps/calendar'>*/}
      {/*          <Calendar className='mr-1' size={14} />*/}
      {/*          <span className='align-middle'>Calendar</span>*/}
      {/*        </DropdownItem>*/}
      {/*      </DropdownMenu>*/}
      {/*    </UncontrolledButtonDropdown>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}
export default BreadCrumbs
