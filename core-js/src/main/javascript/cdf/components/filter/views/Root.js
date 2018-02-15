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
  'cdf/lib/jquery',
  'amd!cdf/lib/underscore',
  './Parent',
  '../core/Model'
], function($, _, ParentView, Model) {

  "use strict";

  var SelectionStates = Model.SelectionStates;

  /**
   * @class cdf.components.filter.views.Root
   * @amd cdf/components/filter/views/Root
   * @extends cdf.components.filter.views.Parent
   * @classdesc Root View. The part of the filter that remains visible
   *   when the filter is collapsed.
   * @ignore
   */
  return ParentView.extend(/** @lends cdf.components.filter.views.Root# */{
    /**
     * View type.
     *
     * @const
     * @type {string}
     */
    type: 'Root',

    getViewModel: function() {
      var viewModel = this.base();

      var model = this.model;
      var hasChanged = _.memoize(function() {
        return model.hasChanged();
      });

      // Sets the viewModel with the isItemSelected information
      var childrenViewModels = null;
      var children = this.model.children();
      if (children) {
        childrenViewModels = children.map(function(childModel) {
          var childViewModel = childModel.toJSON();
          childViewModel.isItemSelected = childModel.getSelection() !== SelectionStates.NONE;
          return childViewModel;
        });
      }

      return _.extend(viewModel, {
        hasChanged: hasChanged,
        children: childrenViewModels
      });
    }

  });

});
