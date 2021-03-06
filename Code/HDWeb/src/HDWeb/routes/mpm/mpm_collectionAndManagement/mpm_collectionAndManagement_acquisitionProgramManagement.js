/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:采集管理员采集计划管理
 */
layui.define(['header','nonavigationBody','panelCrumbs','button','tableList'],function (exports) {
    var obj = function (componentName) {
      layui.header.header(componentName);
      layui.nonavigationBody.nonavigationBody(componentName);
      layui.panelCrumbs.panelCrumbs(componentName);
      layui.button.button(componentName);
      layui.tableList.tableList(componentName);
    }
    exports('mpm_collectionAndManagement_acquisitionProgramManagement', obj);
  });