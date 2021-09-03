import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Button } from 'antd';
import { useIntl, FormattedMessage, connect, IndexModelState, ConnectRC, Loading } from 'umi';
import styles from './index.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

interface PageProps {
  table: IndexModelState;
  loading: Loading;
}

const Welcome: ConnectRC<PageProps> = (props) => {
  const { dispatch, table } = props;
  const intl = useIntl();

  const onChange = () => {
    let name = '超级无敌牛逼';
    if (table.name !== '牛逼') {
      name = '牛逼';
    }
    dispatch({
      type: 'table/query',
      payload: {
        name,
      },
    });
  };
  return (
    // <PageContainer>
    <Card>
      <Alert
        message={intl.formatMessage({
          id: 'pages.welcome.alertMessage',
          defaultMessage: 'Faster and stronger heavy-duty components have been released.',
        })}
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />

      <Button onClick={onChange}>点我切换名称{table.name}</Button>
      <Typography.Text strong>
        <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="Advanced Form" />{' '}
        <a
          href="https://procomponents.ant.design/components/table"
          rel="noopener noreferrer"
          target="__blank"
        >
          <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
        </a>
      </Typography.Text>
      <CodePreview>yarn add @ant-design/pro-table</CodePreview>
      <Typography.Text
        strong
        style={{
          marginBottom: 12,
        }}
      >
        <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="Advanced layout" />{' '}
        <a
          href="https://procomponents.ant.design/components/layout"
          rel="noopener noreferrer"
          target="__blank"
        >
          <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
        </a>
      </Typography.Text>
      <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
    </Card>
    // </PageContainer>
  );
};

export default connect(({ table, loading }: PageProps) => ({
  table,
  loading: loading.models.table,
}))(Welcome);
