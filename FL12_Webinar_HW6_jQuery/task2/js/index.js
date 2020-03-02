const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

// const todos = [
//   {
//     text: "Buy milk",
//     done: false
//   },
//   {
//     text: "Play with dog",
//     done: true
//   }
// ];

let toDo = [];

(function( $ ) {
  $.fn.myPlugin = function() {

    if(localStorage.getItem('toDo')){
      toDo = JSON.parse(localStorage.getItem('toDo'));

      for (let i = 0; i < toDo.length; i++) {
        $list.append(`<li class="item">
                      <span class="item-text">${toDo[i].text}</span>
                      <button class="item-remove">Remove <span class="span-btn">${i}</span> </button>
                    </li>`);
        if(toDo[i].done){
          $(`.item-text:eq(${i})`).addClass('done');
        }           
      }
    }

    function markTask(){
      $(this).addClass('done');
      let index = +$(this).siblings('.item-remove').children('.span-btn').text();
        toDo.splice(index, 1, {
          text: $(this).text(),
          done: true
        });
      localStorage.setItem('toDo', JSON.stringify(toDo)); 
    }

    $('.item-text').on('click', markTask);

    function removeClick(){
      let index = +$(this).children('.span-btn').text();
        $(this).parent('li').remove();
        toDo.splice(index, 1);
          $('.span-btn').each(function(indx, elem){
            $(elem).text(`${indx}`)
          });
      localStorage.setItem('toDo', JSON.stringify(toDo)); 
    }

    $('.item-remove').on('click', removeClick);

    function addClick(e){
      e.preventDefault();
      $('.item-remove').off();
      if($.trim($input.val()) !== ''){
        for (let i = toDo.length; i < toDo.length + 1; i++) {
          $list.append(`<li class="item">
                        <span class="item-text">${$input.val()}</span>
                        <button class="item-remove">Remove <span class="span-btn">${i}</span></button>
                      </li>`);
        }
        toDo.push(
            {
              text: $input.val(),
              done: false
            }
          );
        localStorage.setItem('toDo', JSON.stringify(toDo));
      }
      
      $('.item-remove').on('click', removeClick);

      $('.item-text').on('click', markTask);

      $input.val('');
    }
  
    $add.on('click', addClick);

    $("#search-btn").click(function(e){
      e.preventDefault();
      let $search = $("#search-input").val();
      $(".item-text").parent('.item').hide();
      $(`.item-text:contains('${$search}')`).parent('.item').show();
    });

  };
})(jQuery);

$('.mbox').myPlugin();