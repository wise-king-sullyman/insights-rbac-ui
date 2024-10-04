import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Stack, StackItem, Content } from '@patternfly/react-core';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import UsersList from './users-list';
import ActiveUser from '../../../presentational-components/shared/ActiveUsers';
import { useIntl } from 'react-intl';
import messages from '../../../Messages';
import '../../../App.scss';

const SetUsers = (props) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const { input } = useFieldApi(props);
  const intl = useIntl();
  const formOptions = useFormApi();

  useEffect(() => {
    setSelectedUsers(formOptions.getState().values['users-list'] || []);
  }, []);

  useEffect(() => {
    input.onChange(selectedUsers);
    formOptions.change('users-list', selectedUsers);
  }, [selectedUsers]);

  return (
    <Fragment>
      <Form>
        <Stack hasGutter>
          <StackItem>
            <Content>
              <ActiveUser linkDescription={intl.formatMessage(messages.toManageUsersText)} />
            </Content>
          </StackItem>
          <StackItem>
            <FormGroup fieldId="select-user">
              <UsersList selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} displayNarrow />
            </FormGroup>
          </StackItem>
        </Stack>
      </Form>
    </Fragment>
  );
};

SetUsers.propTypes = {
  selectedUsers: PropTypes.array,
  setSelectedUsers: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SetUsers;
