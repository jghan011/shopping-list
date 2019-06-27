$(document).ready(function Shopping() {

    $("#js-shopping-list-form").submit (function(event) {
        event.preventDefault();
        var submission = $(event.currentTarget).find("#shopping-list-entry").val();

        $(".shopping-list").append (`<li>
    <span class= "shopping-item">${submission}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
   </li>`)
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      let lineThrough = $(this).closest("li").find('.shopping-item');
      lineThrough.toggleClass("shopping-item__checked");
   });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
       $(this).closest("li").remove();
    });
    
    

    });



$(Shopping)
