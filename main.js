$(".main-content .maincontainer .cardmain .img-container").on("mouseover",function ()
{
$(this).css('transform', 'scale(120%)');
})

$(".main-content .maincontainer .cardmain .img-container").on("mouseout",function ()
{
$(this).css('transform', 'scale(100%)');
})

$(".menu .menucontainer .logo").on("mouseover",function ()
{
$(this).css('transform', 'scale(120%)');
})

$(".menu .menucontainer .logo").on("mouseout",function ()
{
$(this).css('transform', 'scale(100%)');
})




//investiga "hover"
//como editar otro elemento que no sea 'this'
//get element by id no se usa en jquery porque se apunta directo al identifier
//https://www.pair.com/support/kb/how-to-use-jquery-to-generate-modal-pop-up-when-clicked/
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal