/**
 * Created by jizhihui on 2016/4/22.
 */
var HUI    = {};
HUI.config = {
    version : '1.0'
};

HUI.drag = function (options) {
    var defaults = {
        obj       : '',
        handle    : '',
        container : '',
        temp      : '',
        limit     : '',
        lockX     : '',
        lockY     : '',
        fixed     : '',
        dragStart : function () {},
        dragMove  : function () {},
        dragEnd   : function () {}
    };
};