'use strict';

var d3 = window.d3;

// node
import Draw from './Draw';
import utils from './utils';

var instances = new Map();

export default function (options) {
  function factory(options) {
    var el = d3.select(options.target);
    var id = el.attr('greuler-id');
    if (!id) {
      id = utils.id();
      el.attr('greuler-id', id);
      instances.set(id, new Draw(id));
    }
    return instances.get(id).update(options);
  }

  return factory(options);
}
