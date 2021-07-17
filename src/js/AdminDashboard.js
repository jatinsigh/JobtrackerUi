<script>
  $(document).ready(function($)
  {
    //--->add row at the end > start
    $(document).on('click',".btn_row_add_below_end", function(e)
    {
      var tableBody = $(document).find('.tbl_code_with_mark').find("tbody");
      var trLast = tableBody.find("tr:last");
      var trNew = trLast.clone();
      trLast.after(trNew);
    });

    //--->current row > delete > start
    $(document).on('click',".btn_row_delete", function(e)
    {
      var r = $(this).closest('tr').remove();
    });
    //--->current row > delete > end
    
  });
</script>
