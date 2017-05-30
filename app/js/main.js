  $(document).ready(function(){

    $( ".answer" ).each(function() {
        $(this).hide().next().addClass('collapse');
    });

    $('.answer').first().show();    

    $('.question').on('click', function(){
      $(this).next().slideToggle();
      $(this).toggleClass('collapse');
    });

  });