window.onload = function () {
    var location = document.getElementById('todo');
    TodoModule.showTodo(location);
};

var TodoModule = function () {
    var showTodo = function (location) {
            var block = document.createElement('div'),
                head = document.createElement('div'),
                input = document.createElement('input'),
                placeholder = 'Какие планы?';

            block.className = 'block';
            head.className = 'block_head';
            input.className = 'block_head_input';

            input.setAttribute('placeholder', placeholder);
            input.setAttribute('type', 'search');

            var header = location.appendChild(block).appendChild(head).appendChild(input);

            return header;
        },
        addItem = function (locations, text) {
            var item = document.createElement('div'),
                span = document.createElement('span'),
                checkbox = document.createElement('input');

            item.className = 'item';
            item.appendChild(checkbox);
            item.appendChild(span);

            checkbox.className = 'item_checkbox';
            checkbox.setAttribute('type', 'checkbox');

            span.className = 'item_text';
            span.innerHTML = text;

            return locations.appendChild(item);
        };

    this.addEventListener('keydown', function(e){
        var input_head = document.getElementsByClassName('block_head_input')[0];
        var locations = document.getElementById('todo');
        if (e.keyCode === 13) {
            addItem(locations, input_head.value);
        }
    })

    return {
        showTodo : showTodo,
        addItem : addItem
    }
}();
