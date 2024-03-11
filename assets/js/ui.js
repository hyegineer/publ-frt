function openModal(id) {
  $('#' + id).addClass('active');
  $('#' + id).children('.custom-modal').scrollTop(0);
}

function closeModal(id) {
  $('#' + id).removeClass('active');
}

function allCloseModal() {
  $('.modal-wrapper').removeClass('active');
}
// 탭 구현
$('[data-tab]').on('click', function () {
  var thisBtns = $(this).parent('.tabs').attr('id');
  var thisContent = $(this).attr('data-tab');
  var thisContents = $(`#${thisContent}`).parent('.tab-content-container').attr('id');
  $(`#${thisBtns} > [data-tab]`).removeClass('active');
  $(this).addClass('active');
  $(`#${thisContents} > .tab-content`).removeClass('active');
  $(`#${thisContent}`).addClass('active');
})