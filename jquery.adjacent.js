(function ($) {
    /**
     * MIT License
     * https://github.com/philippze/jquery-adjacent/blob/master/LICENSE
     **/
    $.fn.adjacent = function (selector) {
        var list = [];
        var group;
        var isAdjacent = false;
        var first = true;
        $(this).find(selector).each(function () {
            if (first) {
                group = $(this);
                first = false;
            } else if (isAdjacent) {
                group = group.add($(this));
            } else {
                list.push(group);
                group = $(this);
            }
            isAdjacent = $(this).next().is(selector);
        });
        list.push(group);
        return list;
    };
    
}(jQuery));
