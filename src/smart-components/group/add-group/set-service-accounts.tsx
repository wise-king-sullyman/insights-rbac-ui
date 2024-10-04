import React, { Fragment, useState, useEffect } from 'react';
import { Alert, Form, FormGroup, Stack, StackItem, Content } from '@patternfly/react-core';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import { useIntl } from 'react-intl';
import messages from '../../../Messages';
import AppLink from '../../../presentational-components/shared/AppLink';
import ServiceAccountsList from './service-accounts-list';
import { ServiceAccount } from '../../../helpers/service-account/service-account-helper';

interface SetServiceAccountProps {
  name: string;
}

const SetServiceAccounts: React.FunctionComponent<SetServiceAccountProps> = ({ name }) => {
  const [selectedAccounts, setSelectedAccounts] = useState<ServiceAccount[]>([]);

  const { input } = useFieldApi({ name });
  const intl = useIntl();
  const formOptions = useFormApi();

  useEffect(() => {
    setSelectedAccounts(formOptions.getState().values['service-accounts-list'] || []);
  }, []);

  useEffect(() => {
    input.onChange(selectedAccounts);
    formOptions.change('service-accounts-list', selectedAccounts);
  }, [selectedAccounts]);

  return (
    <Fragment>
      <Form>
        <Stack hasGutter>
          <StackItem>
            <Content>
              {intl.formatMessage(messages.addServiceAccountsToGroupDescription)}
              <Alert
                className="pf-v6-u-mt-sm rbac-service-accounts-alert"
                variant="info"
                component="span"
                isInline
                isPlain
                title={intl.formatMessage(messages.visitServiceAccountsPage, {
                  link: (
                    <AppLink to="/service-accounts" linkBasename="/iam">
                      {intl.formatMessage(messages.serviceAccountsPage)}
                    </AppLink>
                  ),
                })}
              />
            </Content>
          </StackItem>
          <StackItem>
            <FormGroup fieldId="select-service-accounts">
              <ServiceAccountsList selected={selectedAccounts} setSelected={setSelectedAccounts} />
            </FormGroup>
          </StackItem>
        </Stack>
      </Form>
    </Fragment>
  );
};

export default SetServiceAccounts;
