for (let item of Array.from($("div"))){
  console.log(item)
}

$($('div')[0]).addClass('green')
$('div').each(function() {
  console.log($(this).attr('class'))
});

setTimeout(()=> $('div').first().removeClass('green'),1000)
setTimeout(()=> $('div').first().addClass('blue'),2000)
