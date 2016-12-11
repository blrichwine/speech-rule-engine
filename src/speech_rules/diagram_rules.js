// Copyright 2016 Volker Sorge
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Diagram rules.
 * @author volker.sorge@gmail.com (Volker Sorge)
 */

goog.provide('sre.DiagramRules');

goog.require('sre.MathStore');
goog.require('sre.MathmlStoreUtil');
goog.require('sre.MathspeakUtil');



/**
 * Rule initialization.
 * @constructor
 * @extends {sre.MathStore}
 */
sre.DiagramRules = function() {
  sre.DiagramRules.base(this, 'constructor');
};
goog.inherits(sre.DiagramRules, sre.MathStore);
goog.addSingletonGetter(sre.DiagramRules);


/**
 * @type {sre.MathStore}
 */
sre.DiagramRules.mathStore = sre.DiagramRules.getInstance();


/** @private */
sre.DiagramRules.defineRule_ = goog.bind(
    sre.DiagramRules.mathStore.defineRule,
    sre.DiagramRules.mathStore);


goog.scope(function() {
  var defineRule = sre.DiagramRules.defineRule_;

  var addCQF = sre.DiagramRules.addCustomQuery_;

  /**
   * Initialize the custom functions.
   * @private
   */
  sre.DiagramRules.initCustomFunctions_ = function() {
    // addCQF('CQFspaceoutNumber', sre.DiagramRules.omitParentheses_);
  };


  /**
   * Diagram rules.
   * @private
   */
  sre.DiagramRules.initDiagramRules_ = function() {

  // DIAGRAM: Testing equ2.
    defineRule(
      'repeat-initial', 'mathspeak.default',
      '[t] "Thus"; [n] ../../../../children/*[1]/children/*[1]',
      'self::cell', 'count(children/*)=0',
      '../../../parent::table[@role="equality"]'
    );

  };

});  // goog.scope


sre.DiagramRules.getInstance().initializer = [
  sre.DiagramRules.initCustomFunctions_,
  sre.DiagramRules.initDiagramRules_
];



