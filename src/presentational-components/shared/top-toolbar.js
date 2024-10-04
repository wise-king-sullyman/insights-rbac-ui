import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Content, ContentVariants, Flex, FlexItem } from '@patternfly/react-core';
import { ToolbarTitlePlaceholder } from './loader-placeholders';
import RbacBreadcrumbs from './breadcrumbs';
import { PageHeader, PageHeaderTitle } from '@ausuliv/frontend-components/PageHeader';

import './top-toolbar.scss';

export const TopToolbar = ({ children, breadcrumbs }) => (
  <Fragment>
    {breadcrumbs && (
      <section className="pf-v6-c-page__main-breadcrumb">
        <RbacBreadcrumbs {...breadcrumbs} />
      </section>
    )}
    <PageHeader className="rbac-page-header">{children}</PageHeader>
  </Fragment>
);

TopToolbar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  breadcrumbs: PropTypes.array,
  paddingBottom: PropTypes.bool,
};

TopToolbar.defaultProps = {
  paddingBottom: false,
};

export const TopToolbarTitle = ({ title, renderTitleTag, description, children }) => (
  <Fragment>
    <Flex>
      <FlexItem className="pf-v6-u-mb-sm">
        <PageHeaderTitle title={title || <ToolbarTitlePlaceholder />} className="rbac-page-header__title" />
      </FlexItem>
      <FlexItem alignSelf={{ modifier: 'alignSelfCenter' }}>{renderTitleTag && renderTitleTag()}</FlexItem>
    </Flex>
    {description && (
      <Content className="rbac-page-header__description">
        {typeof description === 'string' ? <Content component={ContentVariants.p}>{description}</Content> : description}
      </Content>
    )}
    {children}
  </Fragment>
);

TopToolbarTitle.propTypes = {
  title: PropTypes.node,
  renderTitleTag: PropTypes.func,
  description: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
