import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Content, ContentVariants } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import PermissionsContext from '../../utilities/permissions-context';
import messages from '../../Messages';
import { useChrome } from '@ausuliv/frontend-components/useChrome';

const ActiveUser = ({ linkDescription, linkTitle }) => {
  const intl = useIntl();
  const chrome = useChrome();
  const env = chrome.getEnvironment();
  const prefix = chrome.isProd() ? '' : `${env}.`;
  const { orgAdmin } = useContext(PermissionsContext);
  return orgAdmin ? (
    <Content className="pf-v6-u-mt-0" component={ContentVariants.h7}>
      {`${intl.formatMessage(messages.usersDescription)} `}
      {linkDescription}
      <Content
        component={ContentVariants.a}
        href={`https://www.${prefix}redhat.com/wapps/ugc/protected/usermgt/userList.html`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkTitle}
        <ExternalLinkAltIcon />
      </Content>
      .
    </Content>
  ) : (
    <Content className="pf-v6-u-mt-0" component={ContentVariants.h7}>
      {`${intl.formatMessage(messages.usersDescription)} `}
    </Content>
  );
};

ActiveUser.propTypes = {
  linkDescription: PropTypes.node,
  linkTitle: PropTypes.node,
};

ActiveUser.defaultProps = {
  linkDescription: '',
  linkTitle: ' user management list ',
};

export default ActiveUser;
