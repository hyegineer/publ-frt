// 검색영역 포커스 됐을 때 효과
$('.search-bar .inp').on('focus', function () {
  $(this).parent('.search-bar').addClass('active');
})

// 검색영역 포커스 해제됐을 때 효과 해제
$('.search-bar .inp').on('blur', function () {
  $(this).parent('.search-bar').removeClass('active');
})

// 검색영역에 검색어 입력할 때 아래에 자동완성 나타나기
$('.search-bar .inp').on('input', function () {
  if ($(this).val()) {
    $(this).parent('.search-bar').siblings('.search-list-wrap').addClass('active');
  } else {
    $(this).parent('.search-bar').siblings('.search-list-wrap').removeClass('active');
  }
})

// 아래에 자동완성 나타났던거 다른 영역 클릭하면 사라지게
$(document).mouseup(function (e) {
  var layerSearchBar = $(".search-list-wrap");
  if (layerSearchBar.has(e.target).length === 0) {
    $('.search-list-wrap').removeClass('active');

    if ($('.search-bar-wrap .select-bar')) {
      $('.search-bar-wrap .select-bar').removeClass('active');
    }
  }
});

$('.search-bar-wrap .select-bar').on('click', function () {
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $(this).siblings('.search-list-wrap').addClass('active');
  } else {
    $(this).siblings('.search-list-wrap').removeClass('active');
  }
})