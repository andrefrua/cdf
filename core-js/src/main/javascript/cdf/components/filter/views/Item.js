/*!
 * Copyright 2002 - 2016 Webdetails, a Pentaho company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

define([
  './Abstract',
  '../core/Model'
], function(AbstractView, Model) {

  "use strict";

  var SelectionStates = Model.SelectionStates;

  /**
   * @class cdf.components.filter.views.Item
   * @amd cdf/components/filter/views/Item
   * @extends cdf.components.filter.views.Abstract
   * @classdesc View for items.
   * @ignore
   */
  return AbstractView.extend(/** @lends cdf.components.filter.views.Item# */{
    /**
     * View type.
     *
     * @const
     * @type {string}
     */
    type: 'Item',

    /**
     * Sets the Item viewModel with the necessary information
     *
     * @return {Object} The viewModel object.
     */
    getViewModel: function() {
      var viewModel = this.base();

      viewModel.isItemSelected = this.model.getSelection() !== SelectionStates.NONE;

      return viewModel;
    }
  });

});
