function itemTemplate(itemName) {
  return `<li> 
            <span class="shopping-item"> ${itemName} </span> 
            <div class="shopping-item-controls"> 
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                 <span class="button-label">delete</span>
              </button>
            </div> 
          </li>`;
}

function addNewItem() {
  var newGrocery = $(event.currentTarget).find("#shopping-list-entry").val();
  
  var newItem = itemTemplate(newGrocery);

  $(".shopping-list").append(newItem);
}

function start() {
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    addNewItem();
  });
}

$(start);

$(".shopping-list").on("click", ".shopping-item-delete", function() {
  $(this)
    .closest("li")
    .remove();
});

$(".shopping-list").on( "click", ".shopping-item-toggle", function() {
  $(this)
    .parent()
    .prev()
    .toggleClass("shopping-item__checked");
});

$(shoppingList);


