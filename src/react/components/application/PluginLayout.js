import React from 'react';
import css from './PluginLayout.scss';

const PluginLayout = ({
  Sidebar,
  Content
}) => (
  <div className={css.container}>
    <div className={css.sidebarContainer}>
      {
        Sidebar && <Sidebar />
      }
    </div>
    <div className={css.contentContainer}>
      <Content />
    </div>
  </div>
);

export default PluginLayout;