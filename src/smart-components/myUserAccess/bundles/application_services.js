import React from 'react';
import { EmptyState, EmptyStateBody, List, ListItem,  } from '@patternfly/react-core';
import { CogsIcon } from '@patternfly/react-icons';
import { useIntl } from 'react-intl';
import messages from '../../../Messages';
// import RhelBundle from './rhel';

import './MUABundles.scss';

// eslint-disable-next-line no-unused-vars
const ApplicationServices = () => {
  const intl = useIntl();
  return (
    <EmptyState  headingLevel="h4" icon={CogsIcon}  titleText={<>{intl.formatMessage(messages.appServicesNotManaged)}</>} variant="lg" className="rbac-m-myUserAccess-bundle-emptyState">
      <EmptyStateBody>
        <List className="rbac-m-myUserAccess-bundle-emptyState-list">
          <ListItem>{intl.formatMessage(messages.allUsersViewEverything)}</ListItem>
          <ListItem>{intl.formatMessage(messages.actionsOnClustersPermissions)}</ListItem>
        </List>
      </EmptyStateBody>
    </EmptyState>
  );
};

export default ApplicationServices;
